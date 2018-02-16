import React, { Component } from 'react';
import axios from 'axios';

class Meetup extends Component {
  constructor(props){
  	super(props)
  	this.state = {
  		location: '',
  		results: [],
      	meets: []
  	}
  }

  localSubmit = (e) => {
    e.preventDefault();
    let local = this.state.location;
    axios.post('/meetup/meets', {
      location: local
    }).then(res => {
      console.log('made it back');
      console.log(res);
      this.setState({meets: res.data.results})
    }).catch(err => {
      console.log('err', err);
    })
  }


localChange = (e) => {
    this.setState({location:e.target.value});
    console.log(this.state);
  }

  render(){
    const Results = this.state.meets.map(m => {
      return <li><a href={m.event_url} target="blank"><h4>{m.name}</h4></a></li>
    })
    
    return (
      <div className="polar-background2">
        <div className="instructions"><p>Search meetups by zip code!</p></div>
        <div className="button-div">
	        <form onSubmit={this.localSubmit} >
	          <input className="input-field" type="text" onChange={this.localChange} />
	          <input className="input-button" type="submit" value="look up" />
	        </form>
        </div>
        <div className="results">
	        <ul>
	          {Results}
	        </ul>
        </div>
      </div>
    );
  }
}


export default Meetup
