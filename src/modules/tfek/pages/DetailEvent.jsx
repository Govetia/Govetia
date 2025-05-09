import React from 'react';
import { useParams } from 'react-router-dom';
import { 
  Flex, 
  Heading, 
  Text, 
  Button, 
  Container, 
  VStack, 
  Link, 
  Alert, 
  AlertIcon, 
  AlertTitle, 
  AlertDescription, 
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  useDisclosure,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  useColorModeValue,
  FormLabel,
 } from "@chakra-ui/react";
import { getEventById } from '../services/event.service';
import { useEffect, useState } from "react";
import { FaUserAstronaut } from "react-icons/fa6";
import { FcCalendar } from "react-icons/fc";
import { FaMapMarkedAlt, FaWhatsapp, FaEnvelope, FaFacebookMessenger, FaQuestionCircle, FaTrash } from "react-icons/fa";
import { ImUserCheck } from "react-icons/im";
import { IoMdCloseCircle } from "react-icons/io";
import {getUserById} from '../services/user.service';
import { getParticipantReponsesByEventId, deleteResponse } from '../services/response.service';
import { formatDate } from '../utils/date-management';
import { useUser } from '../context/user.context';
import { respondToInvitation } from '../services/invitation.service';
import AuthModal from '../components/AuthModal';


const DetailEvent = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [responses, setResponses] = useState([]);
  const [author, setAuthor] = useState(null);
  const user = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [anonymousName, setAnonymousName] = useState('');
  const [responseStatus, setResponseStatus] = useState('');
  const [ isAuthor, setIsAuthor ] = useState(false);


  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )
  const [overlay, setOverlay] = React.useState(<OverlayOne />)


  useEffect(() => {
    getEventById(eventId).then((res) => {
      setEvent(res.data);
      getUserById(res.data.userId).then((res) => {
        setAuthor(res);
        if (res.id === user.user?.id) {
          setIsAuthor(true);
        }
      });
    }).catch((error) => {
      console.error("Error fetching event details:", error);
    });

    getParticipantReponsesByEventId(eventId).then((res) => {
      setResponses(res);
    }).catch((error) => {
      console.error("Error fetching responses:", error);
    });
  }, [eventId, user.user]);

  const formatEventDate = (date) => {
    return new Date(date).toLocaleDateString('fr-FR');
  }

  const invitationLink = window.location.href;
  const shareMessage = `Salut, t'es dispo pour ${event?.title} ? Voici le lien d'invitation Tfek : ${invitationLink}`;



  const copyInvitationLink = () => {
    navigator.clipboard.writeText(invitationLink);
  }

  const mapAlertStatus = (status) => {
    switch (status) {
      case 'accepted':
        return 'success';
      case 'maybe':
        return 'warning';
      case 'declined':
        return 'error';
      default:
        return 'info';
    }
  }

  const translateResponseStatus = (status) => {
    switch (status) {
      case 'accepted':
        return 'Chaud';
      case 'maybe':
        return 'Chep';
      case 'declined':
        return 'Pas dispo';
      default:
        return 'En attente';
    }
  }

  const respond = (status) => {
    if (!user.user) {
      setResponseStatus(status);
      onOpen();
    } else {
      submitResponse(status, user.user.id, user.user.username);
    }
  }

  const submitResponse = async (status, userId, name) => {
    try {
      await respondToInvitation(eventId, userId, name, status);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error('Error submitting response:', error);
      alert('Erreur lors de l\'enregistrement de la réponse');
    }
  }

  const handleSubmit = () => {
    if (!anonymousName) {
      alert('Veuillez entrer un nom');
      return;
    }
    submitResponse(responseStatus, null, anonymousName);
  }

  const handleDeleteResponse = async (response) => {
    try {
      await deleteResponse(response.id);
      window.location.reload();
    } catch (error) {
      console.error('Error deleting response:', error);
      alert('Erreur lors de la suppression de la réponse');
    }
  }

  const modalCardBg = useColorModeValue('gray.100', 'gray.800');


  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Événement
        </Heading>
        {event && (
          <>
            <Card direction={'column'} justify={'center'} align={'center'} p={6} >
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

              {responses.length > 0 && (
                <Flex direction={'column'} justify={'center'} align={'center'} borderRadius="lg"  w={'100%'}>
                  <Flex wrap="wrap" justify={'center'}>
                    {responses.map((response) => (
                      
                      <Flex key={response.id} m={2} borderWidth={1} borderRadius="lg">
                        <Alert status={mapAlertStatus(response.status)}>
                          { response.status === 'accepted' && <AlertIcon /> }
                          { response.status === 'maybe' && <FaQuestionCircle color='yellow' size={25}/> }
                          { response.status === 'declined' && <IoMdCloseCircle color='red' size={25}/> }
                          <Box px={1}>
                            <AlertTitle display={'flex'}>
                              <Text mr={1}>{response.anonymousName}</Text>
                              { response.userId && <ImUserCheck  color='cornflowerblue' />}
                              </AlertTitle>
                            <AlertDescription>{translateResponseStatus(response.status)}</AlertDescription>
                          </Box>
                          { (isAuthor && !response.userId) && 
                            <Button onClick={() => handleDeleteResponse(response)} size='xs' colorScheme={'red'}>
                              <FaTrash />
                            </Button>
                          }
                        </Alert>
      
                      </Flex>
                    ))}
                  </Flex>
                </Flex>
              )}
              {responses.length === 0 && (
                <Flex justify={'center'} align={'center'} flex={1} borderWidth={1} borderRadius="lg" p={6} w={'100%'}>
                  <Text fontSize={'xl'}>Pas encore de réponses</Text>
                </Flex>
              )}
            </Card>
            {isAuthor && (
              <Flex justify={'center'} align={'center'} w={'100%'} gap={4}>
                <Button colorScheme="blue" onClick={copyInvitationLink}>Copier le lien d'invitation</Button>
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
            { !isAuthor && 
              <Flex spacing={4} justify={'space-between'}>
                <Button colorScheme="green" onClick={() => respond('accepted')}>
                  Accepter
                </Button>
                <Button colorScheme="yellow" onClick={() => respond('maybe')} >
                  Peut-être
                </Button>
                <Button colorScheme="red" onClick={() => respond('declined')}>
                  Décliner
                </Button>
              </Flex>
            }

          </>
        )}
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose}>
      {overlay}
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Qui es tu ?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Card variant={'elevated'} bg={modalCardBg}>
            <CardHeader>
              <Heading size='md'>Connecte toi pour retrouver tes infos</Heading>
            </CardHeader>
            <CardFooter>
              <AuthModal />
            </CardFooter>
          </Card>
          <Card bg={modalCardBg} mt={2}>
            <CardHeader>
              <Heading size='md'>Sinon répond juste à l'événement sans te connecter</Heading>
            </CardHeader>
            <CardBody>
              <FormLabel>Nom</FormLabel>
              <Input
                type="text"
                placeholder="Ton nom pour l'organisateur"
                value={anonymousName}
                onChange={(e) => setAnonymousName(e.target.value)}
              />
              </CardBody>
            <CardFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Soumettre
            </Button>
            <Button variant="ghost" onClick={onClose}>Annuler</Button>
            </CardFooter>
          </Card>

            
          </ModalBody>
          <ModalFooter>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default DetailEvent;
