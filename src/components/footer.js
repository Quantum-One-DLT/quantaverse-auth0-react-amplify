import React from "react";
import Logo from "./logo";

const Footer = () => (
  <footer className="bg-light p-3 text-center">
    <div>
    <Logo/>
    <p>
      Quantaverse ID is a registered trademark of{" "}
      <a target="_blank" rel="noopener noreferrer" href="https://quantumone.network">
        Quantum One DAO LLC
      </a>
    </p>
    </div>
  </footer>
);

export default Footer;
