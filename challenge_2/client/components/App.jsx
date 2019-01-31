import React, { Component } from 'react';
import axios from 'axios';
import Chart from './Chart';
import DateSelector from './DateSelector';

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

  getData(startDate = '2018-12-01', endDate = '2019-01-30') {
    axios({
      method: 'GET',
      url: '/prices',
      params: {
        startDate,
        endDate,
      },
    })
      .then((response) => {
        const { data } = response;
        const { bpi } = data;
        const dates = Object.keys(bpi);
        const prices = Object.values(bpi);
        const currencies = [{
          prices,
          name: 'Bitcoin',
        }];
        this.setState({ dates, currencies });
      });
  }

  render() {
    const { dates, currencies } = this.state;
    return (
      <div>
        <h1>Cryptocurrency Chart Tool</h1>
        <DateSelector getData={this.getData} />
        <Chart dates={dates} currencies={currencies} />
      </div>
    );
  }
}

export default App;
