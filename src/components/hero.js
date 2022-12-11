import React from "react";

const Logo = require("../assets/tokenomics.jpg");

const Hero = () => (

  <div className="text-center hero">
    <h2 className="mb-4">Verify your ID, get Quantum One DAO's testnet ERC-20 token!</h2>
    <h5 className="text-justified">
       We're dropping a total of 250 DA-FI tokens to the the 1st 3500 who verify their ID and create a Quantum One account. To get started {" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://app.fractal.id/authorize?client_id=QHAVw9SmY3f0dkaNB8GLnL8SWlRf_Qk8708qAKHJgkA&redirect_uri=https%3A%2F%2Fapp.quantumone.network%2Fcallback&response_type=code&scope=contact%3Aread%20verification.basic%3Aread%20verification.basic.details%3Aread%20verification.liveness%3Aread%20verification.liveness.details%3Aread"
      >Verify ID | Prove Prior KYC
     </a> 
    </h5>
    <h5 className="text-justified">Contact support below with any questions. Return to Quantum One DAO {" "} </h5>
    <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://quantumone.network"
      > homepage.</a>
    <figure className='figure'>
      <img width="50%"
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
