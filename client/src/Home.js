import React, { Component } from 'react';
import './App.css';

import allIce from './iceBreakers.js';
import { Link } from 'react-router-dom';


class Home extends Component {

  render(){
    return (
        <div className="polar-background">
          <div className="button-div">
            <div className="meetup-button"><Link className="meetup-link" to="/meetup">&nbsp;</Link></div>
            <div className="ice-button"><Link className="ice-link" to="/icebreakerform">Icebreakers</Link></div>
          </div>
        </div>
    );
  }
}

export default Home;
