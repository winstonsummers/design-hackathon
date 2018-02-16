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
    console.log(this.state.location);
  }

  render(){
    return (
      <div>
        <form onSubmit={this.localSubmit} >
          <input type="text" onChange={this.localChange} />
          <input type="submit" value="look up" />
        </form>
      </div>
    );
  }
}

export default Meetup;
