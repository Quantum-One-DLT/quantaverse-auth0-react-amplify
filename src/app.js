import React from "react";
import { Route, Switch } from "react-router-dom";

import { NavBar, Footer} from "./components";
import { Home, Profile, ExternalApi } from "./views";

import "./app.css";

const App = () => {
  return (
    <div id="app" className="d-flex flex-column h-100" style={{background-image: "linear-gradient(to right top, #03fff6, #00d0d9, #1fa2b5, #2f778b, #2f4f5e, #2e4c5a, #2c4856, #2b4552, #2a6576, #1e8797, #00aab2, #00cfc8)"}};>
      <NavBar />
      <div className="container flex-grow-1">
        <div className="mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/external-api" component={ExternalApi} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
