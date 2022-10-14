import React from "react";
import MainNav from "./main-nav";
import {NavbarBrand, Navbar} from "reactstrap";
let Logo = require("../assets/NavLogo.png");

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
          height: 40,
          width: 40
        }}
        QuantaVerse ID
      />
    </NavbarBrand>

     <MainNav/>
   </Navbar>
  );
};

export default NavBar;
