import React from 'react';

const Event = ({ event }) => {
  const { date, description } = event;
  return (
    <div>
      <div>
        Date:
        {date}
      </div>
      <div>
        {description}
      </div>
    </div>
  );
};

export default Event;