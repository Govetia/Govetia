import { Flex, Card, CardBody, Box, CardHeader, Button, Heading, Text } from "@chakra-ui/react";
import CreateModal from "../components/CreateModal";
import EventCalendar from "../components/EventCalendar";
import { useState } from "react";
import { useEvents } from '../context/event.context';
import { useUser } from '../context/user.context';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { createdEvents, invitedEvents } = useEvents();
  const { user } = useUser();
  const navigate = useNavigate();
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEventClick = (info) => {
    navigate(`/tfek/events/${info.id}`);
  };

  return <Flex direction={"column"} justify={'flex-start'} align={'center'}  minH={"80vh"}>
    { user &&
    <Flex direction={"column"} justify={"flex-start"} w={"100%"} align={'center'} mx={3}>
      <Button onClick={() => setIsModalOpen(true)}>Créer un événement</Button>
      <CreateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultStartDate={null}
      />
        <Card w={"100%"}>
          <CardHeader>
            <Heading size="md">Calendrier</Heading>
          </CardHeader>
          <CardBody>
            <EventCalendar createdEvents={createdEvents} invitedEvents={invitedEvents} onEventClick={handleEventClick} />
          </CardBody>
        </Card>
    </Flex>
} 
  { !user && 
    <Flex justify={'center'} align={'center'} flex={1}>
      <Text>
        <h1>Connectez-vous pour accéder aux événements</h1>
      </Text>
    </Flex>
  }
    
  </Flex>;
};

export default Home;