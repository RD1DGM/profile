import React from "react";
import styled from "styled-components";
import ProjectHeader from "../components/sections/project_header";
import { IntroContainer } from "./introduction";
import { useInView } from "react-intersection-observer";

const ProjectContainer = styled(IntroContainer)`
  height: 100vh;
  ${"" /* opacity: 1; */}
  background-color: hsl(233, 14%, 13%);
`;

function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.51
  });

  return (
    <ProjectContainer state={inView} ref={ref}>
      {inView && <ProjectHeader />}
    </ProjectContainer>
  );
}

export default Projects;
