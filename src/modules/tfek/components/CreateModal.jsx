import { Button } from '@chakra-ui/button'
import { ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input, Modal, useDisclosure, SimpleGrid, Card, CardHeader, Heading, CardBody, CardFooter, Text, Box, Image } from '@chakra-ui/react'
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

    const downloadApp = (store) => () => {
      if (store === 'Android') {
        window.open('https://play.google.com/store/apps/details?id=com.tfe.k')
      } else {
        window.open('https://apps.apple.com/fr/app/tfe-k/id1554238812')
      }
    }

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
            <ModalHeader pt={8}>La création d&apos;événement s&apos;effectue depuis l&apos;application mobile</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
              <Card  onClick={downloadApp('Android')} className={'pointer'}>
                <CardHeader>
                  <Heading size='md'> Android</Heading>
                </CardHeader>
                <CardBody>
                  <Text>Télécharger ici</Text>
                  <Image src="/tfek/images/download_play_store.png" alt='télécharger dans le play store' w={"15rem"} />
                </CardBody>
              </Card>
              <Card onClick={downloadApp('Apple')} className={'pointer'}>
                <CardHeader>
                  <Heading size='md'> iPhone</Heading>
                </CardHeader>
                <CardBody onClick={downloadApp('Apple')}>
                  <Text>Télécharger ici</Text>
                  <Image src="/tfek/images/download_app_store.png" alt="télécharger dans l'app store" w={"15rem"} />
                </CardBody>
              </Card>
            </SimpleGrid>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default CreateModal