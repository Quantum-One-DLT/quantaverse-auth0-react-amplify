import React from "react";
import MainNav from "./main-nav";
import {NavbarBrand, Navbar} from "reactstrap";
import { FC } from "react";
import { ReactComponent as Logo } from '@/src/components/assets/logo.svg';

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
