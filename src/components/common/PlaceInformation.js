import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";

import { config } from "../../config/Constant";

const PlaceInformation = ({ fetchUrl, locationName }) => {
  const [loading, setLoading] = useState(true);
  const [dataInfo, setDataInfo] = useState([]);
  let dbLocation;

  try {
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        axios
          .get(fetchUrl)
          .then((res) => {
            setDataInfo(res.data.data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err.message);
          });
      };
      fetchData();
    }, [fetchUrl]);
  } catch (err) {
    console.log(err);
  }

  if (locationName === "sulamadaha") {
    dbLocation = config.url.API_URL_SULAMADAHA;
  } else if (locationName === "takome") {
    dbLocation = config.url.API_URL_TAKOME;
  } else if (locationName === "tobololo") {
    dbLocation = config.url.API_URL_TOBOLOLO;
  }

  return (
    <PlaceBox>
      {loading ? (
        <ReactLoading
          type="bubbles"
          color="#FFFFFF"
          height={300}
          width={100}
          className="loader"
        />
      ) : (
        <div className="place-grid">
          {dataInfo.map((el, index) => (
            <div className="place-information" key={index}>
              <Link to={`/${locationName}/${el.attributes.path}`}>
                <img
                  src={
                    el.attributes.coverImage.data.attributes.url
                  }
                  alt=""
                />
                <p>{el.attributes.locationName}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </PlaceBox>
  );
};

export default PlaceInformation;

const PlaceBox = styled.div`
  width: 100%;
  .place-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, 400px);
    grid-template-rows: repeat(auto, 1fr);
    width: 100%;
    column-gap: 2rem;
    row-gap: 8rem;
    margin-bottom: 10rem;

    a {
      text-decoration: none;
    }
  }

  img {
    width: 400px;
    height: 300px;
    background-size: cover;
    background-position: center;
  }

  p {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    color: #fff;
    font-size: 1.6rem;
  }

  .loader {
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 480px) {
    overflow: hidden;

    .place-grid {
      display: flex;
      flex-direction: column;
      gap: 1.75rem;

      img {
        max-width: 360px;
      }

      p {
        font-size: 1.5rem;
      }
    }
  }
`;
