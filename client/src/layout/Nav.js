import React, { Component } from 'react';
import logo from '../logo.svg';
import Logout from '../auth/Logout.js';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render(){
  
    return(
        <div>
          <nav className="nav">
            <a href="/">Home</a>

           </nav>
          <header className="App-header">
            <h1 className="App-title">Polr Bear</h1>
          </header>
        </div>
      );
  }
}

export default Nav;
