
import HomePage from './components/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'
import { Box } from '@chakra-ui/react'
import { ChakraProvider } from "@chakra-ui/react";


function Tfek() {
  return (
    <ChakraProvider  minH={"100vh"} bg="#edf3f8"
    _dark={{
      bg: "#3e3e3e",
    }}>
      <Header></Header>
      <HomePage></HomePage>
      <Footer></Footer>
    </ChakraProvider>
  )
}

export default Tfek