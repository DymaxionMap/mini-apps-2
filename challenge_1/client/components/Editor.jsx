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
    const { toggleEditing } = this.props;
    // TODO: Replace with API call to server
    console.log('"Updated" description:', description);
    toggleEditing();
  }

  render() {
    const { description } = this.state;
    const { toggleEditing } = this.props;
    return (
      <form>
        <textarea onChange={this.handleChange} defaultValue={description} />
        <button type="button" onClick={toggleEditing}>Cancel</button>
        <button type="button" onClick={this.updateDescription}>Save</button>
      </form>
    );
  }
}

export default Editor;
