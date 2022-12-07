import React from "react";
import { useWeb3Onboard } from "@web3-onboard/react/dist/context";

  
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-secondary btn-sm"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;
