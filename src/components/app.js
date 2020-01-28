import React from "react";
import Introduction from "./introduction";
import Frame from "./frame";
import Icon from "./icon";
import styled from "styled-components";
import ScrollBar from "./scrollbar";
import Email from "./email";
import Projects from "./project";

const AppContainer = styled.div`
  ${"" /* overflow: hidden; */}
  position: relative;
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
      <Projects />
    </AppContainer>
  );
}

export default App;
