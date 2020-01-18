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
  width: 9px;
  z-index: 10;
  display: relative;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #1d1e26;
  border-left: 5px solid #e6bb00;
`;

function ScrollBar() {
  const { value } = useWindowDimensions();

  return <ScrolledDiv state={value} />;
}

export default ScrollBar;
