import { Button } from '@chakra-ui/button'
import { ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input, Modal, useDisclosure } from '@chakra-ui/react'
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

    return (
      <>
        <Button onClick={() => {
          setOverlay(<BlurOverlay />)
          onOpen()
        }}>Créer un événement</Button>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>La création d&apos;événement s&apos;effectue depuis l&apos;application mobile</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Titre de l&apos;événement</FormLabel>
                <Input ref={initialRef} placeholder='First name' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Lieu</FormLabel>
                <Input placeholder='Last name' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Date</FormLabel>
                <Input placeholder='Last name' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Lieu</FormLabel>
                <Input placeholder='Last name' />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Créer
              </Button>
              <Button onClick={onClose}>Annuler</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default CreateModal