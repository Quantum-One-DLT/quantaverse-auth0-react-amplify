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
        alt="logo"
        src="/src/assets/logo.svg"
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
