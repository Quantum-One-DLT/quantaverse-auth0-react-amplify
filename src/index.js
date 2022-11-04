import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";
import { getConfig } from "./config";
import history from "./utils/history";
import web3Onboard from './web3-onboard'
import { Web3OnboardProvider } from '@web3-onboard/react'
import { init } from '@web3-onboard/react';
import injectedModule from '@web3-onboard/injected-wallets'

const INFURA_KEY = "4661d68cbd394dd88899475febf677e9"

const ethereumRopsten = {
  id: '0x3',
  token: 'rETH',
  label: 'Ethereum Ropsten',
  rpcUrl: `https://ropsten.infura.io/v3/${INFURA_KEY}`
}

const polygonMainnet = {
  id: '0x89',
  token: 'MATIC',
  label: 'Polygon',
  rpcUrl: 'https://matic-mainnet.chainstacklabs.com'
}

const chains = [ethereumRopsten, polygonMainnet]

const wallets = [injectedModule()]

const appMetadata = {
  name: 'QuantaVerse ID',
  icon: '"%PUBLIC_URL%/share.png"',
  description: 'QuantaVerse ID Blocknative Connect',
  recommendedInjectedWallets: [
    { name: 'MetaMask', url: 'https://metamask.io' },
    { name: 'Coinbase', url: 'https://wallet.coinbase.com/' }
  ]
}

const web3Onboard = init({
  wallets,
  chains,
  appMetadata
});

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  redirectUri: window.location.origin,
  onRedirectCallback,
};

ReactDOM.render(
  <Auth0Provider {...providerConfig}>
    <Web3OnboardProvider web3Onboard={web3Onboard}>
    <Router>
      <App />
    </Router>
    </Web3OnboardProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
