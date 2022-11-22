import React from "react";

const Logo = require("../assets/quantumone-home.jpg");

const Hero = () => (
  <div className="text-center hero">
    <h1 className="mb-4"> The QuantaVerse Drop </h1>
    <h6 className="lead">
       Welcome to the QuantaVerse - created by Quantum One DAO. The 1st 3500 users who complete our ID/KYC verification process are automatically eligible for our ongoing air drop of our testnet ERC-20 token. Once complete with verification, create your QuantaVerse ID account using the login button found in the main menu. 
       And check out our Aetna rate data demos accesible from the main menu. We're building a compendium of rate data from providers, hospitals, and insurers to make easily available to everyone and incorporate into our proof-of-stake driven incentivized healthcare platform - HealthONE. To get started, {" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://app.fractal.id/authorize?client_id=QHAVw9SmY3f0dkaNB8GLnL8SWlRf_Qk8708qAKHJgkA&redirect_uri=https%3A%2F%2Fquantaverseid.io%2Fcallback&response_type=code&scope=contact%3Aread%20verification.basic%3Aread%20verification.basic.details%3Aread%20verification.liveness%3Aread%20verification.liveness.details%3Aread"
      >Verify ID | Prove Prior KYC.
     </a> 
    </h6>
    <figure className='figure'>
      <img width="100%"
        src={Logo}
        className="figure-img img-fluid rounded shadow-3 mb-3"
        alt="new-website-preview"
      />
      <figcaption className="figure-caption"> A preview of the homepage of our new website at quantumone.network. Head to https://test.d1zp1gymhbgtxt.amplifyapp.com for a live preview .</figcaption>
    </figure>
  </div>
);

export default Hero;
