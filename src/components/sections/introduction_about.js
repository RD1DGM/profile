import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { ContextCreator } from "../../store";
import { motion } from "framer-motion";

const fadeIn = keyframes`
from {
    opcaity: 0,
}

to {
    opacity: 1
}
`;

const AboutText = styled(motion.div)`
  grid-column: 1/2;
  grid-row: 1/4;
  justify-self: flex-end;
  align-self: center;
  font-size: calc(3.25rem + 5.5vw);
  font-weight: 900;
  letter-spacing: -3px;
  line-height: 0.9;
  text-transform: uppercase;
  text-align: right;
  color: #fff;
  display: ${props => (props.state === "fill" ? "block" : "none")};
  transform: rotate(-90deg) translate(-5vw, 3vw);
  animation: ${fadeIn} 500ms ease-out 850ms forwards;
  opacity: 0;
  z-index: 20;

  @media screen and (max-width: 740px) {
    font-size: calc(2.25rem + 5.5vw);
    transform: rotate(-90deg) translate(-5vw, -13vw);
  }
`;

function IntroductionAbout() {
  const { state } = useContext(ContextCreator);

  return <AboutText state={state.targetClass}>about</AboutText>;
}

export default IntroductionAbout;
