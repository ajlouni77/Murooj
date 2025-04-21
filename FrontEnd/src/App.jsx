import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Hero from "./pages/Hero";
import FeaturedProducts from "./pages/FeaturedProducts";
import MarketCategories from "./pages/MarketCategories";
import VegetablesPage from "./pages/VegetablesPage";
import Shops from "./pages/Shops";
import ShopId from "./pages/ShopId";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import JoinUs from "./pages/joinus";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Cart from "./pages/Cart";
import Fruits from "./pages/Fruits";
import Vegetables from "./pages/Vegetables";
import Payment from "./pages/payment";
import UserProfile from "./pages/UserProfile";
import AdminDashboard from "./pages/AdminDashboard";
// import PrivateRoute from "./pages/PrivateRoute";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/central-market" element={<FeaturedProducts />} />
        <Route path="/vegetables" element={<VegetablesPage />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/shops/:id" element={<ShopId />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/market" element={<MarketCategories />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/vegetables" element={<Vegetables />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
};

export default App;
