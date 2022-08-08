import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import PlaceInformation from "../common/PlaceInformation";
import TebarFormation from "../common/TebarFormation";

import tobololoBackground from "../../assets/Tobololo/tobololo-background.png";

const Tobololo = () => {
  const location = useLocation();
  const locationRes = location.pathname.replace("/", "");

  return (
    <>
      <TobololoSection>
        <div className="background-image"></div>
        <div className="text-title">
          <h1>TOBOLOLO</h1>
        </div>
        <div className="goto-maps">
          <StyledLink to="/virtual-tour">
            <p>go to maps</p>
          </StyledLink>
        </div>
        <div className="description">
          <div className="left-section">
            <p>
              Ada sumber air panas di Ternate? ya dimana lagi kalo bukan di
              Tobololo, salah satu kelurahan di Kecamatan Ternate Barat, Kota
              Ternate, Provinsi Maluku Utara, Indonesia. Kenapa bisa surga? Di
              Kelurahan Tobololo ini, pesona pantai yang masih terjaga dapat
              memanjakan mata kita. Selain itu, di Tobololo terkenal dengan
              adanya sumber air panas dekat pantai.
            </p>
          </div>
          <div className="right-section">
            <p>
              Uniknya lagi, sumber air panas tersebut dapat dijadikan sebagai
              air minum loh! Satu lagi potensi tobololo adalah konservasi penyu
              yang dapat dijadikan sebagai Eduwisata atau pariwisata berbasis
              pendidikan dimana nantinya turis tidak hanya datang dan foto namun
              juga belajar mengenai konservasi penyu dan pelepasan penyu.
            </p>
          </div>
        </div>
        <PlaceInformation
          fetchUrl="https://api-tobololo.herokuapp.com/api/discover-tobololos?populate=*"
          locationName={locationRes}
        />

        <TebarFormation />
      </TobololoSection>
    </>
  );
};

export default Tobololo;

const StyledLink = styled(Link)`
  text-decoration: none;
  outline: 0;
  border: 0;
  color: #fff;
`;

const TobololoSection = styled.div`
  width: 100%;
  height: 100%;
  background: url(${tobololoBackground}) no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100%;
  padding: 5rem;

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
