import React from "react";

const logo = "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd3eba284-1022-41ef-a3bc-9c218ed8c3ad%2Fimg_202263155825.png?table=block&id=7df3771e-2418-4020-b3ff-bf808d140ae6&spaceId=1a5e50b6-2a76-42f5-8c0a-38a14e587b94&width=250&userId=538a2d1e-ea3a-494d-8533-d1924dbf1cab&cache=v2";

const Hero = () => (
  <div className="text-center hero">
    <img className="mb-3 app-logo" src={logo} alt="quantumOne-logo" width="72" />
    <h1 className="mb-4">Create your QuantaVerse account and</h1>
    <p className="lead">
      and become eligible for Quantum One DAO's airdrop campaign!{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://quantumone.network"
      > 
      </a>
    </p>
  </div>
);

export default Hero;
