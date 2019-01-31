import React, { Component } from 'react';
import axios from 'axios';
import Chart from 'chart.js';

const makeChart = (ctx, labels, data) => {
  const barChartData = {
    labels,
    datasets: [{
      data,
      label: 'Bitcoin',
      backgroundColor: '#4286f4',
      borderColor: '#4286f4',
      borderWidth: 1,
    }],
  };
  return new Chart(ctx, {
    type: 'bar',
    data: barChartData,
    options: {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Closing price ($)',
          },
        }],
      },
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
    const ctx = this.canvas.current;
    axios.get('/bpi')
      .then((response) => {
        const { data } = response;
        const { bpi } = data;
        const dates = Object.keys(bpi);
        const prices = Object.values(bpi);
        makeChart(ctx, dates, prices);
        this.setState({ bpi }, () => {
          makeChart(ctx, dates, prices);
        });
      });
  }

  render() {
    const { bpi } = this.state;
    return (
      <div>
        <h1>Cryptocurrency Chart Tool</h1>
        <div>{JSON.stringify(bpi)}</div>
        <canvas ref={this.canvas} id="chart" width="400" height="300" />
      </div>
    );
  }
}

export default App;
