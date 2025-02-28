import React from 'react';
import { VStack, Box, Text, Heading, Flex } from "@chakra-ui/react";
import { useUser } from '../context/user.context';


const EventList = ({ events, onEventClick }) => {
  const { user } = useUser();

  console.log(events);
  console.log(user);

  function formatDate(date) {
    return new Date(date).toLocaleDateString();
  }
  return (
    <VStack align="stretch" spacing={4}>
      <Flex justify={'space-around'}>
        {events.map((event) => (
          <Box
            key={event.id}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            boxShadow="md"
            cursor="pointer"
            onClick={() => onEventClick(event)}
          >
            <Heading size="md">{event.title}</Heading>
            <Text>{event.location}</Text>
            <Text>{event.description}</Text>
            <Text>Date: {formatDate(event.startDate)}</Text>
            <Text>Réponses: {event.responses}</Text>
            { event.user === user.id && <Text>Vous êtes l'organisateur</Text> }
            { event.user !== user.id && <Text>Vous êtes invité</Text> }

          </Box>
        ))}

      </Flex>
    </VStack>
  );
};

export default EventList;
