import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../utils/i18n";
import "./Navbar.css";
import { FaPhoneAlt } from "react-icons/fa";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import StarIcon from '@mui/icons-material/Star';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

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

  const handleScrollToSection = (sectionId) => {
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
              <HomeIcon className="mb-2 mr-1" />
              {t("navbar.home")}
            </a>
          </li>
          <li>
            <a onClick={() => handleScrollToSection("programs-section")}>
              <BookmarkBorderIcon className="mb-2 mr-1" />
              {t("navbar.services")}
            </a>
          </li>
          <li>
            <a onClick={() => handleScrollToSection("feedback-section")}>
              <StarIcon className="mb-2 mr-1" />
              {t("navbar.reviews")}
            </a>
          </li>
          <li>
            <a onClick={() => handleScrollToSection("home")}>
              <FlagCircleIcon className="mb-2 mr-1" />
              {t("navbar.about")}
            </a>
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
