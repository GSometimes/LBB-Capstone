import React from "react";
import "./styles.css";
import Circles from "./components/circles";
import { Switch, Route, Link } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <Circles {...routerProps} />}
        />
        <Route
          path="/entries"
          render={(routerProps) => <Circles {...routerProps} />}
        />
        <Route
          path="/about"
          render={(routerProps) => <Circles {...routerProps} />}
        />
        <Route
          path="/contact"
          render={(routerProps) => <Circles {...routerProps} />}
        />
        <Route
          path="/projects"
          render={(routerProps) => <Circles {...routerProps} />}
        />
      </Switch>
    </div>
  );
}
