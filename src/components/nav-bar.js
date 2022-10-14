import React from "react";
import MainNav from "./main-nav";

const NavBar = () => {
  return (
   <div className="nav-container mb3">
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
     <div className="container">
      <a className="navbar-brand" href="#">Quantum One DAOr</a>
      <div className="container">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      </div>
      </div>
     <MainNav/>
   </nav>
  </div>
  );
};

export default NavBar;
