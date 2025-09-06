import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage.jsx";
import MenuPage from "../pages/MenuPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import AboutPage from "../pages/AboutUs.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import AdminDashboard from "../pages/AdminDashboard.jsx";
import OrderPage from "../pages/OrderPage.jsx";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/order" element={<OrderPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
