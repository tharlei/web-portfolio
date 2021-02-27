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
          <h1>{window.navigator.userAgent}</h1>
          {/* <span>Web & Mobile</span> */}
        </TitleWrapper>
      </Container>
    </div>
  );
}

export default Home;
