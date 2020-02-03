import React from "react";
import styled from "styled-components";
import ContactHeader from "./header";
import ContactBody from "./body";
import ContactButton from "./button";
import { useInView } from "react-intersection-observer";

const ContactContainer = styled.div`
  height: 100vh;
  display: grid;
  gap: 2rem 0;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto 1fr;
  background-color: #e6bb00;
`;

function Contact() {
  const [ref, , entry] = useInView({ threshold: [0, 0.3] });

  const intersectionRatio = 0.34;

  return (
    <ContactContainer ref={ref}>
      {intersectionRatio >= 0.34 && (
        <>
          {" "}
          <ContactHeader ratio={entry && entry.intersectionRatio} />
          <ContactBody ratio={entry && entry.intersectionRatio} />
          <ContactButton ratio={entry && entry.intersectionRatio} />
        </>
      )}
    </ContactContainer>
  );
}

export default Contact;