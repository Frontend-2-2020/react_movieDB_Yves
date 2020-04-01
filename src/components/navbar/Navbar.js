import React from "react";
import tmdb from "../../assets/images/tmdb.png";
import "../../assets/images/css/main.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const linkStyle = {
  color: "white",
  fontFamily: "Shadows Into Light",
  fontSize: "1.9rem"
};

//Basic Bootsrap Navbar || No styling
const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <img
        src={tmdb}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="logo"
      />
      <Link to={"/"} style={linkStyle}>
        The Movie Data Base <FaHome />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav"></div>
    </nav>
  );
};

export default Navbar;
