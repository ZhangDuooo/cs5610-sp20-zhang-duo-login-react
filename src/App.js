import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "../src/component/home"
import Register from "./component/Register";
import Profile from "./component/Profile";
import Login from "./component/Login";

function App() {
  return (
      <Router>
        <div className="App">
          <Route path = "/" exact = {true} component={Home}/>
          <Route path = "/register" exact = {true} component={Register}/>
          <Route path = "/profile" exact = {true} component={Profile}/>
          <Route path = "/login" exact = {true} component={Login}/>


        </div>
      </Router>
  );
}

export default App;
