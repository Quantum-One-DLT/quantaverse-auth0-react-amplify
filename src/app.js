import React from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import { ethers } from "ethers";
import Web3Provider from "./network";
import CoinSwapper from "./CoinSwapper/CoinSwapper";
import { SnackbarProvider } from "notistack";
import Liquidity from "./Liquidity/Liquidity";
import { NavBar, Footer} from "./components";
import { Home, Profile, ExternalApi, Flow, Privacy } from "./views";

import "./app.css";

const App = () => {
  return (
    <div id="app" className="d-flex flex-column h-100" style={{background: "linear-gradient(to right top, #03fff6, #00cfc8, #02dcee, #02dcee, #06c1ce, #04cede, #02dcee, #00e9ff, #00d7ff, #00c3ff, #00aeff, #0096ff)"}}>
      <SnackbarProvider maxSnack={3}>
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
            <Route exact path="/quantaverse-auth0-react-amplify/">
                  <CoinSwapper network={network} />
                </Route>
            <Route exact path="/quantaverse-auth0-react-amplify/liquidity">
                  <Liquidity network={network} />
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
      </SnackbarProvider>
    </div>
    );
};

export default App;
