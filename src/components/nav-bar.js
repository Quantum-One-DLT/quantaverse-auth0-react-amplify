import React from "react";

import MainNav from "./main-nav";

const NavBar = () => {
  return (
    <nav className="navbar" style="background-color: #03fff6;">
      <div className="container-fluid mb-3">
        <a className = "app-logo" href="#">
          </a>   
       <MainNav />
         </div>
      </nav>
  );
};

export default NavBar;
