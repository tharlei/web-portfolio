import React, { useState } from 'react';

import {
  Container, TechnologiesWrapper, Technologies, Technology
} from './styles';

import adonisjs from '../../assets/adonisjs.jpg';
import nodejs from '../../assets/nodejs.png';
import javascript from '../../assets/javascript.png';
import reactjs from '../../assets/reactjs.jpg';
import typescript from '../../assets/typescript.png';
import postgres from '../../assets/postgres.jpg';
import laravel from '../../assets/laravel.jpg';
import vuejs from '../../assets/vuejs.jpg';
import docker from '../../assets/docker.jpg';

interface Technology {
  src: string,
  alt: string
}

const About = () => {

  const [technologies] = useState<Technology[]>([
    {
      src: adonisjs,
      alt: 'AdonisJS'
    },
    {
      src: nodejs,
      alt: 'NodeJS'
    },
    {
      src: javascript,
      alt: 'Javascript'
    },
    {
      src: typescript,
      alt: 'Typescript'
    },
    {
      src: reactjs,
      alt: 'ReactJS'
    },
    {
      src: vuejs,
      alt: 'VueJS'
    },
    {
      src: laravel,
      alt: 'Laravel'
    },
    {
      src: postgres,
      alt: 'PostgreSQL'
    },
    {
      src: docker,
      alt: 'Docker'
    }
  ]);

  return (
    <div id="page-about">
      <Container>
        <TechnologiesWrapper>
          <h1>Tecnologias</h1>
          <Technologies>
            {
              technologies.map(technology => (
                <Technology key={technology.alt}>
                  <img src={technology.src} alt={technology.alt} />
                  <span>{technology.alt}</span>
                </Technology>
              ))
            }
          </Technologies>
        </TechnologiesWrapper>
      </Container>
    </div>
  );
}

export default About;
