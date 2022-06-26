import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <a className="navbar-brand" href="#">
          Navbar w/ text
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              {/* <a className="nav-link" href="#">
                Home
              </a> */}
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item ml-5">
              {/* <a className="nav-link" href="#">
                User Data
              </a> */}
              <Link to="/userdata"> User Data</Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li> */}
          </ul>
          {/* <span className="navbar-text">
            Navbar text with an inline element
          </span> */}
        </div>
      </nav>
    </>
  );
};

export default Header;
