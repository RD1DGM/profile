import React from "react";
import styled, { keyframes, css } from "styled-components";

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

const ImageInfo = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  margin-top: -1rem;
  display: grid;
  grid-template-rows: 1fr auto repeat(2, 1fr);
  opacity: 0;
  animation: ${props =>
    props.state > 0.475
      ? css`
          ${fadeIn} 650ms ease-out 600ms forwards
        `
      : css`
          ${fadeOut} 650ms ease-out 100ms forwards
        `};

  p {
    justify-self: flex-end;
    text-align: right;
    font-weight: 600;
    word-wrap: break-word;
    cursor: default;
    z-index: 98;
  }

  p:nth-child(1) {
    grid-row: 1/2;
    align-self: center;
    font-size: calc(0.25rem + 1.25vw);
    color: #fff;

    span {
      font-size: calc(0.7rem + 0.3vw);
      color: #00e658;
    }
  }

  p:nth-child(2) {
    grid-row: 2/3;
    padding: 1rem;
    line-height: 1.3;
    font-size: calc(0.8rem + 0.3vw);
    width: 110%;
    background-color: #e6bb00;
  }

  p:nth-child(3) {
    grid-row: 3/4;
    align-self: center;
    font-size: calc(0.7rem + 0.3vw);
    word-spacing: 1rem;
    font-weight: 500;
    color: #fff;
  }

  p:nth-child(4) {
    grid-row: 4/5;
    align-self: flex-start;
    padding: 0.5rem 0.6rem 0.5rem 0.8rem;
    border: 3px solid #e6bb00;
    border-radius: 6px;
    color: #e6bb00;
    font-size: calc(0.7rem + 0.3vw);
    font-weight: 700;
    cursor: pointer;
    transition: background-color 350ms ease-out, color 350ms ease-out;

    &:hover {
      background-color: #e6bb00;
      color: #1d1e26;
    }
  }
`;

const ImageInfo2 = styled(ImageInfo)`
  grid-row: 3/4;
  display: grid;
  animation: ${props =>
    props.state > 0.6
      ? css`
          ${fadeIn} 650ms ease-out 800ms forwards
        `
      : css`
          ${fadeOut} 650ms ease-out 100ms forwards
        `};

  p:nth-child(1) {
    span {
      font-size: calc(0.7rem + 0.3vw);
      color: #00d7e6;
    }
  }

  p:nth-child(4) {
    padding: 0px;
    border: none;
    border-radius: 0px;
    color: transparent;
    display: grid;
    grid-template-column: 1fr 1fr;
    gap: 0px 1rem;
    transform: translateY(0.75rem);

    &:hover {
      background-color: transparent;
      color: transparent;
    }

    span {
      padding: 0.5rem 0.6rem 0.5rem 0.8rem;
      border: 3px solid #e6bb00;
      border-radius: 6px;
      color: #e6bb00;
      font-size: calc(0.7rem + 0.3vw);
      font-weight: 700;
      transition: background-color 350ms ease-out, color 350ms ease-out;

      &:hover {
        background-color: #e6bb00;
        color: #1d1e26;
      }

      &:nth-child(1) {
        grid-column: 1/2;
      }

      &:nth-child(2) {
        grid-column: 2/3;
      }
    }
  }
`;

export const FirstImageInfo = ({ state }) => {
  return (
    <ImageInfo state={state}>
      <p>
        Sustainability.Exchange <span>(Software Development)</span>
      </p>
      <p>
        A Prediction Market based <b>Decentralized Web Application </b>for ESG
        Ratings (Environmental, Social and Governance) that utilizes modern
        blockchain technology.
      </p>
      <p>React.js Redux Node.js Express SCSS PostgreSQL Solidity</p>
      <p
        onClick={() =>
          window.open("https://dev.sustainability.exchange/", "_blank")
        }
      >
        Website ⯈
      </p>
    </ImageInfo>
  );
};

export const SecondImageInfo = ({ state }) => {
  return (
    <ImageInfo2 state={state}>
      <p>
        Microtreaty <span>(UI/UX Design)</span>
      </p>
      <p>
        A <b>Decentralized Web Application </b> for creating digital assets that
        are stored on the blockchain. These assets can be transferred worldwide
        and peer-to-peer. Just like sending a simple text message.
      </p>
      <p>
        Adobe-Illustrator Sketch Affinity-Designer MaterialUI Material-Design
      </p>
      <p>
        <span>Animation ⯈</span>
        <span
          onClick={() =>
            window.open(
              "https://xd.adobe.com/view/87e652ae-5207-4558-7010-dfe7b99dea1c-f1d7/grid",
              "_blank"
            )
          }
        >
          Prototypes ⯈
        </span>
      </p>
    </ImageInfo2>
  );
};
