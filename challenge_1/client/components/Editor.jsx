import React, { Component } from 'react';

class Editor extends Component {
  constructor(props) {
    super(props);
    const { description } = this.props;
    this.state = {
      description,
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
  }

  handleChange(event) {
    this.setState({ description: event.target.value });
  }

  updateDescription() {
    const { description } = this.state;
    // TODO: Replace with API call to server
    console.log('"Updated" description:', description);
  }

  render() {
    const { description } = this.state;
    return (
      <form>
        <textarea onChange={this.handleChange} defaultValue={description} />
        <button type="button">Cancel</button>
        <button type="button" onClick={this.updateDescription}>Save</button>
      </form>
    );
  }
}

export default Editor;
