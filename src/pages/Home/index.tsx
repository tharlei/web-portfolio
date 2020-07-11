import React from 'react';

import { FaLinkedin, FaGithub, FaArrowRight, FaEnvelope } from 'react-icons/fa';

import { Container } from './styles';
import { Header, LogoIcon, LogoName, Menu, MenuItem, LogoWrapper } from './styles';

import { Main, SocialWrapper, Content, MyselfImg, TitleWrapper, ImgWrapper } from './styles';

import { Footer, Marker, NextWrapper, Next } from './styles';

import Myself from '../../assets/myself.png';
import bg from '../../assets/bg.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id="page-home" style={{ background: `url(${bg}) ` }}>
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
            <Link target="_blank" to={{ pathname: "mailto:tharlei_aleixo@hotmail.com" }}>
              <FaEnvelope />
            </Link>
            <Link target="_blank" to={{ pathname: 'https://linkedin.com/in/tharleialeixo' }}>
              <FaLinkedin />
            </Link>
            <Link target="_blank" to={{ pathname: 'https://github.com/Tharlei' }}>
              <FaGithub />
            </Link>
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
