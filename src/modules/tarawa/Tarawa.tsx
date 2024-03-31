
import IndexPage from './components/layout'
import Footer from './components/layout/footer'
import Header from './components/layout/header'
import theme from './theme'
import { ChakraProvider } from '@chakra-ui/react'



function Tarawa() {
    return (
      <ChakraProvider theme={theme}>
        <Header></Header>
        <IndexPage></IndexPage>
        <Footer></Footer>
      </ChakraProvider>
    )
}

export default Tarawa