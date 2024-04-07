import Projects from './components/Projects'
import Banner from './components/Banner'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'

function Govetia() {
    return (
        <ChakraProvider theme={theme}>
            <Banner></Banner>
            <Projects></Projects>
        </ChakraProvider>
    )
}

export default Govetia