import React, { Component } from 'react';
import Editor from './Editor';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
    this.toggleEditing = this.toggleEditing.bind(this);
  }

  toggleEditing() {
    const { editing } = this.state;
    this.setState({ editing: !editing });
  }

  render() {
    const { event } = this.props;
    const { date, description } = event;
    const { editing } = this.state;
    return (
      <div>
        <div>
          Date:
          {date}
        </div>
        <div>
          {editing ? <Editor description={description} /> : description}
        </div>
        <button type="button" onClick={this.toggleEditing}>Edit</button>
      </div>
    );
  }
}

export default Event;
