
import { 
    Box,
    Button,
    Flex,
    HStack,
    chakra,
    IconButton,
    Link,
    SimpleGrid,
    VStack,
    CloseButton,
    Stack,
    Popover,
    PopoverContent,
    PopoverTrigger,
    useColorMode,
    useColorModeValue,
    useDisclosure
} from '@chakra-ui/react';
import { useRef, useState, useEffect } from 'react';
import { AiOutlineInbox,
    AiOutlineMenu,
    AiFillHome } from 'react-icons/ai'; // Ant Design Icons
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { IoIosArrowDown } from "react-icons/io";
import { FaMoon, FaSun } from "react-icons/fa";
import { useScroll } from 'framer-motion';
import ConnexionModal from './ConnexionModal';
import LoginModal from './LoginModal';

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
      
        const Section = (props) => {
          const ic = useColorModeValue("brand.600", "brand.50");
          const hbg = useColorModeValue("gray.50", "brand.400");
          const tcl = useColorModeValue("gray.900", "gray.50");
          const dcl = useColorModeValue("gray.500", "gray.50");
          return (
            <Link
              m={-3}
              p={3}
              display="flex"
              alignItems="start"
              rounded="lg"
              _hover={{
                bg: hbg,
              }}
            >
              <chakra.svg
                flexShrink={0}
                h={6}
                w={6}
                color={ic}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {props.icon}
              </chakra.svg>
              <Box ml={4}>
                <chakra.p fontSize="sm" fontWeight="700" color={tcl}>
                  {props.title}
                </chakra.p>
                <chakra.p mt={1} fontSize="sm" color={dcl}>
                  {props.children}
                </chakra.p>
              </Box>
            </Link>
          );
        };
      
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
            <Button colorScheme="brand" variant="ghost" size="sm">
                Se connecter
            </Button>
            <Button colorScheme="brand" variant="ghost" size="sm">
                S&apos;inscrire
            </Button>
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
                    <Flex flex={1}></Flex>
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
                        <ConnexionModal></ConnexionModal>
                        <LoginModal></LoginModal>
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
