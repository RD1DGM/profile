import React from "react";
import styled, { keyframes, css } from "styled-components";
import { AboutText } from "./intro_about_header";

const fadeIn = keyframes`
from {
    opcaity: 0;
}

to {
    opacity: 1;
}
`;

const Header = styled(AboutText)`
  grid-column: 1/2;
  grid-row: 1/4;
  justify-self: flex-start;
  align-self: center;
  font-size: calc(4.95rem + 5.5vw);
  transform: rotate(-90deg) translate(-0.5vw, -6vw);
  display: block;
  opacity: 0;
  animation: ${fadeIn} 650ms ease-out 100ms forwards;

  &::after {
    content: "";
    background: linear-gradient(to right, #fff 40%, #e6bb00 40%);
    width: 100%;
    height: 1rem;
    margin-top: 0.5rem;
    display: block;
  }

  span {
    color: #e6bb00;
  }
`;

function ProjectHeader() {
  return (
    <Header>
      pro<span>jects</span>
    </Header>
  );
}

export default ProjectHeader;
