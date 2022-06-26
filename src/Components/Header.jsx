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
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container">
          <button
            class="navbar-toggler bg-light collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto ">
              <li>
                <Link
                  to="/"
                  class="nav-link active  me='2'  active"
                  aria-current="page"
                  onClick={handleHomeButton}
                >
                  <span class="home"> Home</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/userdata" class="nav-link ">
                  <span class="home"> User Data</span>
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
