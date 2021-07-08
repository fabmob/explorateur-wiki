import React from "react";
import styled from "styled-components";

import ademe from "./footer/ademe.jpg";
import repufrancaise from "./footer/repufrancaise.jpg";

import MagicLink from "components/base/MagicLink";
import ThemeToggle from "components/base/ThemeToggle";
import ContactPrompt from "components/base/ContactPrompt";
import Button from "components/base/Button";
import Logo from "components/base/Logo";
import MobileButtons from "./footer/MobileButtons";

const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) =>
    props.theme.colors[props.background || "second"]};
  transition: all 600ms;
`;
const Content = styled.div`
  max-width: ${(props) => props.width || "37rem"};
  margin: 0 auto;
  padding: 2rem 1rem 1rem;
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;

  h2,
  h3 {
    font-size: 1.75rem;
  }
`;
const CenterSection = styled(Section)`
  align-items: center;
`;
const LogosWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Logos = styled(MagicLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-decoration: none;
  background-color: white;
`;
const Institution = styled.img`
  display: block;
  height: 5.625em;
`;
const StyledButton = styled(Button)`
  align-self: center;
`;
export default function Footer(props) {
  return (
    <Wrapper background={props.background} id="about">
      <Content>
        <MobileButtons />
        <CenterSection>
          <ThemeToggle mobile />
        </CenterSection>
        <Section>{props.children}</Section>
        <Section>
          <ContactPrompt />
        </Section>
        <Section>
          <h2>Qui sommes-nous ?</h2>
          <p>
            <MagicLink to="https://lafabriquedesmobilites.fr">
              <strong>La fabrique des mobilités</strong>
            </MagicLink>{" "}
            est une <strong>association</strong> qui croise la mobilité durable
            et l'open source.
          </p>
        </Section>
      </Content>
      <LogosWrapper>
        <Logos to="https://datagir.ademe.fr/">
          <img
            src="https://lafabriquedesmobilites.fr/images/fabmob_cmjn1.svg"
            style={{ width: "10rem" }}
          />
        </Logos>
      </LogosWrapper>
    </Wrapper>
  );
}
