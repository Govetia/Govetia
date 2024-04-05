//import logo from '../assets/logo.png'
import { Box, Grid, Flex } from '@chakra-ui/react';
import '../styles/Projects.css';
import { Image, Text } from "@chakra-ui/react";
import React from 'react';


function DeviceCard({ title, url, picture, alt }) {
    return (
      <Flex >
        <Box className= "gvt-projects"  >
            <a
              href= {url}
              target="_blank"
              rel="noreferrer" >
                <Flex direction={'column'} justifyContent={'center'} alignItems={"center"}>
                    <Text  fontSize={25} fontWeight="600" >{title}</Text>
                    <Flex direction='column' align='center' position="relative" width="100%" justifyContent={"center"} alignItems={"center"}>
                    <Image zIndex={1} border="1px solid #ffff" src={picture} alt={alt} width="100%" height="120%" objectFit="contain" px="8%" pt={"2%"} pb={"15%"} />
                        <Box zIndex={2} position="absolute"  width="100%" height="100%" backgroundImage={"/assets/device/imac.png"} backgroundSize="contain" backgroundRepeat="no-repeat" backgroundPosition="center">                        </Box>
                    </Flex>

                </Flex>
            </a>
        </Box>
      </Flex>
    )
  }


export default DeviceCard;
