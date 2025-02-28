import { Flex, Card, CardBody, Box, CardHeader, CardFooter, Image, Button, Heading, Stack, StackDivider, Text, Modal } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import CreateModal from "./CreateModal";
import EventCalendar from "./EventCalendar";
import EventList from "./EventList";
import { useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { getEvents } from '../services/event.service';


const Home = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getEvents().then((data) => {
      setEvents(data);
    });
  }, []);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
  };

  return <Flex direction={"column"} justify={'space-around'} align={'center'}  minH={"80vh"}>
    <CreateModal />
    <Tabs isFitted variant='enclosed' w="100%" py={5}>
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
    



  </Flex>;
};

export default Home;