import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import CreateModal from './CreateModal';
import { useState } from 'react';
import listPlugin from '@fullcalendar/list';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';


const EventCalendar = ({ createdEvents, invitedEvents, onEventClick }) => {
  const events = [...createdEvents, ...invitedEvents].map(event => ({
    id: event.id,
    title: event.title,
    start: event.startDate.split('T')[0],
    end: event.endDate?.split('T')[0],
    description: event.description,
    location: event.location,
    responses: event.responses,
    user: event.user,
  }));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const handleEventClick = (info) => {
    onEventClick(info.event);
  };
  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    setIsModalOpen(true);
  };
  
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin, bootstrap5Plugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleEventClick}
        dateClick={handleDateClick}
        height="auto"
        locale={'fr'}
        buttonText={{
          today: 'Aujourd\'hui',
          month: 'Mois',
          week: 'Semaine',
          day: 'Jour',
          list: 'Liste',
        }}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
        }}
      />
      {isModalOpen && (
        <CreateModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          defaultStartDate={selectedDate}
        />
      )}
    </>
  );
};

export default EventCalendar;
