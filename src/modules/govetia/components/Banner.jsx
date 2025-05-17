import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import '../styles/Banner.css'
import { useNavigate } from "react-router";


function Banner() {
    const navigate = useNavigate()

    const redirectToTfek = () => {
        navigate('/tfek')
    }
    
    return (
        <ChakraProvider>
            <Box onClick={redirectToTfek}
            w="100%" h="100vh" position="relative" overflow="hidden" boxShadow={"0 3px 7px  0 rgba(0, 0, 6, 0.3),0 1px 2px 0 rgba(0, 0, 0, 0.06)"}>
                <video autoPlay muted loop playsInline style={{ 
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: '50%',
                    left: '50%',
                    objectFit: 'cover',
                    transform: 'translate(-50%, -50%)'
                }}>
                <source src="/assets/videos/forest.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
                <Flex w="100%" h="100%" justifyContent="center" align="center" position="relative">
                    <div class="disappear">
                        <span>G</span>
                        <span>O</span>
                        <span>V</span>
                        <span>E</span>
                        <span>T</span>
                        <span>I</span>
                        <span>A</span>
                        </div>
                </Flex>
            </Box>
        </ChakraProvider>
    )
}

export default Banner