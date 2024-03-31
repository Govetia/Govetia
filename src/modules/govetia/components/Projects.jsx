//import logo from '../assets/logo.png'
import { Box, Grid, Flex } from '@chakra-ui/react';
import '../styles/Projects.css';
import { Image, Text } from "@chakra-ui/react";
import React from 'react';

const projectsDetails = [
  {
    title: "Agence événementielle Shelter Events",
    url: "https://www.shelterevents.com",
    picture: "/assets/shelter-events.png",
    alt: 'Page accueil site web Shelter Events',
  },
  {
    title: "Tfek ? L'application de gestion d'événements",
    url: "/tfek",
    picture: "/assets/tarawa.png",
    alt: 'Page accueil site web Tfek'
  },
  {
    title: "Tarawa : Hôtel de luxe",
    url: "/tarawa",
    picture: "/assets/tarawa.png",
    alt: 'Page accueil site web Tarawa'
  },
  {
    title: "Oh my food : Restaurant",
    url: "/ohMyFood",
    picture: "/assets/oh_my_food.png",
    alt: 'Page accueil site web Oh my food'
  }
]

function Card({ title, url, picture, alt }) {
  return (
    <Flex >
      <Box className= "gvt-projects"  >
          <a
            href= {url}
            target="_blank"
            rel="noreferrer" >
            <Flex direction='column' align='center'>
              <Text p='8' fontSize={25} fontWeight="600" >{title}</Text>
              <Image borderRadius="1.5em" border="1px solid #ffff"  maxWidth='85%' boxShadow="0px 0px 18px rgba(0, 0, 0, 0.5)" src={picture} alt={alt} />
            </Flex>
          </a>
      </Box>
    </Flex>
  )
}


function Projects(props) {
  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={0}>
      {projectsDetails.map((project, index) => (
        <Card 
            key={`${project.title}-${index}`}
            title={project.title}
            url={project.url}
            picture={project.picture} 
            alt={project.alt}
        />
        ))}
    </Grid>
  );
}

export default Projects;
