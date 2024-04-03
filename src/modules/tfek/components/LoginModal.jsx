import { Button } from '@chakra-ui/button'
import { ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input, Modal, useDisclosure } from '@chakra-ui/react'
import { useRef } from 'react'


function CreateModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef(null)
    const finalRef = useRef(null)

    return (
      <>
        <Button onClick={onOpen}>S&apos;inscrire</Button>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Inscription</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                <FormControl>
                <FormLabel>Pseudo</FormLabel>
                <Input ref={initialRef} placeholder='Pseudo' />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input ref={initialRef} placeholder='Email' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Mot de passe</FormLabel>
                <Input placeholder='Mot de passe' />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='green' mr={3}>
                S&apos;inscrire
              </Button>
              <Button onClick={onClose}>Annuler</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default CreateModal