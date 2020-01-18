import React from "react";
import Introduction from "./introduction";
import Frame from "./frame";
import Icon from "./icon";
import styled from "styled-components";
import ScrollBar from "./scrollbar";
import Email from "./email";

const AppContainer = styled.div`
  height: 200vh;
  overflow: hidden;
  background-color: hsl(233, 14%, 13%);
`;

function App() {
  return (
    <AppContainer>
      <Frame />
      <Introduction />
      <Icon />
      <ScrollBar />
      <Email />
    </AppContainer>
  );
}

export default App;
