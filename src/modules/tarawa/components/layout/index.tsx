import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Image,
  Img,
  Text,
  Collapse, useDisclosure
} from '@chakra-ui/react';
import theme from '../../theme/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";

interface MousewheelOptions {
  releaseOnEdges: boolean;
  thresholdDelta?: number;
}

const mouseWheelOption: MousewheelOptions = {
  releaseOnEdges : true,
  thresholdDelta: 10
}

const logoSrc = "/tarawa/assets/logo.svg";

const IndexPage = () => {
  const [width, setWindowWidth] = useState(0);
  const { isOpen, onToggle } = useDisclosure()
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => 
      window.removeEventListener("resize",updateDimensions);
   }, [])
   const updateDimensions = () => {
     const width = window.innerWidth
     setWindowWidth(width)
   }
   const desktopView = width > 980;
   
   if (!isLoaded) {
     setTimeout(() => {
      onToggle();
      setIsLoaded(true)
     }, 100);
   }


  const [appearFromRight, inViewFromRight] = useInView();
  const [appearFromLeft, inViewFromLeft] = useInView();

  const controls = useAnimation();

  React.useEffect(() => {
    if (inViewFromRight) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: {
          opacity: { duration: 2 },
          x: { duration: 2 },
        },
      });
    }
  }, [inViewFromRight, controls]);
  React.useEffect(() => {
    if (inViewFromLeft) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: {
          opacity: { duration: 2 },
          x: { duration: 2 },
        },
      });
    }
  }, [inViewFromLeft, controls]);

  return (
    <ChakraProvider theme={theme}>
      <Box w="100%" h="100vh" position="relative" overflow="hidden">
        <video autoPlay muted loop playsInline style={{ 
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '50%',
            left: '50%',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)'
          }}>
          <source src="/tarawa/assets/teaser_header.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Flex w="100%" h="100%" justifyContent="center" align="center" position="relative">
          <Collapse in={isOpen} transition={{ exit: { delay: 1 }, enter: { duration: 2 } }}>
            <Img w={200} src={logoSrc} alt="logo" />
          </Collapse>
        </Flex>
      </Box>

      <Flex justify={"space-between"} alignItems={"center"}  margin={desktopView ? "8rem" : "2rem"} flexDir={desktopView ? "row" : "column"}>
       
          <Flex flexDirection="column" flex={1}>
            <Text fontSize="3xl" color="darkBlue" fontFamily="tiger_walkregular">Tarawa hotel 5 étoiles.</Text>
            <Text fontSize="5xl" lineHeight={1.5} fontFamily="samsung_sharp_sansbold">Détente.</Text>
            <Text fontSize="5xl" lineHeight={1.5} fontFamily="samsung_sharp_sansbold">Relaxation.</Text>
            <Text fontSize="5xl" lineHeight={1.5} fontFamily="samsung_sharp_sansbold">Silence.</Text>
          </Flex>
        <Collapse in={isOpen}  transition={{exit: {delay: 5}, enter: {duration: 2}}}>
        <Flex flexDirection="column" flex={1} margin={ desktopView ? "3rem 3rem" : "2rem"}>
          <Text fontSize={'2xl'} fontFamily="samsungone400">Surplombant les plages de sable blanc de l&apos;île de Saint-Barthélemy, le <strong>Tarawa Hotel</strong> est le lieu rêvé des voyageurs en quête d&apos;une escapade luxueuse en toute intimité.</Text>
          <Flex flexDir={desktopView ? "row" : "column"}>
            <Button bgColor={"darkBlue"} color={"white"} p={5} m={5}>Voir les chambres</Button>
            <Button p={5} m={5}>Comparer les chambres</Button>
          </Flex>
        </Flex>
        </Collapse>

      </Flex>
      

      <Flex ref={appearFromLeft} align={"center"} margin={"6rem 0"} h={"50vh"} flexDir={desktopView ? "row" : "column"}>
        <Flex flexDirection="column" align="center" justifyContent={"center"} flex={1}>
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={controls}
            style={{ opacity: 0 }}
          >
          <Text fontSize="7xl" color="darkBlue" fontStyle="" fontWeight="bold" fontFamily="tiger_walkregular">10:12</Text>
          <Text fontSize={"2xl"} fontFamily="samsungone400">Un réveil en douceur</Text>
          <Button>Voir les chambres</Button>
          </motion.div>
        </Flex>
        <Flex flex={2} py={2} w={"100%"} h={"100%"} >
        <Box position="relative" overflow="hidden" borderRadius={desktopView ? "20px 0 0 20px" : ""} h="100%" w="100%">
          <video autoPlay muted loop playsInline style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: '50%',
              left: '50%',
              objectFit: 'cover',
              transform: 'translate(-50%, -50%)',
              borderRadius: desktopView ? "20px 0 0 20px" : "" // Appliquer le borderRadius ici également
            }}>
            <source src="/tarawa/assets/timeline-01.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
          
        </Flex>
      </Flex>
      <Flex ref={appearFromRight} align={"center"} margin={"6rem 0"} h={"50vh"} flexDir={desktopView ? 'row' : "column-reverse"}>
    
        <Flex  flex={2} py={2} w={"100%"} h={"100%"}>
        <Box position="relative" overflow="hidden" borderRadius={desktopView ? "0 20px 20px 0" : ""} h="100%" w="100%">
          <video autoPlay muted loop playsInline style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: '50%',
              left: '50%',
              objectFit: 'cover',
              transform: 'translate(-50%, -50%)',
              borderRadius: desktopView ? "0 20px 20px 0" : "" // Appliquer le borderRadius ici également
            }}>
            <source src="/tarawa/assets/timeline-05.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
        </Flex>
        
          <Flex flexDirection="column" align="center" flex={1}>
            <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={controls}
            style={{ opacity: 0 }}
          >
            <Text fontSize="7xl" color="darkBlue" fontWeight="bold" fontFamily="tiger_walkregular">21:57</Text>
            <Text fontSize={"2xl"}>Soleil, mer, détente</Text>
            <Button>Voir les offres</Button>
          </motion.div>
        </Flex>
        
        
      </Flex>
 
      <Flex flexDir={"column"} bgColor={"lightGray"} w={"100%"} >
        <Flex justify={"center"}>
          <Text textAlign={"center"} fontSize={desktopView ? "8xl" : "4xl"} fontFamily="samsung_sharp_sansbold" m={desktopView ? "5rem 17rem" : "5rem 8rem"}>Un hôtel pas comme les autres.</Text>
        </Flex>
        <Flex>
          <Swiper
            spaceBetween={50}
            slidesPerView={desktopView ? 2.2 : 1.2}
            mousewheel={mouseWheelOption}
            modules={[Mousewheel]}
          >
            <SwiperSlide>
              <Flex h={"40rem"} mx={20}>
                <Flex h={"90%"} >
                  <Image  src="/tarawa/assets/slideshow-01.jpg" borderRadius={10} alt='slide'></Image>
                </Flex>
              </Flex>
            </SwiperSlide>
              
            <SwiperSlide>
              <Flex h={"40rem"} flexDir={"column"} justifyContent={"flex-end"} alignItems={"center"}>
                <Box p={3}>
                  <Text textAlign={"start"} fontSize={"3xl"} fontFamily="samsung_sharp_sansbold">Toutes les saveurs des îles</Text>
                  <Text textAlign={"start"} fontSize={"xl"}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.</Text>

                </Box>
                <Flex borderRadius={10} p={5} h={"50%"} w={"100%"}>
                  <Box borderRadius={5} backgroundImage={"url(/tarawa/assets/slideshow-02.mp4)"} backgroundSize={"cover"} w={"100%"} h={"100%"}></Box>
                </Flex>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex h={"40rem"} w={"100%"} >
                <Flex h={"90%"} p={5} justifyContent={"center"}>
                  <Image  src="/tarawa/assets/slideshow-03.jpg" alt='slideshow' borderRadius={10} ></Image>
                </Flex>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
            <Flex h={"40rem"} justifyContent={"space-around"} flexDir={desktopView ? "row" : "column"}>
                <Flex flexDir={"column"} justifyContent={"center"} alignItems={"center"}>
                  <Box p={3}>
                    <Text fontSize={"3xl"} textAlign={"start"} fontFamily="samsung_sharp_sansbold">Un confort royal</Text>
                    <Text fontSize={"xl"} textAlign={"start"} fontFamily="samsungone400">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.</Text>
                  </Box>
                </Flex>
                <Flex  alignItems={"center"} h={"100%"}>
                  <Box >
                    <Image borderRadius={10} src="/tarawa/assets/slideshow-05.jpg" alt='paysage'></Image>
                  </Box>
                </Flex>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex h={"40rem"} mx={20}>
                <Flex flexDir={"column"}>
                    <Box py={10}>
                      <Text textAlign={"start"} fontSize={"3xl"} fontWeight={"bold"}>La mer est à vous</Text>
                      <Text textAlign={"start"} fontSize={"xl"} fontFamily="samsungone400">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.</Text>
                    </Box>
                    <Box borderRadius={5} backgroundImage={"url(/tarawa/assets/slideshow-06.mp4)"} backgroundSize={"cover"} backgroundRepeat={"no-repeat"} w={"100%"} h={"40%"}>
                
                    </Box>
                </Flex>
    
              </Flex>
            </SwiperSlide>
            <SwiperSlide>
              <Flex h={"40rem"} w={"100%"} >
                <Flex h={"90%"} p={5} justifyContent={"center"}>
                      <Image borderRadius={5} src="/tarawa/assets/slideshow-07.jpg" alt='slideshow'></Image>
                </Flex>
              </Flex>
            </SwiperSlide>
          </Swiper>
        </Flex>
        <Flex w={"100%"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} bgColor={"white"}>
          <Image w={150} m={50} src="/tarawa/assets/logo_black.svg" alt="logo"></Image>
      </Flex>

      </Flex>
      

    </ChakraProvider>


  );
};

export default IndexPage;
