import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import validator from "validator";
import jwt from "jsonwebtoken";
import googleClient from "../config/google.js";
import crypto from "crypto";
import studentProfileModel from "../models/studentProfile.model.js";

import dotenv from 'dotenv';
dotenv.config();
export const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // validation for the all required field are present or not
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name , email and password are required ",
      });
    }
    // validation for the name
    if (name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: "Name must contain at least 2 characters",
      });
    }

    // validation of the email
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    // check for the already account with this mail
    const existingUser = await User.findOne({
      email: email.toLowerCase().trim(),
    });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists",
      });
    }

    // check the password strength
    const passwordOptions = {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    };
    if (!validator.isStrongPassword(password, passwordOptions)) {
      return res.status(400).json({
        success: false,
        message: "password is too weak",
        suggestions:
          "password must contain at least 8 characters , one uppercase letter  one lowercase letter, one number and one special character",
      });
    }

    // hashing of the password
    const hashPassword = await bcrypt.hash(password, 10);

    // creating of the user
    const user = await User.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: hashPassword,
      authProvider: "local",
    });

    // here once the user is created we need to send the jwt token for the user so that user can access protected routes from this pathways that is signup and use the site as well

    // creation of the token

    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    // sending the cookie to the browser

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // sending response of the scccessfully creation of the user

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      profileExists: false,
    });
  } catch (error) {
    console.error("Signup error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check for the required field if it is there or not
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }
    // validitaion of the email
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }
    // find user
    const user = await User.findOne({
      email: email.toLowerCase().trim(),
    });

    // check for the user existance in the database or not
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid emial or password",
      });
    }

    // check for the authentication provider
    if (user.authProvider !== "local") {
      return res.status(400).json({
        success: false,
        message: "This account uses Google authentication",
      });
    }

    // compare password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    // now till here i hvae password correct as well as user find so need tos end responce along with the jwt token

    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    // store the JWT  token in http only cookies
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // /this part will be act as bridge for the authentication and the profile creation so we will check if the profile for this user is already created or not and send the response accordingly

    const profile = await studentProfileModel.findOne({
      userId: user._id,
    });

    // sending the response
    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      profileExists: !!profile,
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// from the google the login and signup fucntion will be same we do not need to implement it in different fucntion at the end we will get the data

export const googleLogin = async (req, res) => {
  const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";

  try {
    const state = crypto.randomBytes(32).toString("hex");
    const nonce = crypto.randomBytes(32).toString("hex");

    const { codeVerifier, codeChallenge } =
      await googleClient.generateCodeVerifierAsync();

    // store auth values in http only cookies
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 10 * 60 * 1000,
    };

    res.cookie("google_auth_state", state, cookieOptions);
    res.cookie("google_auth_nonce", nonce, cookieOptions);
    res.cookie("google_auth_code_verifier", codeVerifier, cookieOptions);

    const authorizationUrl = googleClient.generateAuthUrl({
      access_type: "online",
      scope: ["openid", "profile", "email"],
      state,
      nonce,
      code_challenge: codeChallenge,
      code_challenge_method: "S256",
    });

    return res.redirect(authorizationUrl);
  } catch (error) {
    console.error("Google login error:", error);
    return res.redirect(
      `${frontendUrl}/login?error=${encodeURIComponent("Unable to initiate Google login")}`,
    );
  }
};
// google auth callback
export const googleCallback = async (req, res) => {
  const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";

  // redirect back to the login page with the error message
  const fail = (message) =>
    res.redirect(`${frontendUrl}/login?error=${encodeURIComponent(message)}`);

  const tempCookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  };

  try {
    const { code, state, error } = req.query;

    if (error) return fail("Google authentication was cancelled");
    if (!code) return fail("Missing authorization code");

    if (!state || state !== req.cookies.google_auth_state) {
      return fail("Invalid OAuth state");
    }

    const codeVerifier = req.cookies.google_auth_code_verifier;
    if (!codeVerifier) return fail("OAuth verification failed");

    const { tokens } = await googleClient.getToken({ code, codeVerifier });

    const ticket = await googleClient.verifyIdToken({
      idToken: tokens.id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (!payload) return fail("Unable to verify the Google account");

    if (!payload.nonce || payload.nonce !== req.cookies.google_auth_nonce) {
      return fail("Invalid Google authentication request");
    }

    const googleId = payload.sub;
    const email = payload.email;
    const name = payload.name;

    if (!googleId || !name || !email) {
      return fail("Required Google account information is missing");
    }

    if (!payload.email_verified) {
      return fail("Google email is not verified");
    }

    let user = await User.findOne({ googleId });

    if (!user) {
      const existingEmailUser = await User.findOne({
        email: email.toLowerCase().trim(),
      });

      if (existingEmailUser) {
        return fail(
          "An account with this email already exists. Please login using your existing account.",
        );
      }

      user = await User.create({
        name: name.trim(),
        email: email.toLowerCase().trim(),
        authProvider: "google",
        googleId,
      });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.clearCookie("google_auth_nonce", tempCookieOptions);
    res.clearCookie("google_auth_state", tempCookieOptions);
    res.clearCookie("google_auth_code_verifier", tempCookieOptions);

    const profile = await studentProfileModel.findOne({ userId: user._id });

    return res.redirect(
      profile ? `${frontendUrl}/dashboard` : `${frontendUrl}/profile-setup`,
    );
  } catch (error) {
    console.error("google callback error:", error);
    return fail("Google authentication failed");
  }
};
// this fucntion will deal for the logout and also clear the related account cookie from the browser

export const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error("Logout error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to logout",
    });
  }
};
