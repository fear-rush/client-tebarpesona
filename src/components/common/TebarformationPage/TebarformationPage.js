import React from "react";
import styled from "styled-components";

import TebarformationPageSlider from "./TebarformationPageSlider";

const TebarformationPage = ({ title, information, image, content }) => {
  return (
    <>
      <TebarformationSection>
        <h1 className="proker-title">{title}</h1>
        <p className="proker-information">{information}</p>
        <img src={image} alt="" className="proker-image" />
        <div className="proker-content">
          {content.map((el, index) => (
            <p key={index}>{el}</p>
          ))}
        </div>
        <TebarformationPageSlider />
      </TebarformationSection>
    </>
  );
};

export default TebarformationPage;

const TebarformationSection = styled.div`
  width: 100%;
  padding: 0 8rem;
  margin: 4rem 0;

  .proker-title {
    margin: 0;
  }

  .proker-information: {
    margin: 0;
  }

  .proker-image {
    display: block;
    margin: 0 auto;
    background-size: cover;
    background-position: center;
    width: 80%;
    height: 600px;
  }

  .proker-content {
    p {
      font-family: "Roboto", sans-serif;
      font-weight: 300;
      font-size: 1.5rem;
      line-height: 1.75rem;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 0 2rem;

    .proker-title {
      font-size: 1.75rem;
      line-height: 2rem;
    }

    .proker-image {
      width: 100%;
      height: auto;
      margin: 0;
      text-align: center;
    }

    .proker-content {
      p {
        font-size: 1.25rem;
      }
    }
  }
`;
