import React from "react";

import MainNav from "./main-nav";
import logo from "./logo.svg";

const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
       <div className="container">
        <a clasName = "navbar-brand" href="#">
         <img src="./logo.svg" width="28" height="28" alt=""/>
          <div className="logo" href="#"/>
          </a>
    <MainNav />
         </div>
      </nav>
    </div>
  );
};

export default NavBar;
