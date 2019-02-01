import React, { Component } from 'react';
import axios from 'axios';
import Chart from './Chart';
import Search from './Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      currencies: [],
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData(symbol = 'BTC', startDate = '2018-12-01', endDate = '2019-01-30') {
    axios({
      method: 'GET',
      url: '/prices',
      params: {
        symbol,
        startDate,
        endDate,
      },
    })
      .then((response) => {
        const { data } = response;
        const { dates, openPrices, closePrices, highPrices, lowPrices } = data;
        const currencies = [{
          openPrices,
          closePrices,
          highPrices,
          lowPrices,
          name: symbol,
        }];
        this.setState({ dates, currencies });
      });
  }

  render() {
    const { dates, currencies } = this.state;
    return (
      <div>
        <h1>Cryptocurrency Chart Tool</h1>
        <Search getData={this.getData} />
        <Chart dates={dates} currencies={currencies} />
      </div>
    );
  }
}

export default App;
