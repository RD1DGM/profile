import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

function getWindowViewPortScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  const value = scrollTop / (scrollHeight - clientHeight);

  return {
    value
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowViewPortScroll()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowViewPortScroll());
    }

    window.addEventListener("scroll", handleResize);
    return () => window.removeEventListener("scroll", handleResize);
  }, []);

  return windowDimensions;
}

const ScrolledDiv = styled.div`
  height: ${props => props.state * 100}vh;
  width: 6px;
  z-index: 101;
  display: relative;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #e6bb00;

  @media only screen and (max-width: 740px) {
    background-color: #1d1e26;
  }
`;

function ScrollBar() {
  const { value } = useWindowDimensions();

  return <ScrolledDiv state={value} />;
}

export default ScrollBar;
