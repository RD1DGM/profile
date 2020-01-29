import styled from "styled-components";

export const FirstImageInfo = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  display: grid;
  grid-template-rows: 1fr auto repeat(2, 1fr);

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
