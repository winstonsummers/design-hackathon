import React, { Component } from 'react';
import allIce from './iceBreakers.js';

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

  iceSubmit = (e) => {
    console.log(allIce)
  	this.setState({iceBreaker:allIce.funny[Math.floor(Math.random() * (allIce.funny.length + 1))]})
  }

  render(){
    return (
      <div>
        <p>This is a home page. You probably ought to write something here</p>
        {this.state.iceBreaker}
        <input type="submit" onClick={this.iceSubmit} />
      </div>
    );
  }
}

export default Home;
