import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  handleClick() {
    const { query } = this.state;
    const { getEvents } = this.props;
    getEvents(query, 1);
  }

  render() {
    return (
      <div>
        <label htmlFor="search">
          Search
          <input id="search" type="text" onChange={this.handleChange} />
        </label>
        <button type="button" onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default Search;
