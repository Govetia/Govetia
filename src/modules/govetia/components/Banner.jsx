//import logo from '../assets/logo.png'
import { Box, ChakraProvider, Collapse, Flex, Img, useDisclosure } from '@chakra-ui/react'
import '../styles/Banner.css'
import Header from './Header'

function Banner() {
    const title = 'Govetia'
    const { isOpen, onToggle } = useDisclosure()
    return (
        <ChakraProvider>
            <Box w="100%" h="100vh" position="relative" overflow="hidden">
                <video autoPlay muted loop playsInline style={{ 
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: '50%',
                    left: '50%',
                    objectFit: 'cover',
                    transform: 'translate(-50%, -50%)'
                }}>
                <source src="/assets/orange_leaf.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
                <Flex w="100%" h="100%" justifyContent="center" align="center" position="relative">
                    <h1 className='gvt-title'>{title}</h1>
                </Flex>
                {/* <div className='gvt-banner'>
                    
                    <h1 className='gvt-title'>{title}</h1>
                    <Header></Header>
                </div> */}
            </Box>
        </ChakraProvider>
    )
}

export default Banner