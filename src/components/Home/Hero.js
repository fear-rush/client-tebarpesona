import React from "react";
import styled from "styled-components";
import heroimage from "../../assets/Home/heroimage-2.JPG";

function Hero() {
  return (
    <HeroSection className="hero">
      <div className="hero-image">
        <div className="hero-content">
          <h1 className="hero-title">COME TO TERNATE BARAT</h1>
          <h2 className="hero-subtitle">LAND OF ADVENTURE AND NATURE</h2>
        </div>
        <div className="kkn-title">
          <h2>KKN PPM UGM TERNATE BARAT</h2>
          <h2>TEBAR PESONA</h2>
          <h2>PERIODE 2 TAHUN 2022</h2>
        </div>
      </div>
    </HeroSection>
  );
}

export default Hero;

const HeroSection = styled.div`

  width: 100%;
  position: relative;
  top: -10%;

  .hero-image {
    padding: 3rem;
    background: url(${heroimage}) no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 18.6rem;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.9);
      opacity: 0.6;
      z-index: 0;
    }
  }

  .hero-content {
    margin-top: 10rem;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    z-index: 1;
    margin-top: 12rem;
    .hero-title {
      font-size: 4rem;
      color: #fff;
      letter-spacing: 0.35rem;
      font-weight: 800;
      font-family: "Montserrat", sans-serif;
    }
    .hero-subtitle {
      font-size: 2.25rem;
      color: #fff;
      letter-spacing: 0.25rem;
      font-weight: 800;
      font-family: "Roboto", sans-serif;
    }
  }

  .kkn-title {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 0;
    left: 0;
    margin: 0rem;
    h2 {
      color: #fff;
      margin-top: 0.25rem;
      font-weight: 300;
      font-size: 0.825rem;
      font-family: "Roboto", sans-serif;
    }
  }

  @media (min-width: 780px) and (max-width: 1366px) {
    .hero-content {
      margin-top: 6rem;
    }
    
    .hero-image {
      gap: 13rem;
    }
  }


  @media screen and (min-width: 768px) {
    h1 {
      font-size: 3rem;
      letter-spacing: 0.15rem;
    }
    h2 {
      font-size: 0.75rem;
      letter-spacing: 0.15rem;
      margin-top: 1.25rem;
    }
  }

  @media screen and (max-width: 480px) {
    .hero-image {
      width: 100%;
      height: 95vh;
      background-size: cover;
      background-position: center;
      backgorund-repeat: no-repeat;
      padding: 1rem;
      gap: 0;
    }

    .hero-content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-top: 4rem;
      width: 100%;
      .hero-title {
        width: 100%;
        font-size: 2rem;
        letter-spacing: 0.15rem;
        line-height: 3rem;
      }
      .hero-subtitle {
        font-size: 1.25rem;
        letter-spacing: 0.15rem;
        line-height: 2rem;
        margin-top: 1.25rem;
      }
    }

    .kkn-title {
      top: 35%;
    }

  }
`;
