import { Link, useNavigate, useSearchParams } from "react-router";
import { useState } from "react";
import Navbar from "../../components/common/Navbar";

function Signup() {
  // these are the things that will help me to integrate the backend and frontend of the overall site

  const [searchParams, setSearchParams] = useSearchParams();
  const urlError = searchParams.get("error");

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // here we will keep the code of the input handler which is bascially handle the anychange throughout the form and it is kind of standard fucntion which is used to handle change in form

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setError("");
    if (urlError) setSearchParams({});
  };
  // now we will add the submit handler to the form which basic purpose is to what will happen if someone submit the form

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      setError("Password do not match");
      return;
    }
    try {
      setLoading(true);
      setError("");
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
        credentials: "include",
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "Something went wrong");
        return;
      }
      navigate("/profile-setup");
    } catch (error) {
      console.error("Signup error:", error);
      setError("Unable to connect to the server");
    } finally {
      setLoading(false);
    }
  };

  // tell evrything we have what we want now need to connect this with the form

  //   adding the google redirect form in the workflow this function will deal with that function
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar showNavigation={false} />

      <div className="grid min-h-[calc(100vh-73px)] lg:grid-cols-2 ">
        {/* Left branding panel */}
        <div className="hidden bg-blue-700 p-12 text-white lg:flex lg:items-center">
          <div className="mx-auto w-full max-w-lg">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">
              Start your preparation
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight xl:text-5xl">
              Everything you need to prepare for your exams.
            </h1>

            <p className="mt-6 text-lg leading-8 text-blue-100">
              Create your SLIETPrep account and organise your semester
              preparation around your subjects, question papers and important
              questions.
            </p>
          </div>
        </div>

        {/* Signup form */}
        <div className="flex items-center justify-center px-6 py-12 sm:px-10 lg:px-12 mt-24">
          <div className="w-full max-w-md">
            {/* Heading */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Create your account
              </h2>

              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Start preparing smarter with SLIETPrep.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className=" mt-8 space-y-5 ">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-950"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-950"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-950"
                />
              </div>

              {/* Confirm password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Confirm password
                </label>

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-950"
                />
              </div>

              {/* this part is to show any error if it is there */}
              {(error || urlError) && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  {error || urlError}
                </p>
              )}

              {/* Signup button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Creating account..." : "Create Account"}
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />

                <span className="text-sm text-slate-400">OR</span>

                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
              </div>

              {/* for the google part also we need to handle  sumbit button which basically purpose is to validate the google id then rediret us to google authentication and final to the site pages accordingly
               */}

              {/* Google */}
              <button
                onClick={handleGoogleLogin}
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white px-4 py-3 font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 cursor-pointer"
              >
                Continue with Google
              </button>
            </form>

            {/* Login */}
            <p className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
