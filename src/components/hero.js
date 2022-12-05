import React from "react";

const Logo = require("../assets/tokenomics.jpg");

const Hero = () => (

  <div className="text-center hero">
    <h2 className="mb-4">We're AirDropping the 1st 3500 new Quantum One DAO users who verify their ID!</h2>
    <h5 className="text-justified">
       Join the omni-compliant, post quantum secure, identity-centric DAO who's eliminating blockchain investment risk and disrupting the healthcare market with 
       it's incentivized POS HealthONE platform. To get started {" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://app.fractal.id/authorize?client_id=QHAVw9SmY3f0dkaNB8GLnL8SWlRf_Qk8708qAKHJgkA&redirect_uri=https%3A%2F%2Fapp.quantumone.network%2Fcallback&response_type=code&scope=contact%3Aread%20verification.basic%3Aread%20verification.basic.details%3Aread%20verification.liveness%3Aread%20verification.liveness.details%3Aread"
      >Verify ID | Prove Prior KYC.
     </a> 
    </h5>
    <h5 className="text-justified">Be sure to create a Quantum One account upon successful ID verification. Contact us via support message with any questions</h5>
    <figure className='figure'>
      <img width="100%"
        src={Logo}
        className="figure-img img-fluid rounded shadow-3 mb-3"
        alt="quantumone-tokenomics-slide"
      />
      <figcaption className="figure-caption"> Quantum One Roton Tokenomics. Learn more in the {" "}
      <a 
        target="_blank"
        rel="noopener noreferrer"
        href="https://quantumone.notion.site/Quantum-One-Whitepaper-7df3771e24184020b3ffbf808d140ae6"
        > Whitepaper
      </a>
      </figcaption>
    </figure>
  </div>
);

export default Hero;
