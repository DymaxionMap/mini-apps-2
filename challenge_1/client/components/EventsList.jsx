import React from 'react';
import uuidv4 from 'uuid/v4';

const EventsList = ({ events }) => {
  const eventNodes = events.map(event => <li key={uuidv4()}>{event.description}</li>);
  return (
    <ul>
      {eventNodes}
    </ul>
  );
};

export default EventsList;
