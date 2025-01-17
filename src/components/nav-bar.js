import React from "react";
import MainNav from "./main-nav";
import {NavbarBrand, Navbar} from "reactstrap";
let Logo = require("../assets/NavLogo.png");

const NavBar = () => {
  return (
  <div>
   <Navbar
    className="my-0"
    color="dark"
    dark
     >
      <NavbarBrand  href="/">
      <img
        alt="quantumOne-logo"
        src={Logo}
        style={{
          height: 45,
          width: 250,
        }}
      />
    </NavbarBrand>
     <MainNav/>
   </Navbar>
   </div>
  );
};

export default NavBar;
