import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../utils/i18n";
import "./Navbar.css";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Hide navbar on scroll down, show on stop or scroll up
  useEffect(() => {
    let lastScroll = 0;
  
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY < lastScroll - 10) {
        // Show navbar when scrolling up significantly
        setShowNavbar(true);
      } else if (currentScrollY > lastScroll + 10) {
        // Hide navbar when scrolling down significantly
        setShowNavbar(false);
      }
  
      lastScroll = currentScrollY;
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const 
  handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`navbar ${showNavbar ? "visible" : "hidden"}`}
      id="navbar-section"
    >
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <img
            src="https://static.wixstatic.com/media/df6cc5_8cf044fd131248dfa992ac2f39f239f4~mv2.png"
            alt="Logo"
          />
        </div>

        {/* Navigation Links - Centered */}
        <ul className={`nav-links ${menuOpen ? "open" : ""} tracking-wider`}>
          <li>
            <a onClick={() => handleScrollToSection("hero-section")}>
              {t("Home")}
            </a>
          </li>
          <li>
            <a onClick={() => handleScrollToSection("programs-section")}>
              {t("Services")}
            </a>
          </li>
          <li>
            <a onClick={() => handleScrollToSection("feedback-section")}>{t("Reviews")}</a>
          </li>
          <li>
            <a onClick={() => handleScrollToSection("home")}>{t("About")}</a>
          </li>
    <p className="mt-auto text-white text-xs">{t("copyright.title")}</p>
          </ul>

        {/* Actions (Contact & Language Select) */}
        <div className="actions">
          <button className="contact-btn">
            <FaPhoneAlt className="phone-icon" /> {t("contact_number")}
          </button>
          <div className="custom-dropdown">
            <select onChange={(e) => changeLanguage(e.target.value)}>
              <option value="en">English</option>
              <option value="ru">Русский</option>
            </select>
          </div>
        </div>


        {/* Mobile Menu Toggle */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
