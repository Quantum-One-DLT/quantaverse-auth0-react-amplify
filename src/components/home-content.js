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
           >  
            <i className="fas fa-link mr-2" />
            What is Quantum One DAO?
          </a>
        </h6>
        <p>
        Quantum One DAO is engineering an omni-compliant, digital identity driven, post quantum secure web of the future enabling optimal usability trusted by users and regulators alike. 
        </p>
      </div>
      </div>
    <div className="row">
      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://brocoders.com/blog/auth0-vs-cognito/"
          >  
            <i className="fas fa-link mr-2" />
            Auth0 vs. AWS Cognito
         </a>   
        </h6>
        <p>
         Detailed comparison of Auth0 and AWS Cognito. We mesh the two of these together for web2 and are developing a post quantum secure product of our own.
        </p>
      </div>
      </div>
      <div className="col-md">

      <div className="col-md-5 mb-4">
        <h6 className="mb-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.prove.com/blog/buyers-guide-how-to-find-the-right-kyc-solution-for-your-company"
          >
            <i className="fas fa-link mr-2" />
            KYC Buyers Guide 
          </a>
        </h6>
        <p>
        This is a well rounded guide from a third-party source. 
        </p>
      </div>
    </div>
    </div>
);

export default HomeContent;
