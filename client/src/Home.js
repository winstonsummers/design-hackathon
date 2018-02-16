import React, { Component } from 'react';
import {funny, smart, rich, partAnimal, marriageMaterial, professional, outdoorsy} from './iceBreakers.js';

class Home extends Component {
  constructor(props){
  	super(props)
  	this.state = {
  		location: '',
  		results: [],
  		iceBreaker: '',
  		topic: ''
  	}
  }

  // iceSubmit = (e) => {
  // 	let 
  // 	Math.floor(Math.random(0, funny.length))
  // }

  render(){
    return (
        <p>This is a home page. You probably ought to write something here {funny[1]}</p>
      );
  }
}

export default Home;
