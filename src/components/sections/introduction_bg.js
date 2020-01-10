import React from "react";
import { useInView } from "react-intersection-observer";
import "../../scss/components/sections/introduction_bg.scss";
import useActions from "../../store/actions";

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
  const { getTargetClass } = useActions();
  const [ref, inView, entry] = useInView({ threshold: THRESHHOLD });
  const target = entry && entry.target.classList[1];
  const boundingClient = entry && entry.boundingClientRect.top;

  React.useEffect(() => getTargetClass(target), [target, getTargetClass]);

  return (
    <div
      ref={ref}
      className={boundingClient >= -20 ? "intro_box revert" : "intro_box fill"}
    />
  );
}

export default IntroductionBG;
