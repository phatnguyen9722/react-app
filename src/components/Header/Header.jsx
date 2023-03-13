import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

import logo from "../../assets/images/favicon.ico";

function Header() {
  return (
    <header className="header">
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo here" />
              <h1>My Study</h1>
            </div>

            <div className="navigation">
              <ul className="menu">
                <li className="nav__item">
                  <NavLink to="home">Home</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="useRef">useRef</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="cart">Cart</NavLink>
                </li>
              </ul>
            </div>
          </div>
    </header>
  );
}

export default Header;
