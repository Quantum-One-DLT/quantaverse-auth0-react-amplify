import React from "react";

const HomeContent = () => (
  <div className="next-steps">
    <h2 className="my-5 text-center">What is Quantaverse ID?</h2>

    <div className="row">
      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.notion.so/quantumone/Quantum-One-Whitepaper-7df3771e24184020b3ffbf808d140ae6"
          >
            <i className="fas fa-link mr-2" />
            Whitepaper
          </a>
        </h6>
        <p>
        QuantaVerse ID is the digital identity framework for the QuantaVerse - the optimally engineered, post quantum secure web framework of the future created by Quantum One DAO. 
         We at Quantum One DAO are eliminating blockchain investment risk, archaic web2 inefficiencies of which lock $400B annually in the US Banking sector alone, and enabling 
         the creation of legal, compliant organizations, software, applications, networks, and ecosystems. Learn more in our Whitepaper which contains information directly from 
         trusted sources to save readers time verifying our claims.
        </p>
      </div>

      <div className="col-md" />

      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://etherscan.io/token/0xeaad65885fea47a3b1258935f4ce83aab06fdd3a"
          >
            <i className="fas fa-link mr-2" />
            View DA-FI token info on Etherscan 
          </a>
        </h6>
        <p>
         We're dropping 250 of our testnet ERC20 DA-FI token to the first 3500 people who verify their identity or prove a previous KYC verification through our web app. DA-FI holders must verify their identity to exchange DA-FI for our mainnet coin referred to as the 'Roton'.
        </p>
      </div>
    </div>

    <div className="row">
      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://the-blockchain-company.github.io"
          >
            <i className="fas fa-link mr-2" />
            Prototype Haskell Blockchain Node/CLI API 
          </a>
        </h6>
        <p>
         Individually engineered by our founder, the prototype derived from Cardano attests to what's possible within the web3 realm and invokes questions regarding not only Cardano but all other
          major blockchains.
        </p>
      </div>

      <div className="col-md" />

      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://soundcloud.com/user-34457466/quantumone-11-23-2022-wav?si=a55aa222af304b878825c2ee22351024&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          >
            <i className="fas fa-link mr-2" />
            FTX debacle supports Quantum One DAO thesis SoundCloud podcast. 
          </a>
        </h6>
        <p>
          Learn more about Quantum One and check out the latest update from our founder and Chief DAO Steward, Robert Mourey Jr 
        </p>
      </div>
    </div>
    <div className="row">
        <div className="col-md-5 mb-4">
          <h6 className="mb-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/quantum-one-dlt/quibitous"
            >
            <i className="fas fa-link mr-2" />
            Quibitous beta release 
            </a>
          </h6>
          <p>
          Rust based blockchain and p2p network derived from Jormungandr. 
          </p>
        </div>
      </div>
  </div>
);

export default HomeContent;
