import LanguagesButton from '../languages-button';
import ThemeButton from '../theme-button';
import { Box, Button, Flex, HStack, Image, Link } from '@chakra-ui/react';
import { useEffect, useState } from 'react';



const Header = () => {
  const [width, setWindowWidth] = useState(0);
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => 
      window.removeEventListener("resize",updateDimensions);
   }, [])
   const updateDimensions = () => {
     const width = window.innerWidth
     setWindowWidth(width)
   }
   const desktopView = width > 980;
  return (
    <HStack
      as='header'
      position='fixed'
      top='0'
      zIndex='tooltip'
      justify='space-between'
      align='center'
      w='100%'
    >
      <Flex w="100%" paddingTop={5} justify="space-between">
        <Flex display={desktopView ? "flex" : "none"} w="30%" justify="space-around" >
          <Image w={10} src="/tarawa/assets/logo.svg" alt="logo"></Image>
          <Flex w="80%" justifyContent="space-around">
              <Link color={"white"} mixBlendMode={"difference"} blendMode={"color"}>Séjours</Link>
              <Link color="white">Expériences</Link>
              <Link color="white">Découvertes</Link>
          </Flex>
        </Flex>
        <Flex display={!desktopView ? "flex" : "none"}>
          <Box px={2}>
            <Image w={8} color={"white"} src="/tarawa/assets/menu-bars-svgrepo-com.svg" alt="menu"></Image>
          </Box>
        </Flex>
        <Button mr={5} bgColor="darkcyan" borderRadius="4px" color="white" _hover={{ bgGradient: 'linear(to-t, darkBlue, blue)'}}>Réserver</Button>
      </Flex>
    </HStack>
  );
};

export default Header;
