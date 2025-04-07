import React, { createContext, useContext, useState, useEffect } from 'react';
import { getEventsCreatedByUser, getEventsInvitedToUser } from '../services/event.service';
import { useUser } from './user.context';

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [createdEvents, setCreatedEvents] = useState([]);
  const [invitedEvents, setInvitedEvents] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      fetchEvents();
    }
  }, [user]);

  const fetchEvents = async () => {
    try {
      const created = await getEventsCreatedByUser(user.id);
      const invited = await getEventsInvitedToUser(user.id);
      setCreatedEvents(created);
      setInvitedEvents(invited);
    } catch (error) {
      console.error('Erreur lors de la récupération des événements:', error);
    }
  };

  return (
    <EventContext.Provider value={{ createdEvents, invitedEvents, fetchEvents }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => useContext(EventContext);
