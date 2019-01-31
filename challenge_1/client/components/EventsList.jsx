import React from 'react';
import Event from './Event';

const EventsList = ({ events, getEvents }) => {
  const eventNodes = events.map(event => (
    <li key={event.id}>
      <Event event={event} getEvents={getEvents} />
    </li>
  ));
  return (
    <ul>
      {eventNodes}
    </ul>
  );
};

export default EventsList;
