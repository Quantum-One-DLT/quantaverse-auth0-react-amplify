import React from "react";

const logo = "https://quantumone.b-cdn.net/images/logo.svg";

const Hero = () => (
  <div className="text-center hero">
    <img className="mb-3 app-logo" src={logo} alt="quantumOne-logo" width="96" />
    <h1 className="mb-4"> Humanity's optimal digital trust paradigm airdrop </h1>
    <p className="lead">
       The 1st 3500 users who verify their ID or prove prior KYC will become one of the earliest members of Quantum One DAO. {" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://app.fractal.id/authorize?client_id=QHAVw9SmY3f0dkaNB8GLnL8SWlRf_Qk8708qAKHJgkA&redirect_uri=https%3A%2F%2Fquantaverseid.io%2Fcallback&response_type=code&scope=contact%3Aread%20verification.basic%3Aread%20verification.basic.details%3Aread%20verification.liveness%3Aread%20verification.liveness.details%3Aread"
      >Verify ID now
      </a>
    </p>
  </div>
);

export default Hero;
