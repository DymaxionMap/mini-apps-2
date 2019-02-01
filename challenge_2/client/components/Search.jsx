import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: '',
      startDate: '',
      endDate: '',
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event, field) {
    this.setState({ [field]: event.target.value });
  }

  render() {
    const { getData } = this.props;
    const { symbol, startDate, endDate } = this.state;
    return (
      <form>
        <label htmlFor="symbol">
          Choose a symbol:
          <select
            id="symbol"
            value={symbol}
            onChange={event => this.changeHandler(event, 'symbol')}
          >
            <option value="BTC">Bitcoin (BTC)</option>
            <option value="ETH">Ethereum (ETH)</option>
            <option value="BTC">XRP (XRP)</option>
            <option value="BTC">EOS (EOS)</option>
            <option value="BTC">Litecoin (LTC)</option>
          </select>
        </label>
        <label htmlFor="startDate">
          Start date:
          <input
            id="startDate"
            type="text"
            value={startDate}
            onChange={event => this.changeHandler(event, 'startDate')}
          />
        </label>
        <label htmlFor="endDate">
          End date:
          <input
            id="endDate"
            type="text"
            value={endDate}
            onChange={event => this.changeHandler(event, 'endDate')}
          />
        </label>
        <button type="button" onClick={() => getData(symbol, startDate, endDate)}>Submit</button>
      </form>
    );
  }
}

export default Search;
