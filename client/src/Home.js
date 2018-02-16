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
    e.preventDefault()
    console.log(allIce, 'state', this.state.topic)
  	this.setState({iceBreaker:allIce.funny[Math.floor(Math.random() * (allIce.funny.length + 1))]})
  }

  topicSelect = (e) => {
    this.setState({topic:e.target.value})
    console.log(this.state.topic)
  }

  render(){
    const topics = Object.keys(allIce);

    const allTheTopics = topics.map(r => {
      return <option value={r}>{r}</option>
    });
    return (
      <div>
        <p>This is a home page. You probably ought to write something here</p>
        {this.state.iceBreaker}
        <form>
          <select type="text" onChange={this.topicSelect}>
            <option value="" disabled defaultValue hidden>--Choose a topic--</option>
            {allTheTopics}
          </select>
          <input type="submit" onClick={this.iceSubmit} />
        </form>
      </div>
    );
  }
}

export default Home;
