import React from 'react';
import uuidv4 from 'uuid/v4';
import Event from './Event';

const EventsList = ({ events }) => {
  const eventNodes = events.map(event => <li key={uuidv4()}><Event event={event} /></li>);
  return (
    <ul>
      {eventNodes}
    </ul>
  );
};

export default EventsList;
