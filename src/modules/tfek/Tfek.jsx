
import HomePage from './components/HomePage'
import Header from './components/Header'
import Invitation from './components/Invitation'
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from './context/user.context';


function Tfek() {
  return (
    <ChakraProvider  minH={"100vh"} bg="#edf3f8"
    _dark={{
      bg: "#3e3e3e",
    }}>
      <UserProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/invitation" element={<HomePage />} />
        </Routes>
      </UserProvider>
    </ChakraProvider>
  )
}

export default Tfek