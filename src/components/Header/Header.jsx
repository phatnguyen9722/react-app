import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

import logo from "../../assets/images/favicon.ico";

import { Container, Row } from "reactstrap";
function Header() {
  return (
    <header className="header">
      <Container>
        <Row>
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
                <li className="nav__item">
                  <NavLink to="home">Home</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
