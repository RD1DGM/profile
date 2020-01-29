import React from "react";
import styled from "styled-components";
import ProjectHeader from "./header";
// import { useInView } from "react-intersection-observer";
import ProjectInfo from "./images";

const ProjectContainer = styled.div`
  height: 120vh;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: repeat(3, 1fr);
  background-color: hsl(233, 14%, 13%);
`;

function Projects() {
  return (
    <ProjectContainer id="Project-Container">
      <>
        {" "}
        <ProjectHeader /> <ProjectInfo />{" "}
      </>
    </ProjectContainer>
  );
}

export default Projects;
