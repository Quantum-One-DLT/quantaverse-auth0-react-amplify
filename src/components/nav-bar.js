import React from "react";
import MainNav from "./main-nav";

const NavBar = () => {
  return (
   <div className="nav-container mb3">
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
     <div className="container">
      <a className="navbar-brand" href="#">Quantum One DAOr</a>
      </div>
     <MainNav/>
   </nav>
  </div>
  );
};

export default NavBar;
