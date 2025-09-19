import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProfileDropdown from "./components/ProfileDropdown";
import UserProfile from "./components/UserProfile";
import Settings from "./components/Settings";

import Home from "./components/Home";
import About from "./components/About";
import OurArtist from "./components/OurArtist";
import Eric from "./components/Ourartist/Eric";
import Parth from "./components/Ourartist/parth";
import Poufa from "./components/Ourartist/Poufa";
import SmallCategory from "./components/Ourcategories/SmallCategory";
import StipplingCategory from "./components/Ourcategories/StipplingCategory";
import LoveCategory from "./components/Ourcategories/LoveCategory";
import CoverCategory from "./components/Ourcategories/CoverCategory";
import NatureCategory from "./components/Ourcategories/NatureCategory";
import ReligiousCategory from "./components/Ourcategories/ReligiousCategory";
import Contact from "./components/Contact";
import Footer from "./footer";

import "./App.css"; // ✅ CSS file

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (token && storedUserData) {
      setUserData(storedUserData);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      setUserData(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    localStorage.removeItem("lastLoginDate");
    setIsLoggedIn(false);
    setUserData(null);
    setShowProfileMenu(false);
  };

  return (
    <Router>
      <div>
        {/* ✅ Overlay */}
        {isMenuOpen && (
          <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>
        )}

        <nav className="navbar">
          {/* Logo Left */}
          <div className="logo-container">
            <img
              className="logo"
              src="https://res.cloudinary.com/dnbayngfx/image/upload/v1738302308/logo_lgkl6k.png"
              alt="Logo"
            />
          </div>

          {/* Links / Drawer */}
          <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>HOME</Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
              </li>
              <li className="categories-menu">
                <Link to="/our-artist" onClick={() => setIsMenuOpen(false)}>OUR ARTIST</Link>
                <ul className="dropdown">
                  <li><Link to="/ourartist/Eric" onClick={() => setIsMenuOpen(false)}>Eric Dsuza</Link></li>
                  <li><Link to="/ourartist/Parth" onClick={() => setIsMenuOpen(false)}>Parth Savani</Link></li>
                  <li><Link to="/ourartist/Poufa" onClick={() => setIsMenuOpen(false)}>Poufa</Link></li>
                </ul>
              </li>
              <li className="categories-menu">
                <Link onClick={() => setIsMenuOpen(false)}>OUR CATEGORIES</Link>
                <ul className="dropdown">
                  <li><Link to="/our-categories/small" onClick={() => setIsMenuOpen(false)}>Small</Link></li>
                  <li><Link to="/our-categories/Stippling" onClick={() => setIsMenuOpen(false)}>Stippling</Link></li>
                  <li><Link to="/our-categories/Love" onClick={() => setIsMenuOpen(false)}>Love</Link></li>
                  <li><Link to="/our-categories/Religious" onClick={() => setIsMenuOpen(false)}>Religious</Link></li>
                  <li><Link to="/our-categories/Cover" onClick={() => setIsMenuOpen(false)}>Cover</Link></li>
                  <li><Link to="/our-categories/Nature" onClick={() => setIsMenuOpen(false)}>Nature</Link></li>
                </ul>
              </li>
              <li>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
              </li>
              <li className="profile-menu-container">
                <div
                  className="profile-button"
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                >
                  {isLoggedIn ? (
                    <div className="profile-logo">
                      {userData?.name ? userData.name.charAt(0).toUpperCase() : "U"}
                    </div>
                  ) : (
                    <span className="login-icon">👤</span>
                  )}
                </div>
                {showProfileMenu && (
                  <ProfileDropdown
                    isLoggedIn={isLoggedIn}
                    userData={userData}
                    onClose={() => setShowProfileMenu(false)}
                    onLogout={handleLogout}
                  />
                )}
              </li>
            </ul>
          </div>

          {/* Hamburger Right */}
          <div
            className={`menu-icon ${isMenuOpen ? "open" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-artist" element={<OurArtist />} />
          <Route path="/ourartist/Eric" element={<Eric />} />
          <Route path="/ourartist/Parth" element={<Parth />} />
          <Route path="/ourartist/Poufa" element={<Poufa />} />
          <Route path="/our-categories/small" element={<SmallCategory />} />
          <Route path="/our-categories/Stippling" element={<StipplingCategory />} />
          <Route path="/our-categories/Love" element={<LoveCategory />} />
          <Route path="/our-categories/Religious" element={<ReligiousCategory />} />
          <Route path="/our-categories/Cover" element={<CoverCategory />} />
          <Route path="/our-categories/Nature" element={<NatureCategory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
