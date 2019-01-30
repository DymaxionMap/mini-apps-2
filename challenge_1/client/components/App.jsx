import React, { Component } from 'react';
import EventsList from './EventsList';
import Search from './Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    }
    this.handleChange = this.handleChange.bind(this);
    this.getEvents = this.getEvents.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  getEvents(query) {
    fetch(`/events?q=${query}`)
      .then(request => request.json())
      .then(events => this.setState({ events }));
  }

  render() {
    return (
      <div>
        <h1>Historical Events Finder</h1>
        <Search getEvents={this.getEvents}/>
        <EventsList events={this.state.events} />
      </div>
    );
  }
}

export default App;

