import React from "react";
import { Route, Switch } from "react-router-dom";

import { NavBar, Footer} from "./components";
import { Home, Profile, ExternalApi } from "./views";

import "./app.css";

const styles={  
  backgroundImage: 'url(" + "https://quantumone.b-cdn.net/Untitled%20Design_2-6.jpg" + ")',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};

const App = () => {
  return (
    <div id="app" className="d-flex flex-column h-100" style={styles}>
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
