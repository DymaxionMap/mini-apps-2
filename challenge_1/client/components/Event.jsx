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
    const descriptionArea = (editing)
      ? <Editor description={description} toggleEditing={this.toggleEditing} />
      : description;
    return (
      <div>
        <div>
          Date:
          {date}
        </div>
        <div>
          {descriptionArea}
        </div>
        <button type="button" onClick={this.toggleEditing}>Edit</button>
      </div>
    );
  }
}

export default Event;
