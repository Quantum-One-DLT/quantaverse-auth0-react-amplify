import React from "react";

const Logo = require("../assets/cwlogpre.jpg");

const Hero = () => (

  <div className="d-flex-column justify-content-center cyberhero">
    <h2 className="mb-4">Cyber Wyoming Login Demo</h2>
    <h5 className="lead">
       This is a demo React based login app. We can integrate the login process with any website, web-app, native app and most language frameworks. Each can be configured to call additional API's from the client-side and or server-side. The login page itself can be customized as shown in the screen-shot below. To sign up and or login, click the login button within the hamburger menu on the top right side of the page. For ID/KYC verification {" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://app.fractal.id/authorize?client_id=QHAVw9SmY3f0dkaNB8GLnL8SWlRf_Qk8708qAKHJgkA&redirect_uri=https%3A%2F%2Fapp.quantumone.network%2Fcallback&response_type=code&scope=contact%3Aread%20verification.basic%3Aread%20verification.basic.details%3Aread%20verification.liveness%3Aread%20verification.liveness.details%3Aread"
      > Start Here
     </a> 
    </h5>
    <figure className='figure'>
      <img width="100%"
        src={Logo}
        className="figure-img img-fluid rounded shadow-3 mb-3"
        alt="cyber-wyoming-custom-login"
      />
      <figcaption className="figure-caption"> Screen-shot of customized login and domain name .</figcaption>
    </figure>
  </div>
);

export default Hero;
