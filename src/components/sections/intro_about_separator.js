import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { ContextCreator } from "../../store";

const LineSeparator = styled.div`
  grid-row: 1/4;
  grid-column: 2/3;
  height: 80%;
  width: 0.2rem;
  align-self: center;
  justify-self: flex-start;
  transform: translate(-7vw,6.5rem);
  display:   display: ${props => (props.state === "fill" ? "block" : "none")};
  position: relative;
  top: 0px;
  left: 0px;
  background-color: #fff;
  z-index: 20;
`;

function IntroSeparator() {
  const { state } = useContext(ContextCreator);

  return <LineSeparator state={state.targetClass}></LineSeparator>;
}

export default IntroSeparator;
