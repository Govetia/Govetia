import React from 'react';
import { useParams } from 'react-router-dom';
import { Flex, Heading, Text, Button, Container, VStack, Link } from "@chakra-ui/react";
import { getEventById } from '../services/event.service';
import { useEffect, useState } from "react";
import { FaUserAstronaut } from "react-icons/fa6";
import { FcCalendar } from "react-icons/fc";
import { FaMapMarkedAlt, FaWhatsapp, FaEnvelope, FaFacebookMessenger } from "react-icons/fa";
import {getUserById} from '../services/user.service';
import { formatDate } from '../utils/date-management';
import { useUser } from '../context/user.context';

const DetailEvent = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [author, setAuthor] = useState(null);
  const user = useUser();

  useEffect(() => {
    // Fetch the event details based on the eventId
    getEventById(eventId).then((res) => {
      setEvent(res.data);
      getUserById(res.data.user).then((res) => {
        setAuthor(res);
      });
    }).catch((error) => {
      console.error("Error fetching event details:", error);
    });
  }, [eventId]);

  const formatEventDate = (date) => {
    return formatDate(date);
  }

  const invitationLink = `https://localhost:3001/tfek/invitation/${event?.invitationToken}`;
  const shareMessage = `Salut, t'es dispo pour ${event?.title} ? Voici le lien d'invitation Tfek : ${invitationLink}`;



  const copyInvitationLink = () => {
    navigator.clipboard.writeText(invitationLink).then(() => {
      console.log('Invitation link copied to clipboard');
    });
  }



  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Événement
        </Heading>
        {event && (
          <>
            <Flex direction={'column'} justify={'center'} align={'center'} borderWidth={1} borderRadius="lg" p={6} >
              <Flex align={'center'} flex={1}>
                  <FaUserAstronaut />
                  {author && <Text px={1} fontWeight="bold">{author.username}</Text>}
                </Flex>
              <Flex justify={'space-around'} align={'center'} w={'100%'}>
                <Flex justify={'center'} align={'center'} flex={1}>
                  <FcCalendar />
                  <Text px={1} fontWeight="bold">{formatEventDate(event.startDate)}</Text>
                </Flex>
                <Flex justify={'center'} align={'center'} flex={3}>
                    <Heading as="h2" size="lg" mb={4}>
                    {event.title}
                  </Heading>
                </Flex>
              
              <Flex justify={'center'} align={'center'} flex={1}>
                <FaMapMarkedAlt />
                {event.location && <Text px={1} fontWeight="bold">{event.location}</Text>}
                {!event.location && <Text px={1} fontWeight="bold">Non spécifié</Text>}
              </Flex>
  
              </Flex>
              
              <Text mb={4}>{event.description}</Text>
            </Flex>
            {author && author.id === user.user.id && (
              <Flex justify={'center'} align={'center'} w={'100%'} gap={4}>
                  <Button colorScheme="blue" onClick={copyInvitationLink()}>
                    Copier le lien d'invitation
                    </Button>
                    <Link href={`mailto:?subject=Invitation à l'événement&body=${encodeURIComponent(shareMessage)}`} isExternal>
                      <Button leftIcon={<FaEnvelope />} colorScheme="blue">Email</Button>
                    </Link>
                    <Link href={`https://m.me/?text=${encodeURIComponent(shareMessage)}`} isExternal>
                      <Button leftIcon={<FaFacebookMessenger />} colorScheme="blue">Messenger</Button>
                    </Link>
                    <Link href={`https://wa.me/?text=${encodeURIComponent(shareMessage)}`} isExternal>
                      <Button leftIcon={<FaWhatsapp />} colorScheme="green">WhatsApp</Button>
                    </Link>
             
              </Flex>
            )}
            { author && author.id !== user.user.id && 
              <Flex spacing={4} justify={'space-between'}>
                <Button colorScheme="green">
                  Accepter lala
                </Button>
                <Button colorScheme="yellow" >
                  Peut-être
                </Button>
                <Button colorScheme="red">
                  Décliner
                </Button>
              </Flex>
            }

          </>
        )}
      </VStack>
    </Container>
  );
};

export default DetailEvent;
