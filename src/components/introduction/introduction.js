import React from "react";
import IntroductionBG from "./background";
import IntroductionTxt from "./landing-name";
import IntroductionArrow from "./arrow";
import IntroductionAbout from "./header";
import IntroductionParagraph from "./info";
import styled from "styled-components";

export const IntroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr auto 1fr;

  ${"" /* @media only screen and (min-width: 600px) and (max-width: 1135px) {
    display: grid;
    grid-template-rows: 1fr auto 1fr;
  } */}
`;

function Introduction() {
  return (
    <IntroContainer>
      <IntroductionBG />
      <IntroductionTxt />
      <IntroductionArrow />
      <IntroductionAbout />
      <IntroductionParagraph />
    </IntroContainer>
  );
}

export default Introduction;
