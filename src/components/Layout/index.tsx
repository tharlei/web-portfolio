import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';

import Menu from '../../components/Menu'
import { FaLinkedin, FaGithub, FaArrowRight, FaEnvelope, FaConnectdevelop } from 'react-icons/fa';
import { Container, Background } from './styles';
import { Header, LogoWrapper } from './styles';
import { Main, SocialWrapper, Content } from './styles';
import { Footer, Marker, NextWrapper } from './styles';

interface Props {
  children: JSX.Element
}

interface ItemMenu {
  id: number;
  title: string;
  url: string;
  redirect: string;
}

const Layout = (props: Props) => {

  const [redirect, setRedirect] = useState<string>('/about')
  const [pageId, setPageId] = useState<number>(1)

  useEffect(() => {
    const path = window.location.pathname;
    const search = window.location.search;
    ReactGA.pageview(`${path}${search}`);
    setActions(path);
  }, []);

  function setActions(path: string) {
    const items = [
      {
        id: 2,
        title: 'Sobre',
        url: '/about',
        redirect: '/contact'
      },
      {
        id: 3,
        title: 'Contato',
        url: '/contact',
        redirect: '/'
      },
    ] as ItemMenu[];

    const itemIndex = items.findIndex(item => item.url === path);
    if (itemIndex >= 0) {
      setPageId(items[itemIndex].id);
      setRedirect(items[itemIndex].redirect);
    }
  }

  function handleSocialMedia(url: string, type: string) {
    ReactGA.event({
      category: 'Social Media',
      action: `Navigated to ${type}`
    });

    window.open(url)
  }

  return (
    <div id="component-layout">
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
              <span onClick={() => handleSocialMedia("mailto:tharlei_aleixo@hotmail.com", 'Email')}>
                <FaEnvelope />
              </span>
              <span onClick={() => handleSocialMedia("https://linkedin.com/in/tharleialeixo", 'LinkedIn')}>
                <FaLinkedin />
              </span>
              <span onClick={() => handleSocialMedia("https://github.com/Tharlei", 'Github')}>
                <FaGithub />
              </span>
            </SocialWrapper>
            <Content>
              {props.children}
            </Content>
          </Main>
          <Footer>
            <Marker>0{pageId}</Marker>
            <NextWrapper to={redirect}>
              <span>Próxima página</span>
              <FaArrowRight />
            </NextWrapper>
          </Footer>
        </Container>
      </Background>
    </div>
  );
}

export default Layout;
