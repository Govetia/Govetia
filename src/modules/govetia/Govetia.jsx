import Projects from './components/Projects'
import Banner from './components/Banner'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

function Govetia() {
  const tfekProject =
    {
      title: "Tfek ? L'application de gestion d'événements",
      url: "/tfek",
      picture: "/assets/tarawa.png",
      alt: 'Page accueil site web Tfek'
    }
    return (
        <ChakraProvider theme={theme}>
            <Banner></Banner>
            <Projects></Projects>
        </ChakraProvider>
    )
}

export default Govetia