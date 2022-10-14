import React from "react";
import MainNav from "./main-nav";

const NavBar = () => {
  return (
    <nav className="navbar" style={{"background-color": "#1e2022"}}>
      <div className="container-fluid mb-3">
        <a class="navbar-brand" href="https://quantaverseid.io">
          <img src="/src/assets/logo.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>
          </a>
    QuantaVerse ID
       <MainNav />
         </div>
      </nav>
  );
};

export default NavBar;
