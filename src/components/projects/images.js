import React from "react";
import styled, { keyframes, css } from "styled-components";
import { useInView } from "react-intersection-observer";
import { Images } from "../../assets/project-images";
import { FirstImageInfo } from "./info";

const { Iris, Microtreaty, SustainEx } = Images;

const fadeIn = keyframes`
from {
    opcaity: 0;
}

to {
    opacity: 1;
}
`;

const fadeOut = keyframes`
from {
    opcaity: 1;
}

to {
    opacity: 0;
}
`;

const ImageContainer = styled.div`
  grid-column: 1/4;
  grid-row: 1/4;
  align-self: center;
  justify-self: flex-end;
  width: 60vw;
  height: 100vh;
  display: grid;
  grid-template-columns: minmax(25rem, 1fr) minmax(10rem, 1fr) minmax(
      2.5rem,
      0.15fr
    );
  grid-template-rows: 0.3fr repeat(3, 1fr);
  gap: 1rem 0;

  @media only screen and (max-width: 740px) {
    grid-row: 2/4;
    width: 100vw;
    height: 100%;
    grid-template-columns: 1fr 1fr;
  }
`;

const SubHeader = styled.div`
  grid-column: 1/3;
  grid-row: 1/2;
  justify-self: flex-start;
  align-self: center;
  ${"" /* color: #fff; */}
  color: #e6bb00;
  font-size: calc(1rem + 1vw);
  font-weight: 900;
  opacity: 0;
  animation: ${props =>
    props.state > 0.43
      ? css`
          ${fadeIn} 350ms ease-out 300ms forwards
        `
      : css`
          ${fadeOut} 350ms ease-out forwards
        `};

  @media only screen and (max-width: 740px) {
    justify-self: center;
    align-self: center;
  }
`;

const FirstImage = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
  background: url(${SustainEx});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 15% 0%;
  width: 99%;
  height: 99%;
  opacity: 0;
  filter: grayscale(80%);
  transition: filter 300ms ease-out, width 150ms ease-out, height 150ms ease-out;
  animation: ${props =>
    props.state > 0.475
      ? css`
          ${fadeIn} 650ms ease-out 500ms forwards
        `
      : css`
          ${fadeOut} 650ms ease-out 100ms forwards
        `};

  &:hover {
    width: 100%;
    height: 100%;
    filter: none;
  }

  @media only screen and (max-width: 740px) {
    grid-column: 1/3;
    background-size: contain;
  }
`;

// const FirstImageInfo = styled.div`
//   grid-column: 2/3;
//   grid-row: 2/3;
//   display: grid;
//   grid-template-rows: 1fr auto repeat(2, 1fr);

//   p {
//     justify-self: flex-end;
//     text-align: right;
//     font-weight: 600;
//     word-wrap: break-word;
//     cursor: default;
//     z-index: 105;
//   }

//   p:nth-child(1) {
//     grid-row: 1/2;
//     align-self: center;
//     font-size: calc(0.25rem + 1.25vw);
//     color: #fff;
//   }

//   p:nth-child(2) {
//     grid-row: 2/3;
//     padding: 1rem;
//     line-height: 1.3;
//     font-size: calc(0.8rem + 0.3vw);
//     width: 110%;
//     background-color: #e6bb00;
//   }

//   p:nth-child(3) {
//     grid-row: 3/4;
//     align-self: center;
//     font-size: calc(0.7rem + 0.3vw);
//     word-spacing: 1rem;
//     font-weight: 500;
//     color: #fff;
//   }

//   p:nth-child(4) {
//     grid-row: 4/5;
//     align-self: flex-start;
//     padding: 0.5rem 0.6rem 0.5rem 0.8rem;
//     border: 3px solid #e6bb00;
//     border-radius: 6px;
//     color: #e6bb00;
//     font-size: calc(0.7rem + 0.3vw);
//     font-weight: 700;
//     cursor: pointer;
//     transition: background-color 350ms ease-out, color 350ms ease-out;

//     &:hover {
//       background-color: #e6bb00;
//       color: #1d1e26;
//     }
//   }
// `;

const SecondImage = styled.div`
  grid-column: 1/2;
  grid-row: 3/4;
  background: url(${Microtreaty});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 30% 0%;
  width: 99%;
  height: 99%;
  opacity: 0;
  filter: grayscale(80%);
  transition: filter 300ms ease-out, width 150ms ease-out, height 150ms ease-out;
  animation: ${props =>
    props.state > 0.6
      ? css`
          ${fadeIn} 650ms ease-out 700ms forwards
        `
      : css`
          ${fadeOut} 650ms ease-out 100ms forwards
        `};

  &:hover {
    width: 100%;
    height: 100%;
    filter: none;
  }

  @media only screen and (max-width: 740px) {
    grid-column: 1/3;
    background-size: contain;
  }
`;

const ThirdImage = styled.div`
  grid-column: 1/2;
  grid-row: 4/5;
  background: url(${Iris});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 35% 0%;
  width: 99%;
  height: 99%;
  opacity: 0;
  filter: grayscale(80%);
  transition: filter 300ms ease-out, width 150ms ease-out, height 150ms ease-out;
  animation: ${props =>
    props.state > 0.7
      ? css`
          ${fadeIn} 650ms ease-out 900ms forwards
        `
      : css`
          ${fadeOut} 650ms ease-out 100ms forwards
        `};

  &:hover {
    width: 100%;
    height: 100%;
    filter: none;
  }

  @media only screen and (max-width: 740px) {
    grid-column: 1/3;
    background-size: contain;
  }
`;

const Threshold = [0.43, 0.475, 0.6, 0.7];

function ProjectImages() {
  const [ref, , entry] = useInView({
    threshold: Threshold
  });

  return (
    <>
      <ImageContainer ref={ref}>
        <SubHeader state={entry && entry.intersectionRatio}>
          Recent Projects:
        </SubHeader>
        <FirstImage state={entry && entry.intersectionRatio}></FirstImage>
        <FirstImageInfo>
          <p>Sustainability.Exchange</p>
          <p>
            We aim to create a prediction market platform for Environmental,
            Social & Governance (ESG) ratings, using cutting edge blockchain
            technology.{" "}
          </p>
          <p>React.js Redux Node.js Express SCSS PostgreSQL Solidity</p>
          <p
            onClick={() =>
              window.open("https://dev.sustainability.exchange/", "_blank")
            }
          >
            Website <b>➔</b>
          </p>
        </FirstImageInfo>
        <SecondImage state={entry && entry.intersectionRatio}></SecondImage>
        <ThirdImage state={entry && entry.intersectionRatio}></ThirdImage>
      </ImageContainer>
    </>
  );
}

export default ProjectImages;
