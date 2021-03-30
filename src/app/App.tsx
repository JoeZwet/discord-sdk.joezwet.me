import React from "react";
import {BaseStyles, ThemeProvider} from "@primer/components";
import {HashRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./pages/Home";
import Versions from "./pages/Versions";
import Packages from "./pages/Packages";

function App() {
  return (
    <>
      <ThemeProvider>
        <BaseStyles>
          <Router basename={"/"}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/versions" component={Versions} />
              <Route exact path="/packages" component={Packages} />
            </Switch>
          </Router>
        </BaseStyles>
      </ThemeProvider>
    </>
  );
}

export default App;
