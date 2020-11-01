import React, {Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import About from "./Components/About";
import Price from "./Components/Price"
import Features from "./Components/Features"
import Form from "./Components/Form"
import Edit from "./Components/Edit"
import Footer from './Components/Footer';

const App = () => {
  return  (
  <Fragment>
  <Router>
  <NavBar />
  <section className="wrapper">
  <Switch>
  <Route exact path="/" component={Main} />
  <Route exact path="/about" component={About} />
  <Route exact path="/price" component={Price} />
  <Route exact path="/features" component={Features} />
  <Route exact path="/create" component={Form} />
  <Route exact path="/edit/:id" component={Edit} />
    </Switch>
    </section>
    <Footer />
   
    </Router>
  </Fragment>)
}

export default App;