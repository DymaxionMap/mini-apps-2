import React from 'react';

const EventsList = ({ events }) => {
  const eventNodes = events.map(event => <li key={event.id}>{event.description}</li>);
  return (
    <ul>
      {eventNodes}
    </ul>
  );
};

export default EventsList;
