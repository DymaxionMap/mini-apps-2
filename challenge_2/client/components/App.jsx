import React, { Component } from 'react';
import axios from 'axios';
import Chart from 'chart.js';

const makeChart = (ctx) => {
  return new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [{
        data: [1, 2, 3, 4],
      }],
    },
  });
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bpi: {},
    };
    this.canvas = React.createRef();
  }

  componentDidMount() {
    // TODO: Pass API data to canvas
    const ctx = this.canvas.current;
    makeChart(ctx);
    axios.get('/bpi')
      .then((response) => {
        this.setState({ bpi: response.data });
      });
  }

  render() {
    const { bpi } = this.state;
    return (
      <div>
        <h1>Cryptocurrency Charter</h1>
        <div>{JSON.stringify(bpi)}</div>
        <canvas ref={this.canvas} id="chart" width="400" height="300" />
      </div>
    );
  }
}

export default App;
