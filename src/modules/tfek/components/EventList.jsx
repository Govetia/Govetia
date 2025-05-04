import React from 'react';
import { VStack, Box, Text, Heading, Flex } from "@chakra-ui/react";
import { useUser } from '../context/user.context';
import { useEvents } from '../context/event.context';


const EventList = ({ onEventClick }) => {
  const { createdEvents } = useEvents();
  const { user } = useUser();
  

  function formatDate(date) {
    return new Date(date).toLocaleDateString();
  }
  return (
    <VStack align="stretch" spacing={4}>
      { events.length === 0 && 
        <Flex w={'100%'} justify={'center'} align={'center'} h={'70vh'}>
          <Text fontSize={'3xl'}>Aucun événement</Text>
        </Flex> 
      }
      <Flex justify={'space-around'} flexWrap={'wrap'}>
        {createdEvents.map((event) => (
          <Box
            key={event.id}
            p={4}
            m={3}
            flex={"1 1 0"}
            minW={"10rem"}
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
