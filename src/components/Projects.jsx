//import logo from '../assets/logo.png'
import '../styles/Projects.css';
import React from 'react';

const projectsDetails = [
  {
    title: "Agence événementielle Shelter Events",
    url: "https://www.shelterevents.com",
  },
  {
    title: "Tfek ? L'application de gestion d'événements",
    url: "localhost:3000/tfek",
  },
]

function Card({ title, url }) {
  return (
      <div className= "gvt-projects">
          <a
            href= {url}
            target="_blank"
            rel="noreferrer" >
            {title}
          </a>
      </div>
  )
}


function Projects(props) {
  return (
    <div>
      {projectsDetails.map((project, index) => (
        <Card 
            key={`${project.title}-${index}`}
            title={project.title}
            url={project.url}
            //picture={project.picture} 
        />
        ))}
    </div>
  );
}

export default Projects;