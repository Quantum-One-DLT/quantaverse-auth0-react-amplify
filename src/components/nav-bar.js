import React from "react";

import MainNav from "./main-nav";

const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a clasName = "navbar-brand" href="#">
           <img src="./logo.svg" width="28" height="28" alt="">
    <div className="container">
          <div className="navbar-brand logo"/>
    <MainNav />
        </div>
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
