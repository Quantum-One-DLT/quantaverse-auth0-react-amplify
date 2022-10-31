import React from "react";

const Logo = require("../assets/quantumone-home.jpg");

const Hero = () => (
  <div className="text-center hero">
    <img width="100%" className="mb-3 logo" src={Logo} alt="new-website-preview" />
    <h1 className="mb-4"> Quantum One DAO's QuantaVerse AirDrop </h1>
    <p className="lead">
       The 1st 3500 users who verify their ID or prove prior KYC will become one of the earliest members of Quantum One DAO. To get started, {" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://app.fractal.id/authorize?client_id=QHAVw9SmY3f0dkaNB8GLnL8SWlRf_Qk8708qAKHJgkA&redirect_uri=https%3A%2F%2Fquantaverseid.io%2Fcallback&response_type=code&scope=contact%3Aread%20verification.basic%3Aread%20verification.basic.details%3Aread%20verification.liveness%3Aread%20verification.liveness.details%3Aread"
      >Verify ID/KYC 
      </a>
       and then return here to create a QuantaVerse ID account or link another.
    </p>
  </div>
);

export default Hero;
