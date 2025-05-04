import { Button } from '@chakra-ui/button'
import { Flex, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input, Modal, useDisclosure, useToast } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { loginUser, registerUser } from '../services/auth.service';
import { useUser } from '../context/user.context';


function AuthModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const toast = useToast();
    const { login: loginContext } = useUser();


    const handleSubmit = async () => {
      connection().then((user) => {
        toast({
          title: 'Authentification réussie',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        loginContext(user);
        onClose();
      }).catch((error) => {
        toast({
          title: 'Erreur lors de l\'authentification',
          description: error.response.data.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        });

      });
    };

    const connection = async () => {
      if (isRegister) {
        return registerUser({ username, email, password });
      } else {
        return loginUser({ email, password });
      }
    }

    return (
      <>
        <Button onClick={onOpen}>Connexion</Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{isRegister ? 'Inscription' : 'Connexion'}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              {isRegister && (
                <FormControl>
                  <FormLabel>Nom d'utilisateur</FormLabel>
                  <Input
                    ref={initialRef}
                    placeholder="Nom d'utilisateur"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormControl>
              )}
              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Mot de passe</FormLabel>
                <Input
                  placeholder='Mot de passe'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Flex justify='center' mt={5}>
                <Button size='sm' onClick={() => setIsRegister(!isRegister)}>
                  {isRegister ? 'J\'ai déjà un compte' : 'Je n\'ai pas encore de compte'}
                </Button>

              </Flex>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
                {isRegister ? 'S\'inscrire' : 'Se connecter'}
              </Button>
              
              <Button onClick={onClose}>Annuler</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default AuthModal;