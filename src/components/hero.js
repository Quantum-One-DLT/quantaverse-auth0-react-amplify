import React from "react";
import { withStyles } from '@material-ui/core/styles'; 
import { Button, Divider } from '@material-ui/core';

const Tokenomics = require("../assets/tokenomics.jpg");

const Hero = () => (

  <div className="text-center hero">
    <h2 className="mb-2">Quantum One DAO Air Drop</h2>
    
     <h6 className="text-center mb-4">We're dropping a total of 250 DA-FI tokens to the the 1st 3500 people who verify their ID and create a Quantum One DAO account.</h6>
      <div className="btn btn-md mb-4">
       <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://app.fractal.id/authorize?client_id=QHAVw9SmY3f0dkaNB8GLnL8SWlRf_Qk8708qAKHJgkA&redirect_uri=https%3A%2F%2Fapp.quantumone.network%2Fcallback&response_type=code&scope=contact%3Aread%20verification.basic%3Aread%20verification.basic.details%3Aread%20verification.liveness%3Aread%20verification.liveness.details%3Aread"
        >Verify ID
      </a> 
     </div>
    <Divider component="div" className="middle mt-4 mb-4" />
    <h4 className="text-center">Roton Distribution Plan</h4>
    <figure className='figure'>
      <img width="100%"
        src={Tokenomics}
        className="figure-img img-fluid rounded shadow-3 mb-3"
        alt="quantumone-tokenomics-slide"
      />
      <figcaption className="figure-caption"> Quantum One mainnet coin aka Roton Tokenomics. Learn more in the {" "}
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
