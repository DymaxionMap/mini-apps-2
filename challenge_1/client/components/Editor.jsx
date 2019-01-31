import React, { Component } from 'react';
import axios from 'axios';

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
    const { toggleEditing, eventId, getEvents } = this.props;
    axios.patch(`/events/${eventId}`, { description })
      .then(() => {
        toggleEditing();
        getEvents();
      });
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
