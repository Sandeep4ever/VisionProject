import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GlobalState from "./Contex/GlobalContext";
const Header = () => {
  const { setsubmitType } = useContext(GlobalState);
  const handleHomeButton = () => {
    setsubmitType("");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <button
            className="navbar-toggler bg-light collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li>
                <Link
                  to="/"
                  className="nav-link active  me='2' fw-bold active"
                  aria-current="page"
                  onClick={handleHomeButton}
                >
                  <span className="home"> Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/userdata" className="nav-link fw-bold  ">
                  <span className="home"> User Data</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
