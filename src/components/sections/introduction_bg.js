import React from "react";
import { useInView } from "react-intersection-observer";
import "../../scss/components/sections/introduction_bg.scss";
import { ContextCreator } from "../../store";

const THRESHHOLD = [
  0.9,
  0.91,
  0.92,
  0.93,
  0.94,
  0.95,
  0.96,
  0.97,
  0.98,
  0.99,
  1
];

function IntroductionBG() {
  const { state, dispatch } = React.useContext(ContextCreator);
  const [ref, inView, entry] = useInView({ threshold: THRESHHOLD });

  const target = entry && entry.target.classList[1];

  React.useEffect(
    () =>
      dispatch({
        type: "SET_TARGET_CLASS",
        targetClass: target
      }),
    [target, dispatch]
  );

  // console.log(state.targetClass);

  //   console.log("target:", entry && entry);
  //   console.log("target:", entry && entry.target);
  //   console.log("ratio:", entry && entry.intersectionRatio);
  // console.log("ratio:", entry && entry.boundingClientRect.top);

  return (
    <div
      ref={ref}
      className={
        entry && entry.boundingClientRect.top >= -20
          ? "intro_box revert"
          : "intro_box fill"
      }
    />
  );
}

export default IntroductionBG;
