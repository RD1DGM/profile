import React from "react";
import Introduction from "./introduction";
import Frame from "./frame";
import styled from "styled-components";

const AppContainer = styled.div`
  height: 500vh;
  overflow-x: hidden;
  background-color: hsl(233, 14%, 13%);
`;

function App() {
  return (
    <AppContainer>
      <Frame />
      <Introduction />
    </AppContainer>
  );
}

export default App;
