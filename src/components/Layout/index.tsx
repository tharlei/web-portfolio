import React from "react";
import ReactGA from "react-ga";

import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaConnectdevelop,
} from "react-icons/fa";
import { Container, Background } from "./styles";
import { Header, LogoWrapper } from "./styles";
import { Main, SocialWrapper, Content } from "./styles";

interface Props {
  children: JSX.Element;
}

const Layout = (props: Props) => {
  function handleSocialMedia(url: string, type: string) {
    ReactGA.event({
      category: "Social Media",
      action: `Navigated to ${type}`,
    });

    window.open(url);
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
            {/* <Menu /> */}
          </Header>

          <Main>
            <SocialWrapper>
              <span
                onClick={() =>
                  handleSocialMedia(
                    "mailto:tharlei_aleixo@hotmail.com",
                    "Email"
                  )
                }
              >
                <FaEnvelope />
              </span>
              <span
                onClick={() =>
                  handleSocialMedia(
                    "https://linkedin.com/in/tharleialeixo",
                    "LinkedIn"
                  )
                }
              >
                <FaLinkedin />
              </span>
              <span
                onClick={() =>
                  handleSocialMedia("https://github.com/Tharlei", "Github")
                }
              >
                <FaGithub />
              </span>
            </SocialWrapper>
            <Content>{props.children}</Content>
          </Main>
        </Container>
      </Background>
    </div>
  );
};

export default Layout;
