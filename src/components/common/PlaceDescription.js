import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactLoading from "react-loading";
import axios from "axios";
import { Outlet, useLocation, useParams } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import Tourformation from "./Tourformation";
import Highlight from "./Highlight";
import SwiperSlider from "./Swiper/SwiperSlider";

import { config } from "../../config/Constant";

const PlaceDescription = () => {
  const [loading, setLoading] = useState(true);
  const [highlightArray, setHighlightArray] = useState([]);
  const [dataInfo, setDataInfo] = useState([]);
  const location = useLocation();
  const { height, width } = useWindowDimensions(location);
  const id = useParams(); // id == slug
  const slug = id.locationPath;

  let dbLocation;
  let locationStr = JSON.stringify(location);
  let locationRes = locationStr.split("/")[1];

  if (locationRes === "sulamadaha") {
    dbLocation = config.url.API_URL_SULAMADAHA;
  } else if (locationRes === "takome") {
    dbLocation = config.url.API_URL_TAKOME;
  } else if (locationRes === "tobololo") {
    dbLocation = config.url.API_URL_TOBOLOLO;
  }

  try {
    useEffect(() => {
      const fetchData = async () => {
        let fetchURL;
        if (locationRes === "sulamadaha") {
          fetchURL = `https://api-sulamadaha.herokuapp.com/api/blog-sulamadahas/${slug}`;
        } else if (locationRes === "takome") {
          fetchURL = `https://api-takome.herokuapp.com/api/blog-takomes/${slug}`;
        } else if (locationRes === "tobololo") {
          fetchURL = `https://api-tobololo.herokuapp.com/api/blog-tobololos/${slug}`;
        }

        const responseData = await axios
          .get(`${fetchURL}?populate=*`)
          .then((response) => {
            return response.data.data;
          })
          .catch((error) => {
            console.log(error.message);
          });
        setDataInfo(responseData);
        setHighlightArray(responseData.attributes.highlight.data);
        setLoading(false);
      };

      if (loading) {
        fetchData();
      }
    }, [loading]);
  } catch (err) {
    console.log(err);
  }

  return (
    <div>
      {loading ? (
        <LoaderContainer>
          <PageLoader type="bubbles" color="#000" height={300} width={150} />
        </LoaderContainer>
      ) : (
        <>
          <PlaceDescriptionSection>
            <div className="grid-container">
              <div className="title">
                {dataInfo.attributes.title.split(" ").map((el, index) => (
                  <>
                    <h1>
                      {el}
                      {"\n"}
                    </h1>
                  </>
                ))}
              </div>
              <div className="upper-image">
                <img
                  src={dataInfo.attributes.upperImage.data.attributes.url}
                  alt=""
                />
              </div>
              <div className="lower-image">
                <img
                  src={dataInfo.attributes.lowerImage.data.attributes.url}
                  alt=""
                />
              </div>
              <div className="upper-description">
                <ReactMarkdown
                  children={dataInfo.attributes.upperField}
                  className="upper-description-text"
                />
              </div>
              <div className="lower-description">
                <ReactMarkdown
                  children={dataInfo.attributes.lowerField}
                  className="lower-description-text"
                />
              </div>
              <div className="story-description">
                {dataInfo.attributes.trivia ? (
                  <>
                    <h1 className="trivia-title">
                      TRIVIA {dataInfo.attributes.title}
                    </h1>
                    <ReactMarkdown
                      children={dataInfo.attributes.trivia}
                      className="trivia-content"
                    />
                  </>
                ) : null}
              </div>
            </div>
          </PlaceDescriptionSection>
          <Tourformation
            locationName={locationRes}
            ticket={dataInfo.attributes.ticket}
            activity={dataInfo.attributes.activity}
            facility={dataInfo.attributes.facility}
            transportation={dataInfo.attributes.transportation}
          />
          {width <= 780 ? (
            <SwiperSlider highlight={highlightArray}/>
          ) : (
            <Highlight highlight={highlightArray}/>
          )}
          <Outlet />
        </>
      )}
    </div>
  );
};

export default PlaceDescription;

const LoaderContainer = styled.div`
  width: 100%;
  height: 50vh;
`

const PageLoader = styled(ReactLoading)`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlaceDescriptionSection = styled.div`
  margin-top: 8rem;

  .grid-container {
    padding: 0 7rem;
    display: grid;
    /* grid-template-columns: 0.7fr 1.3fr 0.8fr 1.2fr; */
    grid-template-columns: repeat(30, 1fr);
    /* grid-template-rows: 1fr 1.5fr 1.5fr minmax(200px, 400px) minmax(200px, 500px); */
    /* grid-template-rows: repeat(15, max-content) repeat(14, 60px); */
    grid-template-rows: repeat(29, 50px);
    /* grid-template-rows: repeat(auto-fit, minmax(20px, 50px)); */
    grid-auto-rows: min-content;
    grid-auto-flow: row dense;
    justify-items: stretch;
    margin: 0;
    row-gap: 5px;
  }

  .upper-image {
    grid-area: 1 / 21 / 12 / 30;
    img {
      width: 100%;
      height: 600px;
      background-size: cover;
    }
  }

  .lower-description {
    grid-area: 14 / 21 / 25 / 30;
  }

  .lower-image {
    grid-area: 12 / 2 / 25 / 21;
    img {
      width: 100%;
      height: 600px;
      background-size: cover;
    }
  }

  .upper-description {
    grid-area: 5 / 2 / 12 / 21;
  }

  .lower-description,
  .upper-description {
    .lower-description-text,
    .upper-description-text {
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 1.6rem;
      margin-left: 1.5rem;
    }
  }

  .title {
    grid-area: 1 / 5 / 4 / 21;
    h1 {
      text-align: right;
      font-family: "Montserrat", sans-serif;
      font-weight: 900;
      font-size: 4rem;
      text-transform: uppercase;
      letter-spacing: 0.5rem;
      margin: 0.75rem;
      line-height: 3rem;
    }
  }

  .story-description {
    grid-area: 23 / 2 / 33 / 30;
    align-self: end;
    .trivia-title {
      font-family: "Montserrat", sans-serif;
      font-weight: 900;
      font-size: 2.75rem;
      letter-spacing: 0.15rem;
      text-transform: uppercase;
    }

    .trivia-content {
      p {
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 1.6rem;
      }
    }
  }

  @media screen and (max-width: 780px) {
    margin-top: 2rem;
    padding: 0;

    .story-description {
      .trivia-title {
        font-size: 2rem;
      }
      .trivia-content {
        p {
          font-size: 1rem !important;
        }
      }
    }

    .grid-container {
      display: flex;
      flex-direction: column;
      padding: 0 2rem;
      gap: 0;
    }

    .upper-description,
    .lower-description {
      width: 100%;
      .upper-description-text,
      .lower-description-text {
        display: block;
        font-size: 1rem;
        text-align: left;
        margin-left: 0;
      }
    }

    .lower-description {
      order: 2;
    }

    .upper-image {
      margin: 0;

      img {
        width: 100%;
        height: auto;
      }
    }

    .lower-image {
      order: 1;

      img {
        width: 100%;
        height: auto;
      }
    }

    .title {
      h1 {
        font-size: 2rem;
        letter-spacing: 0.1rem;
        text-align: left;
        line-height: 1.25rem;
        margin-bottom: 1rem;
        margin-left: 0;
      }
    }
  }
`;
