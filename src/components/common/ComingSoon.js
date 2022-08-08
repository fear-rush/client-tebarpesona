import React from "react";
import styled from "styled-components";

const ComingSoon = () => {
  return (
    <ComingSoonSection>
      <h1>Coming Soon</h1>
    </ComingSoonSection>
  );
};

export default ComingSoon;

const ComingSoonSection = styled.div`
  width: 100%;
  height: 40vh;

  h1 {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    font-size: 8rem;
    font-weight: 900;
    letter-spacing: 1.5rem;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    h1 {
      font-size: 3rem;
      margin: 0;
      padding: 0;
      text-align: center;
    }
  }
`;
