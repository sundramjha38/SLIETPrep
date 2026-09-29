import { Routes, Route } from "react-router";

import Landing from "../pages/landingPage/Landing";
import Login from "../pages/login/Login";
import Signup from "../pages/Signup/Signup";
import ProfileSetup from "../pages/ProfileSetup/ProfileSetup";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import Paper from "../pages/Papers/Paper";



function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/login" element={<Login/>} />

      <Route path="/signup" element={<Signup/>} />

      <Route path="/profile-setup" element={<ProfileSetup/>}/>

      <Route path="/dashboard" element={<Dashboard/>}></Route>

      <Route path="/profile" element={<Profile/>}></Route>

      <Route path="/paper" element={<Paper />} />

    </Routes>
  );
}

export default AppRoutes;
