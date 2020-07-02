import React from 'react';

import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

import { Container } from './styles';
import { Header, LogoIcon, LogoName, Menu, MenuItem, LogoWrapper } from './styles';

import { Main, SocialWrapper, Content } from './styles';

const Home = () => {
  return (
    <div id="page-home">
      <Container>

        <Header>
          <LogoWrapper>
            <LogoIcon />
            <LogoName>
              Tharlei Aleixo
          </LogoName>
          </LogoWrapper>
          <Menu>
            <MenuItem>Sobre</MenuItem>
            <MenuItem>Portfolio</MenuItem>
            <MenuItem>Contato</MenuItem>
          </Menu>
        </Header>

        <Main>
          <SocialWrapper>
            <FaFacebook />
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
          </SocialWrapper>
          <Content>

          </Content>
        </Main>
      </Container>
    </div>
  );
}

export default Home;
