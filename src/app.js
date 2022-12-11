import React from "react";
import { Route, Switch } from "react-router-dom";

import { NavBar, Footer, EntropyXGrid, AetnaXGrid, S3Json, FSXGrid } from "./components";
import { Home, Profile, ExternalApi, Flow, Privacy } from "./views";

import "./app.css";

const App = () => {
  return (
    <div id="app" className="d-flex flex-column h-100 SpaceBackground">
      <NavBar />
      <div className="container flex-grow-1">
        <div className="mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/external-api" component={ExternalApi} />
            <Route path="/flow" component={Flow} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/entropy" component={EntropyXGrid} />
            <Route path="/aetna-rates" component={AetnaXGrid} />
            <Route path="/aetna-sample" component={FSXGrid} />
            <Route path="/s3json" component={S3Json} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
