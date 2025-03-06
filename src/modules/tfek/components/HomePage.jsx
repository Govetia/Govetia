import { Flex, Card, CardBody, Box, CardHeader, Button, Heading, Text, Modal } from "@chakra-ui/react";
import CreateModal from "./CreateModal";
import EventCalendar from "./EventCalendar";
import EventList from "./EventList";
import { useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { getEvents } from '../services/event.service';
import { useUser } from '../context/user.context';

const Home = () => {
  const [events, setEvents] = useState([]);
  const { user } = useUser();
    useEffect(() => {
      user && getEvents().then((data) => {
        console.log(data);
        setEvents(data);
      });
    }, []);
  
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    getEvents().then((data) => {
      console.log('events', data);
      setEvents(data);
    });
  };

  return <Flex direction={"column"} justify={'flex-start'} align={'center'}  minH={"80vh"}>
    { user &&
    <Flex direction={"column"} justify={"flex-start"} w={"100%"} align={'center'}>
      <CreateModal />
      <Tabs isFitted variant='enclosed' py={5} w={'100%'}>
        <TabList mb='1em'>
          <Tab>Calendrier</Tab>
          <Tab>Liste</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Card>
              <CardHeader>
                <Heading size="md">Calendrier</Heading>
              </CardHeader>
              <CardBody>
                <EventCalendar events={events} onEventClick={handleEventClick} />
              </CardBody>
            </Card>
            {selectedEvent && (
              <Modal isOpen={true} onClose={() => setSelectedEvent(null)}>
                <Modal.Content>
                  <Modal.Header>{selectedEvent.title}</Modal.Header>
                  <Modal.Body>
                    <Text>Date: {selectedEvent.start}</Text>
                    <Text>Participants: {selectedEvent.extendedProps.participants}</Text>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => setSelectedEvent(null)}>Fermer</Button>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
            )}
          </TabPanel>
          <TabPanel>
            <EventList events={events} onEventClick={handleEventClick} />
          </TabPanel>
        </TabPanels>
      </Tabs>
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