import React from "react";
import { useInView } from "react-intersection-observer";
import "../../scss/components/sections/introduction_txt.scss";
import { ContextCreator } from "../../store";

function IntroductionTxt() {
  const { state } = React.useContext(ContextCreator);

  //   console.log(state, dispatch);

  return (
    <div className="intro_txt">
      <p
        className={
          state.targetClass === (undefined || "revert") ? "slideIn" : "slideOut"
        }
      >
        Hello, I'm <span>Rafael Mariscal</span>.
      </p>
      <p
        className={
          state.targetClass === (undefined || "revert")
            ? "slideLeft"
            : "slideOut"
        }
      >
        An Interactive <span>Front-end Developer</span>
      </p>
    </div>
  );
}

export default IntroductionTxt;
