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
      selectedPage: 1,
    };
    this.getEvents = this.getEvents.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.setQuery = this.setQuery.bind(this);
  }

  getEvents() {
    const { query, selectedPage } = this.state;
    axios.get(`/events?q=${query}&_page=${selectedPage}`)
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
    this.setState({ query }, () => this.getEvents());
  }

  handlePageChange(data) {
    const selectedPage = data.selected + 1;
    this.setState({ selectedPage }, () => this.getEvents());
  }

  render() {
    const { events, eventsPageCount } = this.state;
    return (
      <div>
        <h1>Historical Events Finder</h1>
        <Search setQuery={this.setQuery} />
        <EventsList events={events} getEvents={this.getEvents} />
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
