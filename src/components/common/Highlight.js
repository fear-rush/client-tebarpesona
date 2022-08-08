import React from "react";
import styled from "styled-components";

const Highlight = ({ highlight, dbLocation }) => {
  return (
    <HighlightSection>
      <div className="highlight-container">
        <div className="highlight-one">
          <img src={highlight[1].attributes.url} alt="" />
        </div>
        <div className="highlight-two">
          <img src={highlight[0].attributes.url} alt="" />
        </div>
        <div className="highlight-three">
          <img src={highlight[2].attributes.url} alt="" />
        </div>
        <div className="highlight-four">
          <img src={highlight[3].attributes.url} alt="" />
        </div>
        <div className="highlight-title">
          <h1>HIGHLIGHT</h1>
        </div>
      </div>
    </HighlightSection>
  );
};

export default Highlight;

const HighlightSection = styled.div`
  width: 100%;
  padding: 0 7rem;
  margin: 2rem 0;

  .highlight-container {
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(2, 300px);
    gap: 1em 1em;
    justify-items: stretch;
  }

  .higlight-one {
    grid-area: 1 / 1 / 2 / 2;
  }

  @media (min-width: 780px) and (max-width: 1800px) {
    .highlight-one {
      img {
        width: 100%;
        grid-area: 1 / 1 / 2 / 2;
      }
    }
  }

  .highlight-one,
  .highlight-two,
  .highlight-three,
  .highlight-four,
  .highlight-five {
    img {
      width: 100%;
      height: 100%;
      background-size: cover;
    }
  }

  .highlight-one {
    grid-area: 1 / 1 / 2 / 1;
  }

  .highlight-two {
    grid-area: 1 / 2 / 1 / 2;
  }

  .highlight-three {
    grid-area: 2 / 2 / 2 / 2;
  }

  .highlight-four {
    grid-area: 2 / 3 / 2 / 3;
  }

  .highlight-title {
    grid-area: 1 / 3 / 1 / 3;
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    letter-spacing: 0.5rem;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 480px) {
    .highlight-container {
      display: flex;
      flex-direction: column;
    }
  }
`;
