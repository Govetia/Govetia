import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useDisclosure,
  IconButton,
  useToast,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useRef, useState } from 'react';
import { createEvent } from '../services/event.service';
import { useUser } from '../context/user.context';
import { IoMdAdd } from "react-icons/io";

function CreateModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const user = useUser();
  const toast = useToast();
  const [isWithEndDate, setIsWithEndDate] = useState(false);

  const BlurOverlay = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  );

  const [overlay, setOverlay] = useState(<BlurOverlay />);
  const [eventData, setEventData] = useState({
    userId: user.user.id,
    title: '',
    startDate: '',
    endDate: '',
    location: '',
    description: '',
  });

  const handleChange = (e) => {
    console.log(user);
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(eventData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEvent(eventData);
      toast({
        title: 'Événement créé',
        description: 'Votre événement a été créé avec succès.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      onClose();
    } catch (error) {
      toast({
        title: 'Erreur',
        description: 'Erreur lors de la création de l\'événement',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const addEndDate = () => {
    setIsWithEndDate(true);
  };

  const removeEndDate = () => {
    setIsWithEndDate(false);
  }

  return (
    <>
      <Button
        w={'fit-content'}
        onClick={() => {
          setOverlay(<BlurOverlay />);
          onOpen();
        }}
      >
        Créer un événement
      </Button>

      <Modal
        size={'xl'}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Créer un nouvel événement</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Titre</FormLabel>
                <Input
                  type="text"
                  placeholder="Titre..."
                  name="title"
                  value={eventData.title}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Date de début</FormLabel>
                <Input
                  type="date"
                  name="startDate"
                  value={eventData.startDate}
                  onChange={handleChange}
                />
              </FormControl>
              {isWithEndDate && 
              <Button colorPalette="teal" variant="outline" onClick={addEndDate}>
                Ajouter une date de fin <IoMdAdd />
              </Button>
              }
              {!isWithEndDate &&
                <Button colorPalette="teal" variant="outline" onClick={removeEndDate}>
                  Retirer la date de fin <IoMdAdd />
                </Button>
              }
              {isWithEndDate && 
                <FormControl mt={4}>
                  <FormLabel>Date de fin</FormLabel>
                  <Input
                    type="date"
                    name="endDate"
                    value={eventData.endDate}
                    onChange={handleChange}
                  />
                  
                </FormControl>
                }
              <FormControl mt={4}>
                <FormLabel>Lieu</FormLabel>
                <Input
                  type="text"
                  placeholder="Lieu..."
                  name="location"
                  value={eventData.location}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Décrire l'événement..."
                  name="description"
                  value={eventData.description}
                  onChange={handleChange}
                />
              </FormControl>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} type="submit">
                  Créer
                </Button>
                <Button variant="ghost" onClick={onClose}>
                  Annuler
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateModal;
