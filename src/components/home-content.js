import React from "react";

const HomeContent = () => (
  <div className="next-steps">
    <h2 className="my-5 text-center">Considerations</h2>

    <div className="row">
      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://quantumone.network"
           > What is Quantum One DAO? 
            <i className="fas fa-link mr-2" />
            
          </a>
        </h6>
        <p>
        Quantum One DAO is engineering an omni-compliant, digital identity driven, post quantum secure web of the future enabling optimal usability trusted by users and regulators alike. 
        </p>
      </div>
    <div className="row">
      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://brocoders.com/blog/auth0-vs-cognito/"
          > Auth0 vs. AWS Cognito 
            <i className="fas fa-link mr-2" />
            
        </h6>
        <p>
         Detailed comparison of Auth0 and AWS Cognito. We mesh the two of these together for web2 and are developing a post quantum secure product of our own.
          </a>
        </p>
      </div>

      <div className="col-md" />

      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            "https://www.coinfirm.com/blockchain-analytics/"
          >
            <i className="fas fa-link mr-2" />
            Coinfirm Web3 Enabled AML Analytics 
          </a>
        </h6>
        <p>
        Optional top tier web3 AML analytics
        </p>
      </div>
    </div>
);

export default HomeContent;
