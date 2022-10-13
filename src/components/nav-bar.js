import React from "react";

import MainNav from "./main-nav";
import logo from "./logo.svg";
import Logo from "./logo";

const NavBar = () => {
  return (
    <nav className="navbar" style="background-color: #03fff6;">
      <div className="container-fluid mb-3">
        <a clasName = "navbar-brand" href="#">
          <Logo />
          </a>   
       <MainNav />
         </div>
      </nav>
  );
};

export default NavBar;
