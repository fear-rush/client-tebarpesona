import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/Home/logo.png";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <NavBar className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="" className="logo-image" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/" onClick={() => setOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/tourism" onClick={() => setOpen(false)}>
                Tourism
              </Link>
            </li>
            <li>
              <Link to="/virtualtour" onClick={() => setOpen(false)}>
                Virtual Tour
              </Link>
            </li>
            <li>
              <Link to="/geospatial" onClick={() => setOpen(false)}>
                Geospatial
              </Link>
            </li>
            <li>
              <Link to="/kotarempah" onClick={() => setOpen(false)}>
                Kota Rempah
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-icon" onClick={() => setOpen(!open)}>
          {open ? <FiMenu /> : <FiX />}
        </div>
      </div>
    </NavBar>
  );
}

export default Navbar;

const NavBar = styled.div`
  width: 100%;
  padding: 0.2rem;
  background-color: #fff;
  overflow: hidden;
  position: relative;
  z-index: 2;
  .navbar-container {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;

    .navbar-icon {
      display: none;
    }
  }
  .menu {
    ul {
      display: flex;
      gap: 4rem;
      list-style-type: none;
      li {
        a {
          text-decoration: none;
          font-size: 1.3rem;
          color: #005376;
          font-weight: bold;
          font-family: "Montserrat", sans-serif;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .navbar-container {
      padding: 1rem;
      margin-top: 0;
      margin-bottom: 0;
      position: relative;
      z-index: 90;

      .navbar-icon {
        display: flex;
        font-size: 3rem;
        align-self: flex-end;
        margin-left: auto;
      }
    }

    .logo-image {
      width: 90%;
      height: 90%;
      text-align: center;
      background-size: cover;
      transform: translateX(0.5rem);
    }

    .menu {
      overflow: hidden;
      ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        li {
          margin-top: 2rem;
          position: absolute;
          top: 50%;
          right: 50%;
          transform: translate(50%, -50%);
          z-index: 99;
          a {
            font-size: 1rem;
          }
        }
      }
    }
  }
`;
