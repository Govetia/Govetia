import React from 'react';
import { VStack, Box, Text, Heading } from "@chakra-ui/react";

const EventList = ({ events, onEventClick }) => {
  return (
    <VStack align="stretch" spacing={4}>
      {events.map((event) => (
        <Box
          key={event.id}
          p={4}
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          bg={event.host ? "green.100" : "red.100"}
          cursor="pointer"
          onClick={() => onEventClick(event)}
        >
          <Heading size="md">{event.title}</Heading>
          <Text>Date: {event.date}</Text>
          <Text>Participants: {event.participants}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default EventList;
