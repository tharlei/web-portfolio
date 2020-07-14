import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '../../components/Menu'
import { FaLinkedin, FaGithub, FaArrowRight, FaEnvelope, FaConnectdevelop } from 'react-icons/fa';
import { Container, Background } from './styles';
import { Header, LogoWrapper } from './styles';
import { Main, SocialWrapper, Content, MyselfImg, TitleWrapper, ImgWrapper } from './styles';
import { Footer, Marker, NextWrapper } from './styles';

import Selfie from '../../assets/myself.png';

const Home = () => {
  return (
    <Background>
      <Container>
        <Header>
          <LogoWrapper to="/">
            <FaConnectdevelop />
            <span>Tharlei Aleixo</span>
          </LogoWrapper>
          <Menu />
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
              <MyselfImg src={Selfie} alt='Myself' />
            </ImgWrapper>
            <TitleWrapper>
              <h1>Desenvolvedor</h1>
              <span>Web & Mobile</span>
            </TitleWrapper>
          </Content>
        </Main>
        <Footer>
          <Marker>01</Marker>
          <NextWrapper to="/">
            <span>Próxima página</span>
            <FaArrowRight />
          </NextWrapper>
        </Footer>
      </Container>
    </Background>
  );
}

export default Home;
