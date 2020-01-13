import React from "react";
import "../../scss/components/sections/introduction_txt.scss";
import { ContextCreator } from "../../store";

function IntroductionTxt() {
  const { state } = React.useContext(ContextCreator);

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
        Interactive{" "}
        <span
          className={
            state.targetClass === (undefined || "revert") ? "colorChange" : null
          }
        >
          Front-end Developer
        </span>
      </p>
      <div
        className={
          state.targetClass === (undefined || "revert")
            ? "underline fullWidth"
            : "underline zeroWidth"
        }
      ></div>
    </div>
  );
}

export default IntroductionTxt;
