//import logo from '../assets/logo.png'
import { Box, Grid, Flex } from '@chakra-ui/react';
import '../styles/Projects.css';
import { Image, Text, Heading } from "@chakra-ui/react";
import React from 'react';
import DeviceCard from './DeviceCard';

import { useMediaQuery } from "@chakra-ui/react"


const projectsDetails = [
  {
    title: "Agence événementielle Shelter Events",
    url: "https://www.shelterevents.com",
    imacPicture: "/assets/shelter-events.png",
    macbookPicture: "/assets/shelter-events.png",
    iphonePicture: "/assets/shelter-events.png",
    macbookVideo: "/assets/videos/macbook-shelter-events.mp4",
    iphoneVideo: "/assets/videos/iphone-shelter-events.mp4",
    alt: 'Page accueil site web Shelter Events',
  },
  // {
  //   title: "Tfek ? L'application de gestion d'événements",
  //   url: "/tfek",
  //   picture: "/assets/tarawa.png",
  //   alt: 'Page accueil site web Tfek'
  // },
  // {
  //   title: "Tarawa : Hôtel de luxe",
  //   url: "/tarawa",
  //   imacPicture: "/assets/tarawa.png",
  //   macbookPicture: "/assets/tarawa.png",
  //   iphonePicture: "/assets/tarawa.png",
  //   macbookVideo: "/assets/videos/macbook-tarawa.mp4",
  //   alt: 'Page accueil site web Tarawa'
  // },
  // {
  //   title: "Oh my food : Restaurant",
  //   url: "/ohMyFood",
  //   imacPicture: "/assets/oh_my_food.png",
  //   macbookPicture: "/assets/oh_my_food.png",
  //   iphonePicture: "/assets/oh_my_food.png",
  //   alt: 'Page accueil site web Oh my food'
  // }
]


function Projects(props) {
  const [isLargerThan768] = useMediaQuery("(min-width: 900px)")

  return (
    <Grid style={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      }} templateColumns={isLargerThan768 ? 'repeat(1, 1fr)' : 'repeat(1, 1fr)'} gap={0}>
      <Heading pt={'2rem'} >Découvrez nos créations</Heading>
      {projectsDetails.map((project, index) => (
        <DeviceCard 
            key={`${project.title}-${index}`}
            title={project.title}
            url={project.url}
            imacPicture={project.imacPicture}
            macbookPicture={project.macbookPicture}
            iphonePicture={project.iphonePicture}
            macbookVideo={project.macbookVideo}
            iphoneVideo={project.iphoneVideo}
            alt={project.alt}
        />
        ))}
    </Grid>
  );
}

export default Projects;
