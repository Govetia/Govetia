//import logo from '../assets/logo.png'
import { Box, Grid, Flex } from '@chakra-ui/react';
import '../styles/Projects.css';
import { Image, Text } from "@chakra-ui/react";
import React, { useRef, useState, useEffect } from 'react';


function DeviceCard({ title, url, imacPicture, macbookPicture, iphonePicture, macbookVideo, iphoneVideo, alt }) {
  const macBookVideoRef = useRef();
  const iphoneVideoRef = useRef();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMacbookHovered, setIsMacbookHovered] = useState(false);
  const [isIphoneHovered, setIsIphoneHovered] = useState(false);

  const handleMacbookMouseEnter = () => {
    if (macBookVideoRef.current && videoLoaded) {
      macBookVideoRef.current.play();
    }
    setIsMacbookHovered(true);
  };

  const handleMacbookMouseLeave = () => {
    if (macBookVideoRef.current && videoLoaded) {
      macBookVideoRef.current.pause();
    }
    setIsMacbookHovered(false);
  };

  const handleIphoneMouseEnter = () => {
    if (iphoneVideoRef.current && videoLoaded) {
      iphoneVideoRef.current.play();
    }
    setIsIphoneHovered(true);
  }

  const handleIphoneMouseLeave = () => {
    if (iphoneVideoRef.current && videoLoaded) {
      iphoneVideoRef.current.pause();
    }
    setIsIphoneHovered(false);
  }



  useEffect(() => {
    const macbookVideo = macBookVideoRef.current;
    const handleLoadedData = () => setVideoLoaded(true);

    if (macbookVideo) {
      macbookVideo.addEventListener('loadeddata', handleLoadedData);
    }

    return () => {
      if (macbookVideo) {
        macbookVideo.removeEventListener('loadeddata', handleLoadedData);
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
                        <Image zIndex={1} src={imacPicture} alt={alt} width="100%" height="120%" objectFit="contain" px="8%" pt={"2%"} pb={"15%"} />
                        <Box zIndex={2} position="absolute"  width="100%" height="100%" backgroundImage={"/assets/device/imac.png"} backgroundSize="contain" backgroundRepeat="no-repeat" backgroundPosition="center"></Box>
                      </Flex>
                      <Flex direction='column' align='center' position="relative" width="100%" justifyContent={"center"} alignItems={"center"}
                      onMouseEnter={handleMacbookMouseEnter}
                      onMouseLeave={handleMacbookMouseLeave}>     
                        {macbookVideo ?

                          <Box position="relative" overflow="hidden" h="120%" w="100%"  px="5%" pt={"3%"} pb={"10%"}>
                            <video ref={macBookVideoRef} muted loop style={{
                                position: 'absolute',
                                width: '100%',
                                height: '120%',
                                objectFit: 'cover',
                                padding: '4% 18% 23% 8%',
                                opacity: isMacbookHovered ? 1 : 0.5,
                              }}>
                              <source src={macbookVideo} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </Box>
                          :
                          <Image zIndex={1} src={macbookPicture} alt={alt} width="100%" height="120%" objectFit="contain" px="8%" pt={"2%"} pb={"15%"} />
                        }
                        <Box zIndex={2} position="absolute"  width="100%" height="100%" backgroundImage={"/assets/device/macbook.png"} backgroundSize="contain" backgroundRepeat="no-repeat" backgroundPosition="center"></Box>
                      </Flex>
                      <Flex direction='column' align='center' position="relative" width="100%" justifyContent={"center"} alignItems={"center"}
                      onMouseEnter={handleIphoneMouseEnter}
                      onMouseLeave={handleIphoneMouseLeave}>     
                        {iphoneVideo ?

                          <Box position="relative" overflow="hidden" h="100%" w="100%">
                            <Box style={{
                              display: 'flex',
                              justifyContent: 'center',
                            }}>
                              <video ref={iphoneVideoRef} muted loop style={{
                                  position: 'absolute',
                                  width: '37%',
                                  borderRadius: '15%',
                                  height: '100%',
                                  objectFit: 'cover',
                                  opacity: isIphoneHovered ? 1 : 0.5,
                                }}>
                                <source src={iphoneVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            </Box>
                          </Box>
                          :
                          <Image zIndex={1} src={iphonePicture} alt={alt} width="100%" height="120%" objectFit="contain" px="8%" pt={"2%"} pb={"15%"} />
                        }
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
