import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { config } from "../../config/Constant";

import PlaceInformation from "../common/PlaceInformation";
import TebarFormation from "../common/TebarFormation";

import sulamadahaBackground from "../../assets/Sulamadaha/sulamadaha-background.png";

const Sulamadaha = () => {
  const location = useLocation();
  const locationRes = location.pathname.replace("/", "");

  return (
    <>
      <SulamadahaSection>
        <div className="background-image"></div>
        <div className="text-title">
          <h1>SULAMADAHA</h1>
        </div>
        <div className="goto-maps">
          <StyledLink to="/virtual-tour">
            <p>go to maps</p>
          </StyledLink>
        </div>
        <div className="description">
          <div className="left-section">
            <p>
              Sulamadaha adalah salah satu kelurahan di Kecamatan Ternate Barat,
              Kota Ternate, Provinsi Maluku Utara, Indonesia. Sulamadaha
              merupakan Kelurahan di Kecamatan Ternate Barat, Kota Ternate,
              Provinsi Maluku Utara, Indonesia. Pesona Sulamadaha ada di
              pantainya yang membentang bak oasis yang cantik.
            </p>
          </div>
          <div className="right-section">
            <p>
              Di sini, kamu dijamin gak akan bingung untuk mencari spot yang
              menarik untuk dikunjungi. Berbagai opsi wisata pesisir siap
              menyambut kamu sebagai tempat untuk menghilangkan penat. Soal
              kuliner, Sulamadaha dipastikan dapat menjamin kamu gak akan
              kelaperan! Akses jalan yang bagus dan lokasi yang tidak terlalu
              jauh dari kota menjadikan Sulamadaha sebagai lokasi strategis
              untuk menghabiskan akhir pekan bersama orang terkasih.
            </p>
          </div>
        </div>

        <PlaceInformation
          fetchUrl="https://api-sulamadaha.herokuapp.com/api/discover-sulamadahas?populate=*"
          locationName={locationRes}
        />
        <TebarFormation />
      </SulamadahaSection>
    </>
  );
};

export default Sulamadaha;

const StyledLink = styled(Link)`
  text-decoration: none;
  outline: 0;
  border: 0;
  color: #fff;
`;

const SulamadahaSection = styled.div`
  width: 100%;
  height: 100%;
  background: url(${sulamadahaBackground}) no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100%;
  padding: 5rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    opacity: 0.5;
    z-index: 0;
  }

  .text-title,
  .goto-maps,
  .description,
  .place-information {
    position: relative;
    z-index: 1;
  }

  .text-title {
    h1 {
      font-family: "Montserrat", sans-serif;
      font-weight: 900;
      letter-spacing: 1.65rem;
      font-size: 6rem;
      color: #fff;
      margin: 0;
    }
  }

  .goto-maps {
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    font-size: 2rem;
    color: #fff;
  }

  .description {
    display: flex;
    justify-content: space-evenly;
    align-items: start;
    margin-bottom: 7rem;
    gap: 11rem;

    .left-section,
    .right-section {
      width: 45%;
    }

    .left-section p,
    .right-section p {
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-size: 1.3rem;
      line-height: 2rem;
      color: #fff;
      margin: 0;
    }
  }
  @media screen and (max-width: 480px) {
    overflow: hidden;
    padding: 2rem;

    .text-title {
      h1 {
        font-size: 2rem;
        letter-spacing: 0.5rem;
        text-align: center;
      }
    }

    .goto-maps {
      font-size: 1.5rem;
    }

    .description {
      gap: 1rem;

      .left-section,
      .right-section {
        width: 50%;

        p {
          font-size: 1rem;
          line-height: 1.5rem;
        }
      }
    }
  }
`;
