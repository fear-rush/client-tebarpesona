import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import virtualTour from "../../assets/Home/tour-section/virtual-tour.png";
import geospatial from "../../assets/Home/tour-section/geospasial.jpg";
import kotaRempah from "../../assets/Home/tour-section/kota-rempah.png";

const TourSection = () => {
  return (
    <Tour>
      <UpperMenu>
        <h1 className="virtual-title">VIRTUAL TOUR</h1>
        <Link to="/virtualtour">
          <img src={virtualTour} alt="" />
        </Link>
      </UpperMenu>
      <LowerMenu>
        <div className="geospatial">
          <h1 className="geospatial-title">GEOSPATIAL</h1>
          <Link to="/geospatial">
            <img src={geospatial} alt="" />
          </Link>
        </div>
        <div className="kota-rempah">
          <h1 className="kota-rempah-title">KOTA REMPAH</h1>
          <Link to="/kotarempah">
            <img src={kotaRempah} alt="" />
          </Link>
        </div>
      </LowerMenu>
    </Tour>
  );
};

export default TourSection;

const Tour = styled.div`
  width: 100%;
  position: relative;
  z-index: 3;
`;

const UpperMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;

  img {
    max-width: 80%;
  }

  .virtual-title {
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    letter-spacing: 0.45rem;
    color: #fff;
  }

  @media screen and (max-width: 480px) {
    img {
      max-width: 360px;
      padding: 1rem;
    }
  }
`;
const LowerMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem auto;

  .geospatial,
  .kota-rempah {
    display: flex;
    flex-direction: column;
    jutify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 3rem;
    text-align: center;

    img {
      max-width: 80%;
      height: auto;
    }
  }

  .geospatial-title,
  .kota-rempah-title {
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    letter-spacing: 0.45rem;
    color: #fff;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    img {
      max-width: 360px;
      padding: 1rem;
    }
  }
`;
