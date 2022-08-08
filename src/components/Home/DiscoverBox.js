import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function DiscoverBox({ text, image, link }) {
  return (
    <Box>
      <div className="box-container">
        <Link to={link}>
          <img src={image} alt="" />
          <h1 className="box-text">{text}</h1>
        </Link>
      </div>
    </Box>
  );
}

export default DiscoverBox;

const Box = styled.div`
  .box-container {
    position: relative;
    max-width: 1100px;
    max-height: 200px;

    img {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      filter: brightness(80%);
    }

    .box-text {
      position: absolute;
      top: -15%;
      left: 0;
      right: 0;
      text-align: center;
      /* left: 15%; */
      font-family: "Montserrat", sans-serif;
      font-height: 900;
      font-size: 7rem;
      text-transform: uppercase;
      letter-spacing: 1rem;
      color: #fff;
    }

    @media screen and (max-width: 980px) {
      .box-text {
        font-size: 5rem;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .box-container {
      max-width: 350px;
      margin-top: 1rem;

      .box-text {
        font-size: 2rem;
        letter-spacing: 0.35rem;
        top: -10%;
      }

    
    }
  }
`;
