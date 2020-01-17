import React from "react";
import styled from "styled-components";

const AppFrame = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: transparent;
  border: 3.5rem solid hsl(233, 14%, 13%);
  position: fixed;
  top: 0px;
  z-index: 5;

  @media only screen and (max-width: 740px) {
    display: none;
  }
`;

function Frame() {
  return <AppFrame />;
}

export default Frame;
