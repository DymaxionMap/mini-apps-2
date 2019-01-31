import React, { Component } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import EventsList from './EventsList';
import Search from './Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.LIMIT_PER_PAGE = 10;
    this.state = {
      events: [],
      eventsPageCount: 0,
      query: '',
    };
    this.getEvents = this.getEvents.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.setQuery = this.setQuery.bind(this);
  }

  getEvents(query, selected) {
    axios.get(`/events?q=${query}&_page=${selected}`)
      .then((res) => {
        const totalEventsCount = Number(res.headers['x-total-count']);
        const events = res.data;
        this.setState({
          events,
          eventsPageCount: Math.ceil(totalEventsCount / this.LIMIT_PER_PAGE),
        });
      });
  }

  setQuery(query) {
    this.setState({ query });
  }

  handlePageChange(data) {
    const { query } = this.state;
    const pageNum = data.selected + 1;
    this.getEvents(query, pageNum);
  }

  render() {
    const { events, eventsPageCount } = this.state;
    return (
      <div>
        <h1>Historical Events Finder</h1>
        <Search getEvents={this.getEvents} setQuery={this.setQuery} />
        <EventsList events={events} />
        <ReactPaginate
          pageCount={eventsPageCount}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default App;
