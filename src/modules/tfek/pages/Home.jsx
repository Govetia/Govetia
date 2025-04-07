import React from 'react';
import { useEvents } from '../context/event.context';

const Home = () => {
  const { createdEvents, invitedEvents } = useEvents();

  return (
    <div>
      <h2>Événements créés</h2>
      <ul>
        {createdEvents.map(event => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>
      <h2>Événements invités</h2>
      <ul>
        {invitedEvents.map(event => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
