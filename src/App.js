import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from "./pages/Home";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";


import './App.css';

function App() {
  return (
    <Router >

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NoMatch} />

      </Switch>

    </Router>
  );
}

export default App;
