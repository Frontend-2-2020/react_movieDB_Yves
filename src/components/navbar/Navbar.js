import React from "react";
import tmdb from "../../assets/images/tmdb.png";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <img
        src={tmdb}
        width="40"
        height="40"
        className="d-inline-block align-top"
        alt="logo"
      />
      <a className="navbar-brand" href="#null">
        The Movie Data Base
      </a>
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
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/list">
              List by Name
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
