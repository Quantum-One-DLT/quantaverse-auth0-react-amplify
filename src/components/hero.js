import React from "react";

const logo = "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd3eba284-1022-41ef-a3bc-9c218ed8c3ad%2Fimg_202263155825.png?table=block&id=7df3771e-2418-4020-b3ff-bf808d140ae6&spaceId=1a5e50b6-2a76-42f5-8c0a-38a14e587b94&width=72&userId=538a2d1e-ea3a-494d-8533-d1924dbf1cab&cache=v2";

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
