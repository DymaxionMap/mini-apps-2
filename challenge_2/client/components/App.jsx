import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bpi: {},
    };
  }

  componentDidMount() {
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
      </div>
    );
  }
}

export default App;
