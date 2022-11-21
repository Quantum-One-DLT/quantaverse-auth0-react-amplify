import React from "react";

const Logo = require("../assets/quantumone-home.jpg");

const Hero = () => (
  <div className="text-center hero">
    <h1 className="mb-4"> QuantaVerse AirDrop </h1>
    <p className="lead">
       The 1st 3500 users who verify their ID or prove prior KYC will become one of the earliest members of Quantum One DAO - creators of the QuantaVerse. Once complete with verification, create or link your account using the login button found in the menu at the top right of the page. Don't forget to check out a sample of Aetna's public insurance rate data at the quantaverseid.io/aetna-rates and quantaverseid.io/aetna-sample. As time progresses, we will continue to accumlumate a compendium of rate data from all providers, hospitalas, and insurance companies to be incorporated into our incentivized healthcare platform - HealthOne. To get started, {" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://app.fractal.id/authorize?client_id=QHAVw9SmY3f0dkaNB8GLnL8SWlRf_Qk8708qAKHJgkA&redirect_uri=https%3A%2F%2Fquantaverseid.io%2Fcallback&response_type=code&scope=contact%3Aread%20verification.basic%3Aread%20verification.basic.details%3Aread%20verification.liveness%3Aread%20verification.liveness.details%3Aread"
      >Verify ID | Prove Prior KYC.
     </a> 
    </p>
   <p className="lead"> Once complete with verification, create or link your account using the login button found in the menu at the top right of the page.</p>
    <figure className='figure'>
      <img width="100%"
        src={Logo}
        className="figure-img img-fluid rounded shadow-3 mb-3"
        alt="new-website-preview"
      />
      <figcaption className="figure-caption"> Preview of new website at quantumone.network. Work should be complete by 11/25/2022.</figcaption>
    </figure>
  </div>
);

export default Hero;
