import React, { Component } from 'react';
import axios from 'axios';
import EventsList from './EventsList';
import Search from './Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.LIMIT_PER_PAGE = 10;
    this.state = {
      events: [],
      eventsPageCount: 0,
    }
    this.getEvents = this.getEvents.bind(this);
  }

  getEvents(query, selected) {
    axios.get(`/events?q=${query}&_page=${selected}`)
      .then(res => {
        const totalEventsCount =  res.headers['x-total-count'];
        const events = res.data;
        this.setState({
          events,
          eventsPageCount: Math.ceil(totalEventsCount / this.LIMIT_PER_PAGE),
        })
      });
  }

  render() {
    const { events } = this.state;
    return (
      <div>
        <h1>Historical Events Finder</h1>
        <Search getEvents={this.getEvents} handleChange={this.handleChange}/>
        <EventsList events={events} />
      </div>
    );
  }
}

export default App;

