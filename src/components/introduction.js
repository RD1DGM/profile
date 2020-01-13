import React from "react";
import "../scss/components/introduction.scss";
import IntroductionBG from "./sections/introduction_bg";
import IntroductionTxt from "./sections/introduction_txt";
import IntroductionArrow from "./sections/introduction_arrow";

function Introduction() {
  return (
    <div className="intro_body">
      <IntroductionBG />
      <IntroductionTxt />
      <IntroductionArrow />
    </div>
  );
}

export default Introduction;
