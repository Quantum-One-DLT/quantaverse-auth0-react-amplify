import React from "react";
import MainNav from "./main-nav";
import {NavbarBrand, Navbar} from "reactstrap";
let Logo = require("../assets/logo.png");

const NavBar = () => {
  return (
   <Navbar
    className="my-2"
    color="dark"
    dark
     >
      <NavbarBrand  href="/">
      <img
        alt="quantumOne-logo"
        src={Logo}
        style={{
          height: 32,
          width: 32
        }}
        QuantaVerse ID
      />
    </NavbarBrand>

     <MainNav/>
   </Navbar>
  );
};

export default NavBar;
