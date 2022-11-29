import React from "react";

const Logo = require("../assets/tokenomics.jpg");

const Hero = () => (

  <div className="text-center hero">
    <h2 className="mb-4">It's AirDrop Time</h2>
    <h5 className="lead">
       Verify your ID, create an account, &amp receive our testnet token - each equivalent to 10M mainnet Roton.  
       . To get started, {" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://app.fractal.id/authorize?client_id=QHAVw9SmY3f0dkaNB8GLnL8SWlRf_Qk8708qAKHJgkA&redirect_uri=https%3A%2F%2Fapp.quantumone.network%2Fcallback&response_type=code&scope=contact%3Aread%20verification.basic%3Aread%20verification.basic.details%3Aread%20verification.liveness%3Aread%20verification.liveness.details%3Aread"
      >Verify ID | Prove Prior KYC.
     </a> 
    </h5>
    <figure className='figure'>
      <img width="100%"
        src={Logo}
        className="figure-img img-fluid rounded shadow-3 mb-3"
        alt="quantumone-tokenomics-slide"
      />
      <figcaption className="figure-caption"> Quantum One Roton Tokenomics. Learn more in the whitepaper .</figcaption>
    </figure>
  </div>
);

export default Hero;
