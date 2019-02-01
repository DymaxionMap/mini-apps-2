import React, { Component } from 'react';
import makeChart from '../helpers/makeChart';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.chart = null;
  }

  componentDidMount() {
    const ctx = this.canvas.current;
    const { dates, currencies } = this.props;
    this.chart = makeChart(ctx, dates, currencies);
  }

  componentDidUpdate() {
    const ctx = this.canvas.current;
    const { dates, currencies } = this.props;
    this.chart.destroy();
    this.chart = makeChart(ctx, dates, currencies);
  }

  render() {
    return (
      <canvas ref={this.canvas} id="chart" width="400" height="300" />
    );
  }
}

export default Chart;
