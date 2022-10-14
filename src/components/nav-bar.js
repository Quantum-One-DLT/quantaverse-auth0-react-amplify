import React from "react";
import MainNav from "./main-nav";
import {NavbarBrand, Navbar} from "reactstrap";


const NavBar = () => {
  return (
   <Navbar
    className="my-2"
    color="dark"
    dark
     >
      <NavbarBrand  href="/">
      <img
        alt="quantum-one-logo"
        src={require("src/assets/logo.svg")}
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
