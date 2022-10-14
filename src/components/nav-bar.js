import React from "react";
import MainNav from "./main-nav";

const NavBar = () => {
  return (
    <nav className="navbar navbar-custom">
      <div className="container-fluid mb-3">
        <a className="navbar-brand" href="#">
          <img src="/src/assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
          Quantum One
    .    </a>
       <MainNav />
         </div>
      </nav>
  );
};

export default NavBar;
