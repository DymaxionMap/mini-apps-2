import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      events: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  handleClick() {
    fetch(`/events?q=${this.state.query}`)
      .then(request => request.json())
      .then(events => this.setState({ events }));
  }

  render() {
    return (
      <div>
        <h1>Historical Events Finder</h1>
        <label htmlFor="search">
          Search
          <input id="search" type="text" onChange={this.handleChange}/>
        </label>
        <button type="button" onClick={this.handleClick}>Submit</button>
        <ul>
          {this.state.events.map(event => <li key={event.id}>{event.description}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;

