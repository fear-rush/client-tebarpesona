import React from "react";
import styled from "styled-components";
import DiscoverBox from "./DiscoverBox";

import discoverBoxTobololo from "../../assets/Home/discover-box-tobololo.png";
import discoverBoxSulamadaha from "../../assets/Home/discover-box-sulamadaha.png";
import discoverBoxTakome from "../../assets/Home/discover-box-takome.png";
import TourSection from "./TourSection";
import discoverBackground from "../../assets/Home/heroimage.png";

import TourismSlider from "./TourismSlider";
import InformationSlider from "./InformationSlider";

function DiscoverSection() {
  return (
    <Discover>
      <div className="discover-header">
        <h1 className="discover-title">DISCOVER LOCATION</h1>
        <div className="discover-subtitle-container">
          <h2 className="discover-subtitle">
            <span>A feeling</span> that can't be described but can only be{" "}
            <span>experienced</span>
          </h2>
          <h3 className="tagline">
            Mengelilingi Ternate Barat dalam satu malam tidak akan pernah cukup.
            Kamu akan melewatkan berbagai suguhan pariwisata, aktivitas,
            kuliner, kekayaan alam, dan suasana yang tak terlupakan. Kami
            mengumpulkan seluruh pengalaman itu untuk dapat kamu eksplorasi
            serta jadikan referensi wisata yang akan selalu membekas di hati.
          </h3>
        </div>
      </div>
      <div className="discover-container">
        <div className="discover-box">
          <DiscoverBox
            text="Tobololo"
            image={discoverBoxTobololo}
            link="/tobololo"
          />
          <DiscoverBox
            text="Sulamadaha"
            image={discoverBoxSulamadaha}
            link="/sulamadaha"
          />
          <DiscoverBox text="Takome" image={discoverBoxTakome} link="takome" />
        </div>
        {/* <img src={discoverHero} alt=""/> */}
        <TourismSlider />
        <InformationSlider />
        <TourSection />
      </div>
    </Discover>
  );
}

export default DiscoverSection;

const Discover = styled.div`
  width: 100%;
  height: auto;
  overflow-x: hidden;
  margin: 3rem 0;

  .discover-header {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;

    .discover-title {
      margin-top: 1rem;
      margin-bottom: 0;
      font-family: "Montserrat", sans-serif;
      font-weight: 900;
      letter-spacing: 0.2rem;
      font-size: 2.75rem;
    }

    .discover-subtitle-container {
      text-align: center;
      padding: 0 10rem;

      .discover-subtitle {
        margin-top: 1rem;
        font-family: "Montserrat", sans-serif;
        font-weight: 900;
        font-size: 1.75rem;
      }

      h1 {
        font-family: "Montserrat", sans-serif;
        font-weight: 900;
        letter-spacing: 0.2rem;
      }

      h2 {
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-size: 1.25rem;
        margin: 0;

        span {
          color: #005376;
        }
      }

      .tagline {
        text-align: center;
        margin: 0 auto;
        font-size: 1.5rem;
        line-height: 1.75rem;
        margin: 1rem 0;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        margin-bottom: 4rem;
      }
    }
  }

  .discover-box {
    margin: 3rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 3;
  }

  .discover-container {
    background: url(${discoverBackground}) no-repeat center center;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .discover-container::after {
    overflow: hidden;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0.6;
    z-index: 0;
  }

  @media screen and (max-width: 480px) {
    .discover-header {
      .discover-title {
        font-size: 2rem;
        margin: 0 auto;
        text-align: center;
      }

      .discover-subtitle-container {
        padding: 0 2rem;

        .discover-subtitle {
          font-size: 1.5rem;
          margin-bottom: 4rem;
          line-height: 2rem;
          margin: 1rem 0;
        }

        .tagline {
          /* display: none; */
          font-size: 1rem;
        }

      }
    }
  }
`;
