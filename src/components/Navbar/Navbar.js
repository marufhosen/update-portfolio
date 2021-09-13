import React from "react";
import logo from "../../img/logo.PNG";
import "./Navbar.css";
import Banner from "../Banner/Banner";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../About/About";
import Skill from "../Skill/Skill";

const Navbar = () => {
  return (
    <div className="container">
      <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <div class="nav-title">
            <img src={logo} />
          </div>
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <a href="/home">home</a>
          <a href="/about">About</a>
          <a href="/skill">Skill</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>
          <a href="/blog">Blog</a>
        </div>
      </div>
      <Router>
        <Switch>
          <Route path="/home">
            <Banner></Banner>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/skill">
            <Skill></Skill>
          </Route>
          <Route exact path="/">
            <Banner></Banner>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Navbar;
