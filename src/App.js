import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import SCIM from "./pages/posts/Scim";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content-wrapper">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog/ai-agents-supply-chain" component={SCIM} />
            {/* Add more routes as needed */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
