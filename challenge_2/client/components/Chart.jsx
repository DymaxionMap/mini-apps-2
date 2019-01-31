import React, { Component } from 'react';
import makeChart from '../helpers/makeChart';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.ctx = null;
  }

  componentDidMount() {
    this.ctx = this.canvas.current;
  }

  render() {
    const { dates, currencies } = this.props;
    if (this.ctx) {
      makeChart(this.ctx, dates, currencies);
    }
    return (
      <canvas ref={this.canvas} id="chart" width="400" height="300" />
    );
  }
}

export default Chart;
