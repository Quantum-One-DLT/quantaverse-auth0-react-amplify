import React from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import { ethers } from "ethers";
import Web3Provider from "./network";
import CoinSwapper from "./CoinSwapper/CoinSwapper";
import { SnackbarProvider } from "notistack";
import Liquidity from "./liquidity/Liquidity";
import { NavBar, Footer} from "./components";
import { Home, Profile, ExternalApi, Flow, Privacy, ConnectWallet, ConnectWalletPage, AetnaRates } from "./views";
import { createTheme, ThemeProvider } from "@material-ui/core";
import "./app.css";
import injectedModule from '@web3-onboard/injected-wallets'

//#TODO ADD BACK WEB3 TO VPN at subdomain (must add) app.quantaverseid.io

const dappID = "7813493a-da4d-4d5a-9a8e-fcc7f6b499ea";
const INFURA_KEY = "4661d68cbd394dd88899475febf677e9";
const injected = injectedModule();
const rpcAPIKey = "<INFURA_KEY>" || "<ALCHEMY_KEY>";
const rpcUrl = `https://eth-mainnet.g.alchemy.com/v2/${rpcAPIKey}` || `https://mainnet.infura.io/v3/${rpcAPIKey}`

const theme = createTheme({
  palette: {
    primary: {
      main: "#03fff6",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#1e2022",
      contrastText: "#ffffff",
    }, 
  
  },

});

const App = () => {

  return (
    <div id="app" className="d-flex flex-column lgrad h-100">
      <SnackbarProvider maxSnack={3}>
      <ThemeProvider theme={theme}>
      <Web3Provider
            render={(network) => (
              <div>
      <NavBar />
      <div className="container flex-grow-1">
        <div className="mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/external-api" component={ExternalApi} />
            <Route path="/flow" component={Flow} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/aetnarates" component={AetnaRates} />
            <Route path="/connectWalletPage" component={ConnectWalletPage} />
            <Route exact path="/DA-FI-swap">
                  <CoinSwapper  network={network}/>
                </Route>
            <Route exact path="/DA-FI-swap/liquidity">
                  <Liquidity  network={network}/>
                </Route>
                <Route>
               </Route>
          </Switch>
        </div>
      </div>
      <Footer />
      </div>
      )}
      ></Web3Provider>
      </ThemeProvider>
      </SnackbarProvider>
    </div>
    );
};

export default App;
