import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  useToast,
  Spinner,
  Container,
  Flex,
} from '@chakra-ui/react';
import { getEventByInvitationToken } from '../services/event.service';
import { getParticipantReponsesByEventId } from '../services/response.service';
import { getUserById } from '../services/user.service';
import { respondToInvitation } from '../services/invitation.service';
import { useUser } from '../context/user.context';


function Invitation() {
  const { tokenId } = useParams();
  const [event, setEvent] = useState(null);
  const [participantResponse, setParticipantResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const toast = useToast();
  const [author, setAuthor] = useState(null);
  const { user } = useUser();

  const handleResponse = async (status) => {
    respondToInvitation(event.id, user.id, null, status).then((response) => {
      toast({
        title: 'Réponse enregistrée',
        description: 'Votre réponse a été enregistrée avec succès.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    }).catch((err) => {
      toast({
        title: 'Erreur',
        description: err.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    });
  };

  if (loading) {
    return (
      <Container centerContent>
        <Spinner size="xl" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container centerContent>
        <Text color="red.500">{error}</Text>
      </Container>
    );
  }

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Invitation à l'événement
        </Heading>
        {event && (
          <>
            <Box borderWidth={1} borderRadius="lg" p={6}>
              <Heading as="h2" size="lg" mb={4}>
                {event.title}
              </Heading>
              { author && <Text mb={4}>Organisé par: {author.username} </Text> }
              <Text mb={4}>{event.description}</Text>
              <Text fontWeight="bold">
                Date: {new Date(event.startDate).toLocaleString()}
              </Text>
            </Box>
            <Flex spacing={4} justify={'space-between'}>
              <Button colorScheme="green" onClick={() => handleResponse('accepted')}>
                Accepter
              </Button>
              <Button colorScheme="yellow" onClick={() => handleResponse('maybe')}>
                Peut-être
              </Button>
              <Button colorScheme="red" onClick={() => handleResponse('declined')}>
                Décliner
              </Button>
            </Flex>
          </>
        )}
      </VStack>
    </Container>
  );
}

export default Invitation;
