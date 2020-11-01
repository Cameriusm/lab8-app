import React, {Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import About from "./Components/About";
const App = () => {
  return  (
  <Fragment>
  <Router>
  <NavBar />
  <section className="wrapper">
  <Switch>
  <Route exact path="/" component={Main} />
  <Route exact path="/about" component={About} />
    </Switch>
    </section>
    </Router>
  </Fragment>)
}

export default App;