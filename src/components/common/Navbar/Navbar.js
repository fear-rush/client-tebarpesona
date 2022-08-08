import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

import logo from "../../../assets/Home/logo.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logo} alt="" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <FontAwesomeIcon icon={faTimes} className="fa-times" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="fa-bars" />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/tourism" className="nav-links" onClick={closeMobileMenu}>
              Tourism
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/virtualtour"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Virtual Tour
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/geospatial"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Geospatial
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/kotarempah"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Kota Rempah
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
