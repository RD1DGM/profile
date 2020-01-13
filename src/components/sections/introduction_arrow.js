import React from "react";
import { ContextCreator } from "../../store";
import "../../scss/components/sections/introduction_arrow.scss";

function IntroductionArrow() {
  const { state } = React.useContext(ContextCreator);
  return (
    <div
      className={
        state.targetClass === (undefined || "revert")
          ? "intro-arrow fadeIn"
          : "intro-arrow fadeOut"
      }
    >
      <div className="scroll-down">Scroll</div>
      <div className="arrow-down" />
    </div>
  );
}

export default IntroductionArrow;
