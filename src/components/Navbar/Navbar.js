import React from "react";
import avatar from "../../images/profile.jpeg";
import { NavLink } from "react-router-dom";
import Title from "../Title/Title";
const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="nav">
        <div className="profile">
          <img src={avatar} alt="" />
          <div>
           <h3>Muhammad Asif</h3>
          </div>
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact activeClassName="active">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            {" "}
            <NavLink to="/portfolio" exact activeClassName="active">
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            {" "}
            <NavLink to="/resume" exact activeClassName="active">
              Resume
            </NavLink>
          </li>
          <li className="nav-item">
            {" "}
            <NavLink to="/contact" exact activeClassName="active">
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="footer">
          <p>@2021 Portfolio</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
