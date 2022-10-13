import React from "react";

import MainNav from "./main-nav";
import logo from "./logo.svg";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
       <div className="container">
        <a clasName = "logo" href="#">
         <img src="./logo.svg" alt="quantumOne-logo"/>
           < Logo />
           </div>
          </a>
    <MainNav />
         </div>
      </nav>
    </div>
  );
};

export default NavBar;
