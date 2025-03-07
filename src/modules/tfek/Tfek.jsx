
import HomePage from './pages/HomePage'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from './context/user.context';
import Invitation from './pages/Invitation';
import DetailEvent from './pages/DetailEvent';


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
          <Route path="invitation/:tokenId" element={<Invitation />} />
          <Route path="events/:eventId" element={<DetailEvent />} />
        </Routes>
      </UserProvider>
    </ChakraProvider>
  )
}

export default Tfek