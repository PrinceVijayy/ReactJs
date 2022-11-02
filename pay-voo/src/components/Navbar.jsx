import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accounts from "../pages/Accounts";
import Analytics from "../pages/Analytics";
import Cards from "../pages/Cards";
import Home from "../pages/Home";
import Payments from "../pages/Payments";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";

const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
