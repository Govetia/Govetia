
import HomePage from './components/HomePage'
import Header from './components/Header'
import theme from '../tarawa/theme'
import { ChakraProvider } from '@chakra-ui/react'



function Tfek() {
  return (
    <ChakraProvider theme={theme}>
      <Header></Header>
      <HomePage></HomePage>
    </ChakraProvider>
  )
}

export default Tfek