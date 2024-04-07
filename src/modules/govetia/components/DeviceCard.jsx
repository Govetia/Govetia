//import logo from '../assets/logo.png'
import { Box, Grid, Flex } from '@chakra-ui/react';
import '../styles/Projects.css';
import { Image, Text } from "@chakra-ui/react";
import React, { useRef, useState, useEffect } from 'react';


function DeviceCard({ title, url, picture, macbookVideo, alt }) {
  const videoRef = useRef();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    console.log('mouse enter');
    if (videoRef.current && videoLoaded) {
      videoRef.current.play();
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (videoRef.current && videoLoaded) {
      videoRef.current.pause();
    }
    setIsHovered(false);
  };
  useEffect(() => {
    const video = videoRef.current;
    const handleLoadedData = () => setVideoLoaded(true);

    if (video) {
      video.addEventListener('loadeddata', handleLoadedData);
    }

    return () => {
      if (video) {
        video.removeEventListener('loadeddata', handleLoadedData);
      }
    };
  }, []);
    return (
      <Flex >
        <Box className= "gvt-projects"  >
            <a
              href= {url}
              target="_blank"
              rel="noreferrer" >
                <Flex direction={'column'} justifyContent={'center'} alignItems={"center"}>
                    <Text  fontSize={25} fontWeight="600" >{title}</Text>
                    <Flex>
                      <Flex direction='column' align='center' position="relative" width="100%" justifyContent={"center"} alignItems={"center"}>
                        <Image zIndex={1} src={picture} alt={alt} width="100%" height="120%" objectFit="contain" px="8%" pt={"2%"} pb={"15%"} />
                        <Box zIndex={2} position="absolute"  width="100%" height="100%" backgroundImage={"/assets/device/imac.png"} backgroundSize="contain" backgroundRepeat="no-repeat" backgroundPosition="center"></Box>
                      </Flex>
                      <Flex direction='column' align='center' position="relative" width="100%" justifyContent={"center"} alignItems={"center"}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>     
                        {macbookVideo ?

                          <Box position="relative" overflow="hidden" h="120%" w="100%"  px="5%" pt={"3%"} pb={"10%"}>
                            <video ref={videoRef} muted loop style={{
                                position: 'absolute',
                                width: '100%',
                                height: '120%',
                                objectFit: 'cover',
                                padding: '4% 18% 23% 8%',
                                opacity: isHovered ? 1 : 0.3,
                              }}>
                              <source src={macbookVideo} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </Box>
                          :
                          <Image zIndex={1} src={picture} alt={alt} width="100%" height="120%" objectFit="contain" px="8%" pt={"2%"} pb={"15%"} />
                        }
                        <Box zIndex={2} position="absolute"  width="100%" height="100%" backgroundImage={"/assets/device/macbook.png"} backgroundSize="contain" backgroundRepeat="no-repeat" backgroundPosition="center"></Box>
                      </Flex>
                      <Flex direction='column' align='center' position="relative" width="100%" justifyContent={"center"} alignItems={"center"}>
                        <Image zIndex={1} src={picture} alt={alt} width="100%" height="120%" objectFit="contain" px="8%" pt={"2%"} pb={"15%"} />
                        <Box zIndex={2} position="absolute"  width="100%" height="100%" backgroundImage={"/assets/device/iphone.png"} backgroundSize="contain" backgroundRepeat="no-repeat" backgroundPosition="center"></Box>
                      </Flex>
           

                    </Flex>

                </Flex>
            </a>
        </Box>
      </Flex>
    )
  }


export default DeviceCard;
