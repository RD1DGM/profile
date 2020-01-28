import React from "react";
import IntroductionBG from "./sections/intro_background";
import IntroductionTxt from "./sections/intro_landing_text";
import IntroductionArrow from "./sections/intro_landing_arrow";
import styled from "styled-components";
import IntroductionAbout from "./sections/intro_about_header";
import IntroductionParagraph from "./sections/intro_about_p";

export const IntroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr auto 1fr;

  @media only screen and (min-width: 600px) and (max-width: 1135px) {
    display: grid;
    grid-template-rows: 1fr auto 1fr;
  }
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
