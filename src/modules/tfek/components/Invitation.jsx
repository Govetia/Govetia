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
import { getUserById } from '../services/user.service';

function Invitation() {
  const { tokenId } = useParams();
  const [invitation, setInvitation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const toast = useToast();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    fetchInvitation();
  }, [tokenId]);

  const fetchInvitation = async () => {
    try {
        console.log(tokenId);
      const invitation = await getEventByInvitationToken(tokenId);
      setInvitation(invitation);
      setAuthor(await getUserById(invitation.user));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResponse = async (status) => {
    try {
      // Remplacez cette URL par l'URL réelle de votre API
      const response = await fetch(`/api/invitations/${tokenId}/respond`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) {
        throw new Error('Erreur lors de la réponse à l\'invitation');
      }
      toast({
        title: 'Réponse enregistrée',
        description: 'Votre réponse a été enregistrée avec succès.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: 'Erreur',
        description: err.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
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
        {invitation && (
          <>
            <Box borderWidth={1} borderRadius="lg" p={6}>
              <Heading as="h2" size="lg" mb={4}>
                {invitation.title}
              </Heading>
              { author && <Text mb={4}>Organisé par: {author.username} </Text> }
              <Text mb={4}>{invitation.description}</Text>
              <Text fontWeight="bold">
                Date: {new Date(invitation.startDate).toLocaleString()}
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
