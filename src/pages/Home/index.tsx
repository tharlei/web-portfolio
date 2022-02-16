import React from 'react';

import { Container, MyselfImg, TitleWrapper, ImgWrapper } from './styles';

import Selfie from '../../assets/myself.png';

const Home = () => {

  return (
    <div id="page-home">
      <Container>
        <ImgWrapper>
          <MyselfImg src={Selfie} alt='Tharlei Aleixo' />
        </ImgWrapper>
        <TitleWrapper>
          <h1>Desenvolvedor</h1>
          <span>Full Stack Pleno</span>
        </TitleWrapper>
      </Container>
    </div>
  );
}

export default Home;
