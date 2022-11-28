import React from "react";

const Logo = require("../assets/tokenomics.jpg");

const Hero = () => (

  <div className="text-center hero">
    <h2 className="mb-4"> It's AirDrop Time </h2>
    <h5 className="lead">
       Welcome to Quantum One DAO's QuantaVerse testnet token air drop campaign where we are passionately compliant with the regulations overlooked by FTX, Luna and many others in the space. 
       The 1st 3500 users who complete our ID/KYC verification process and create a QuantaVerse ID account will receive a random amount of our testnet ERC-20 "DA-FI" token. 250 out of 50,000 total DA-FI tokens will be dropped. Be sure to create a QuantaVerse account upon successful completion of the ID verification process.   
       And check out our demo healthcare rate analysis service and sample data from Aetna. We're building a compendium of rate data from providers, hospitals, and insurers for easy analysis and incorporating it into our proof-of-stake driven incentivized healthcare platform - HealthONE. To get started, {" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://app.fractal.id/authorize?client_id=QHAVw9SmY3f0dkaNB8GLnL8SWlRf_Qk8708qAKHJgkA&redirect_uri=https%3A%2F%2Fapp.quantumone.network%2Fcallback&response_type=code&scope=contact%3Aread%20verification.basic%3Aread%20verification.basic.details%3Aread%20verification.liveness%3Aread%20verification.liveness.details%3Aread"
      >Verify ID | Prove Prior KYC.
     </a> 
    </h5>
    <figure className='audio'>
      <img width="80%"
        src={Logo}
        className="figure-img img-fluid rounded shadow-3 mb-3"
        alt="new-website-preview"
      />
      <figcaption className="figure-caption"> Quantum One Roton Tokenomics. Learn more in the whitepaper .</figcaption>
    </figure>
  </div>
);

export default Hero;
