import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import PlaceInformation from "../common/PlaceInformation";
import TebarFormation from "../common/TebarFormation";

import sulamadahaBackground from "../../assets/Sulamadaha/sulamadaha-background.png";

const Takome = () => {
  const location = useLocation();
  const locationRes = location.pathname.replace("/", "");

  return (
    <>
      <TakomeSection>
        <div className="background-image"></div>
        <div className="text-title">
          <h1>TAKOME</h1>
        </div>
        <div className="goto-maps">
          <StyledLink to="/virtual-tour">
            <p>go to maps</p>
          </StyledLink>
        </div>
        <div className="description">
          <div className="left-section">
            <p>
              Dimana sih tempat yang katanya surga di ternate barat? Mana lagi
              kalau bukan Takome salah satu Kelurahan di Kecamatan Ternate
              Barat, Kota Ternate, Provinsi Maluku Utara, Indonesia. Kenapa bisa
              surga? Karena di Takome kita bisa merasakan banyak sekali kekayaan
              alam yang masih terjaga mulai dari pantai, danau, tanjung, dan
              camping. Saking kerennya semua pariwisatanya berbasis
            </p>
          </div>
          <div className="right-section">
            <p>
              masyarakat atau dikelola secara langsung oleh masyarakat asli
              Takome. Uniknya lagi semua bangunan penunjang wisata dibangun oleh
              masyarakat secara gotong-royong oleh penduduk setempat. Tidak
              hanya tempat wisata saja namun kekayaan Takome tidak berhenti
              sampai di situ saja, ada juga potensi perkebunan seperti pala dan
              kelapa sangat melimpah di Kelurahan Takome. Jadi tunggu apalagi
              ayo ke Takome sekarang juga!
            </p>
          </div>
        </div>

        <PlaceInformation
          fetchUrl="https://api-takome.herokuapp.com/api/discover-takomes?populate=*"
          locationName={locationRes}
        />
        <TebarFormation />
      </TakomeSection>
    </>
  );
};

export default Takome;

const StyledLink = styled(Link)`
  text-decoration: none;
  outline: 0;
  border: 0;
  color: #fff;
`;

const TakomeSection = styled.div`
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
