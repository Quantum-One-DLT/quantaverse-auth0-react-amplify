import React from "react";
import { useWeb3Onboard } from "@web3-onboard/react/dist/context";

const LogoutButton = () => {
  const { logout } = useWeb3Onboard();
  return (
    <button
      className="btn btn-danger btn-sm"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
