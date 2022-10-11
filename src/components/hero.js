import React from "react";

const logo = "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd3eba284-1022-41ef-a3bc-9c2";

const Hero = () => (
  <div className="text-center hero">
    <img className="mb-3 app-logo" src={logo} alt="quantumOne-logo" width="120" />
    <h1 className="mb-4">Quantum One is...</h1>
    <p className="lead">
      ...not Web2, Web3, Web5, nor X, it is the {" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://quantumone.network"
      >
        QuantaVerse 
      </a>
    </p>
  </div>
);

export default Hero;
