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
        <Route path="/" component={Home} />
        <Route path="/project" component={Project} />
        <Route path="/contact" component={Contact} />
        <Route component={NoMatch} />

      </Switch>

    </Router>
  );
}

export default App;
