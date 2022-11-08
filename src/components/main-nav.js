import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import LoginButton from './loginButton';
import LogoutButton from './logoutButton';
import { useAuth0 } from "@auth0/auth0-react";

import {
  NavItem, Collapse, NavbarToggler, Nav
} from "reactstrap";

const MainNav = () => {

  const {
    isAuthenticated
  } = useAuth0();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
    <NavbarToggler style={{outline:"none"}} onClick={toggle}/>
    <Collapse isOpen={isOpen} navbar>
    <Nav className="me-auto" navbar>
    <NavItem>
      <NavLink
        to="/"
        exact
        className="nav-link"
        activeClassName="router-link-exact-active"
      >
        Home
    </NavLink>
    </NavItem>
    <NavItem>
      {isAuthenticated && (
        <NavLink
          to="/profile"
          exact
          className="nav-link"
          activeClassName="router-link-exact-active"
        >
          Profile
        </NavLink>
      )}
    </NavItem>
    <NavItem>
      {isAuthenticated && (
        <NavLink
          to="/aetna-rates"
          exact
          className="nav-link"
          activeClassName="router-link-exact-active"
        >
          HealthONE
        </NavLink>
      )}
    </NavItem>

      {!isAuthenticated && (

        <NavItem>
          <LoginButton style={{color: "#03fff6"}}/>
        </NavItem>

      )}
      {isAuthenticated && (
        <NavItem>
          <LogoutButton style={{color: "#1e2022"}} />
        </NavItem>
      )}
      </Nav>
      </Collapse>
    </div>
  );
}
export default MainNav;
