import React from 'react';

import { Container, MyselfImg, TitleWrapper, ImgWrapper } from './styles';

import Selfie from '../../assets/myself.png';

const Home = () => {

  function isUserAgent(): boolean {
    const userAgent = window.navigator.userAgent.split(' ');
    const typeNavigator = userAgent[userAgent.length-1]

    return 'Chrome-Lighthouse' === typeNavigator;
  }

  return (
    <div id="page-home">
      <Container>
        <ImgWrapper>
          <MyselfImg src={Selfie} alt='Tharlei Aleixo' />
        </ImgWrapper>
        <TitleWrapper>
          <h1>{isUserAgent() ? 'É page speed! :)' : 'Não é page speed :('}</h1>
          {/* <span>Web & Mobile</span> */}
        </TitleWrapper>
      </Container>
    </div>
  );
}

export default Home;
