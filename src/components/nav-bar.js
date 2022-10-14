import React from "react";
import MainNav from "./main-nav";

const NavBar = () => {
  return (
   <div className="nav-container mb-3">
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
     <div className="container">
      <a className="navbar-brand" href="%PUBLIC_URL%/logo.svg">Quantum One DAO</a>
      </div>
     <MainNav/>
   </nav>
  </div>
  );
};

export default NavBar;
