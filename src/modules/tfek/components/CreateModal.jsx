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
  Box,
  Image,
  useDisclosure,
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Text,
  IconButton,

} from '@chakra-ui/react';
import { SearchIcon, AddIcon, CalendarIcon, TimeIcon } from '@chakra-ui/icons';
import { useRef, useState } from 'react'


function CreateModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const BlurOverlay = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
    const [overlay, setOverlay] = useState(<BlurOverlay />)
    const handleSubmit = (e) => {
      e.preventDefault();
      // Logique pour créer un nouvel événement
      onClose();
    };

    const selectImage = () => {
      // Logique pour sélectionner une image
    };
  
    const addEndDate = () => {
      // Logique pour ajouter une date de fin
    };

    return (
      <>
        <Button onClick={() => {
          setOverlay(<BlurOverlay />)
          onOpen()
        }}>Créer un événement</Button>

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
                  <Input type="text" placeholder="Titre..." />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Date de début</FormLabel>
                  <Input type="date" />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Date de fin</FormLabel>
                  <Input type="date" />
                  <IconButton
                    aria-label="Ajouter une date de fin"
                    icon={<AddIcon />}
                    onClick={addEndDate}
                    mt={2}
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Lieu</FormLabel>
                  <Input type="text" placeholder="Lieu..." />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Description</FormLabel>
                  <Textarea placeholder="Décrire l'événement..." />
                </FormControl>
                <ModalFooter>
                  <Button colorScheme="blue" mr={3} type="submit">
                    Créer
                  </Button>
                  <Button variant="ghost" onClick={onClose}>Annuler</Button>
                </ModalFooter>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default CreateModal