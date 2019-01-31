import React from 'react';
import Event from './Event';

const EventsList = ({ events }) => {
  const eventNodes = events.map(event => <li key={event.id}><Event event={event} /></li>);
  return (
    <ul>
      {eventNodes}
    </ul>
  );
};

export default EventsList;
