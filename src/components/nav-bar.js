import React from "react";
import MainNav from "./main-nav";

const NavBar = () => {
  return (
    <nav className="navbar" style={{"background-color": "#03fff6"}}>
      <div className="container-fluid mb-3">
        <a class="navbar-brand" href="https://quantaverseid.io">
          <img src=".src/components/logo.svg" width="118" height="30" class="d-inline-block align-top" alt=""/>
          </a>
    QuantaVerse ID
       <MainNav />
         </div>
      </nav>
  );
};

export default NavBar;
