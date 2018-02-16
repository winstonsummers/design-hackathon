import React, { Component } from 'react';
import allIce from '../iceBreakers.js';
import axios from 'axios';

class Icebreaker extends Component {
  constructor(props){
  	super(props)
  	this.state = {
  		iceBreaker: '',
  		topic: '',
  	}
  }

  iceSubmit = (e) => {
    e.preventDefault()
    console.log(allIce, 'state', this.state.topic)
    let topic = this.state.topic;
    if(topic === 'funny'){
  	 this.setState({iceBreaker:allIce.funny[Math.floor(Math.random() * (allIce.funny.length + 1))]})
    }else if(topic === 'smart'){
      this.setState({iceBreaker:allIce.smart[Math.floor(Math.random() * (allIce.smart.length + 1))]})
    }else if(topic === 'rich'){
      this.setState({iceBreaker:allIce.rich[Math.floor(Math.random() * (allIce.rich.length + 1))]})
    }else if(topic === 'partyAnimal'){
      this.setState({iceBreaker:allIce.partyAnimal[Math.floor(Math.random() * (allIce.partyAnimal.length + 1))]})
    }else if(topic === 'marriageMaterial'){
      this.setState({iceBreaker:allIce.marriageMaterial[Math.floor(Math.random() * (allIce.marriageMaterial.length + 1))]})
    }else if(topic === 'professional'){
      this.setState({iceBreaker:allIce.professional[Math.floor(Math.random() * (allIce.professional.length + 1))]})
    }else if(topic === 'outdoorsy'){
      this.setState({iceBreaker:allIce.outdoorsy[Math.floor(Math.random() * (allIce.outdoorsy.length + 1))]})
    }
  }

  topicSelect = (e) => {
    this.setState({topic:e.target.value})
    console.log(this.state)
  }

  render(){
    const topics = Object.keys(allIce);
    const allTheTopics = topics.map(r => {
      return <option value={r}>{r}</option>
    });
    return (
      <div className="polar-background2">
        <div className="instructions"><p>Choose a topic to break the ice!</p></div>
        <div className="button-div">
        <form>
          <select className="input-field" type="text" onChange={this.topicSelect}>
            <option value="" disabled defaultValue hidden>--Choose a topic--</option>
            {allTheTopics}
          </select>
          <input className="input-button" type="submit" onClick={this.iceSubmit} />
        </form>
         <div className="results-ice">{this.state.iceBreaker}</div>
        </div>
      </div>
    );
  }
}


export default Icebreaker