import React from "react";
import { Route, Switch } from "react-router-dom";

import { NavBar, Footer} from "./components";
import { Home, Profile, ExternalApi, Flow, Privacy } from "./views";

import "./app.css";

const App = () => {
  return (
    <div id="app" className="d-flex flex-column h-100" style={{background: "linear-gradient(to right top, #03fff6, #00cfc8, #02dcee, #02dcee, #06c1ce, #04cede, #02dcee, #00e9ff, #00d7ff, #00c3ff, #00aeff, #0096ff)"}}>
      <NavBar />
      <div className="container flex-grow-1">
        <div className="mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/external-api" component={ExternalApi} />
            <Route path="/flow" component={Flow} />
            <Route path="/privacy" component={Privacy} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
