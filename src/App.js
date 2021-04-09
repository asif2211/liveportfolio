import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Homepage/Home";
import {Switch, Route} from 'react-router-dom'
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contacts/Contact";
function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route exact path="/">
            <Home />
            </Route>
            <Route exact path="/about">
            <About />
            </Route>
            <Route exact path="/portfolio">
            <Portfolio />
            </Route>
            <Route path="/resume">
            <Resume />
            </Route>
            <Route path="/contact">
            <Contact />
            </Route>
          </Switch>
          
        </div>
      </div>
      {/* <Router>
        <Switch>
          <Route path="/" exact component={Profile} />
          <Route path="/About" component={About} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Contacts" component={Contacts} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/Resume" component={Resume} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
