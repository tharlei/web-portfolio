import React from 'react';

import { FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaArrowRight } from 'react-icons/fa';

import { Container } from './styles';
import { Header, LogoIcon, LogoName, Menu, MenuItem, LogoWrapper } from './styles';

import { Main, SocialWrapper, Content, MyselfImg, TitleWrapper, ImgWrapper } from './styles';

import { Footer, Marker, NextWrapper, Next } from './styles';

import Myself from '../../assets/myself.png';

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
            <MenuItem>Portfólio</MenuItem>
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
            <ImgWrapper>
              <MyselfImg src={Myself} alt='Myself' />
            </ImgWrapper>
            <TitleWrapper>
              <h1>Desenvolvedor</h1>
              <span>Web & Mobile</span>
            </TitleWrapper>
          </Content>
        </Main>
        <Footer>
          <Marker>01</Marker>
          <NextWrapper>
            <Next>
              Próxima página
            </Next>
            <FaArrowRight />
          </NextWrapper>
        </Footer>
      </Container>
    </div>
  );
}

export default Home;
