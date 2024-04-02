import { Flex, Card, CardBody, Box, CardHeader, CardFooter, Image, Button, Heading, Stack, StackDivider, Text, Modal } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import CreateModal from "./CreateModal";

const Home = () => {
  return <Flex direction={"column"} justify={'space-around'} align={'center'}  minH={"80vh"}>
    <CreateModal />
    <Flex py={5} justify={'space-around'} align={'center'} w={"100%"}>
      <Card>
        <CardHeader>
          <Heading size='md'>Mes événements</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
              >
                <Image
                  objectFit='cover'
                  maxW={{ base: '100%', sm: '200px' }}
                  src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                  alt='Caffe Latte'
                />
                <Stack>
                  <CardBody>
                    <Heading size='md'>Evénement 1</Heading>

                    <Text py='2'>
                      Description de l événement
                    </Text>
                    <Text py='2'>
                      Lieu
                    </Text>
                    <Text py='2'>
                      Date
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <Button variant='solid' colorScheme='blue'>
                      Buy Latte
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            </Box>
            <Box>
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
              >
                <Image
                  objectFit='cover'
                  maxW={{ base: '100%', sm: '200px' }}
                  src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                  alt='Caffe Latte'
                />
                <Stack>
                  <CardBody>
                    <Heading size='md'>Evénement 2</Heading>

                    <Text py='2'>
                      Description de l événement
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <Button variant='solid' colorScheme='blue'>
                      Buy Latte
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            </Box>
          </Stack>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <Heading size='md'>Invitations</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box>
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
              >
                <Image
                  objectFit='cover'
                  maxW={{ base: '100%', sm: '200px' }}
                  src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                  alt='Caffe Latte'
                />
                <Stack>
                  <CardBody>
                    <Heading size='md'>Evénement 1</Heading>

                    <Text py='2'>
                      Description de l événement
                    </Text>
                    <Text py='2'>
                      Lieu
                    </Text>
                    <Text py='2'>
                      Date
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <Button variant='solid' colorScheme='blue'>
                      Buy Latte
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            </Box>
            <Box>
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
              >
                <Image
                  objectFit='cover'
                  maxW={{ base: '100%', sm: '200px' }}
                  src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                  alt='Caffe Latte'
                />
                <Stack>
                  <CardBody>
                    <Heading size='md'>Evénement 2</Heading>

                    <Text py='2'>
                      Description de l événement
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <Button variant='solid' colorScheme='blue'>
                      Buy Latte
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Flex>


  </Flex>;
};

export default Home;