
import { 
    Box,
    Button,
    Flex,
    HStack,
    chakra,
    IconButton,
    Link,
    VStack,
    CloseButton,
    useColorMode,
    useColorModeValue,
    useDisclosure
} from '@chakra-ui/react';
import { useRef, useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai'; // Ant Design Icons
import { FaMoon, FaSun } from "react-icons/fa";
import { useScroll } from 'framer-motion';
import AuthModal from './AuthModal';
import { useUser } from '../context/user.context';

const Header = () => {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue("white", "gray.800");
  const ref = useRef(null);
  const [y, setY] = useState(0);
  const height = ref.current ? ref.current.getBoundingClientRect() : 0;
  const { scrollY } = useScroll();
  useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const cl = useColorModeValue("gray.800", "white");
  const mobileNav = useDisclosure();
  const { user, logout } = useUser();


  useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);


  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      {user ? (
        <Button onClick={logout}>Déconnexion</Button>
      ) : (
        <AuthModal />
      )}
    </VStack>
  );
  return (
    <>
      <chakra.header
        ref={ref}
        shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        borderTop="6px solid"
        borderTopColor="brand.400"
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" >
          <Flex
            w="full"
            h="full"
            alignItems="center"
            justifyContent="space-between"
          >
              <Flex flex={1} px={5}>
              {user ? (
                <p>Salut {user.username}</p>
              ) : (
                <p>Non connecté</p>
              )}
              </Flex>
              <Flex flex={2} justify={"center"}>
                  <Link href="/">
                  <HStack>
                      <h1>Tfek ?</h1>
                  </HStack>
                  </Link>
              </Flex>
              <Flex flex={1}>
                  <HStack
                  spacing="5"
                  display={{
                      base: "none",
                      md: "flex",
                  }}
                  > 
                   {user ? (
                    <Button onClick={logout}>Déconnexion</Button>
                  ) : (
                    <AuthModal />
                  )}
                  </HStack>
                  <IconButton
                  size="md"
                  fontSize="lg"
                  aria-label={`Switch to ${text} mode`}
                  variant="ghost"
                  color="current"
                  ml={{
                      base: "0",
                      md: "3",
                  }}
                  onClick={toggleMode}
                  icon={<SwitchIcon />}
                  />
                  <IconButton
                  display={{
                      base: "flex",
                      md: "none",
                  }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="gray.800"
                  _dark={{
                      color: "inherit",
                  }}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                  />
              </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </>
  );
};

export default Header;
