import React from "react";

const Logo = require("../assets/quantumone-home.jpg");

const Hero = () => (

  <div className="text-center hero">
    <h1 className="mb-4"> It's AirDrop Time </h1>
    <h6 className="lead">
       Welcome to the home of Quantum One DAO's QuantaVerse, where users are safe from the incompliant policies that brought down FTX, Luna, and others. Celebrate our thesis and join the 1st 3500 users who complete our ID/KYC verification process to become eligible for the ongoing air drop of our testnet ERC-20 token. Be sure to create your QuantaVerse ID account after completing the process. 
       And check out our demo healthcare rate analysis service and sample data from Aetna. We're building a compendium of rate data from providers, hospitals, and insurers for easy analysis and incorporating it into our proof-of-stake driven incentivized healthcare platform - HealthONE. To get started, {" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://app.fractal.id/authorize?client_id=QHAVw9SmY3f0dkaNB8GLnL8SWlRf_Qk8708qAKHJgkA&redirect_uri=https%3A%2F%2Fapp.quantumone.network%2Fcallback&response_type=code&scope=contact%3Aread%20verification.basic%3Aread%20verification.basic.details%3Aread%20verification.liveness%3Aread%20verification.liveness.details%3Aread"
      >Verify ID | Prove Prior KYC.
     </a> 
    </h6>
    <figure className='figure'>
      <img width="100%"
        src={Logo}
        className="figure-img img-fluid rounded shadow-3 mb-3"
        alt="new-website-preview"
      />
      <figcaption className="figure-caption"> A screenshot of Quantum One DAO's homepage at https://quantumone.network .</figcaption>
    </figure>
  </div>
);

export default Hero;
