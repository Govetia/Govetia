import Projects from './components/Projects'
import Banner from './components/Banner'
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
        <div>
            <Banner></Banner>
            {/* <Projects></Projects> */}
            {/* <Flex >
            <Box className= "gvt-projects"  >
                <a
                  href= {tfekProject.url}
                  target="_blank"
                  rel="noreferrer" >
                  <Flex direction='column' align='center'>
                    <Text p='8' fontSize={25} fontWeight="600" >{tfekProject.title}</Text>
                    <Image borderRadius="1.5em" border="1px solid #ffff"  maxWidth='85%' boxShadow="0px 0px 18px rgba(0, 0, 0, 0.5)" src={tfekProject.picture} alt={tfekProject.alt} />
                  </Flex>
                </a>
            </Box>
          </Flex> */}
        </div>
    )
}

export default Govetia