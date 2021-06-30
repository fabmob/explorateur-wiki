import InstallButton from "components/base/InstallButton";
import ThemeToggle from "components/base/ThemeToggle";
import Background from "components/misc/Background";
import Header from "components/misc/Header";
import ContactWrapper from "components/wrappers/ContactWrapper";
import EmbedWrapper from "components/wrappers/EmbedWrapper";
import FooterWrapper from "components/wrappers/FooterWrapper";
import ShareWrapper from "components/wrappers/ShareWrapper";
import useWindowSize from "hooks/useWindowSize";
import React, { Suspense } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${(props) => props.theme.mq.medium} {
    flex-direction: column-reverse;
  }
`;
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const FullScreen = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 41rem;
  min-height: ${(props) => props.windowHeight}px;
  margin: 0 auto 5rem;
  padding: 0 0.5rem;

  ${(props) => props.theme.mq.small} {
    width: 100%;
  }
`;
export default function Web(props) {
  const { height } = useWindowSize();

  return (
    <Wrapper>
      <Suspense fallback={""}>
        <Background />
      </Suspense>
      <ThemeToggle />
      <Content>
        <FullScreen windowHeight={height}>
          <Header />
          {props.children}
        </FullScreen>
        <FooterWrapper />
      </Content>
      <EmbedWrapper />
      <ShareWrapper />
      <ContactWrapper />
      <InstallButton />
    </Wrapper>
  );
}
