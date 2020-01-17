import React from "react";
import IntroductionBG from "./sections/introduction_bg";
import IntroductionTxt from "./sections/introduction_txt";
import IntroductionArrow from "./sections/introduction_arrow";
import styled from "styled-components";

const Intro = styled.div`
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
    <Intro>
      <IntroductionBG />
      <IntroductionTxt />
      <IntroductionArrow />
    </Intro>
  );
}

export default Introduction;
