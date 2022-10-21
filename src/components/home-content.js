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
         QuantaVerse and QuantaVerse ID was created by Quantum One DAO. We are eliminating blockchain investment risk, archaic web2 inefficiencies of which lock $400B annually in the US Banking sector alone, and enabling the creation of legal, compliant organizations, software, applications, networks, and ecosystems. Learn more in our Whitepaper which contains information directly from trusted sources to save readers time verifying our claims.
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
         We're dropping 100 of our testnet ERC20 DA-FI token to the first 3500 people who verify their identity or prove a previous KYC verification through our web app. DA-FI holders must verify their identity to exchange DA-FI for our mainnet coin referred to as the 'Roton'.
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
            Prototype API 
          </a>
        </h6>
        <p>
         Contribute to development or simply test the prototype Node and CLI 
        </p>
      </div>

      <div className="col-md" />

      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.crunchbase.com/organization/quantum-one-dao"
          >
            <i className="fas fa-link mr-2" />
            Quantum One's Crunchbase profile
          </a>
        </h6>
        <p>
          Quantaverse ID is humanity's optimal digital trust paradigm. We're contributors to the Decentralized Identity Foundation, a member Dun and Bradstreet as well as Pledge 1%. 
        </p>
      </div>
    </div>
  </div>
);

export default HomeContent;
