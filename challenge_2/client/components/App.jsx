import React, { Component } from 'react';
import axios from 'axios';
import Chart from './Chart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates: [],
      currencies: [],
    };
    this.canvas = React.createRef();
  }

  componentDidMount() {
    axios.get('/bpi')
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
        <Chart dates={dates} currencies={currencies} />
      </div>
    );
  }
}

export default App;
