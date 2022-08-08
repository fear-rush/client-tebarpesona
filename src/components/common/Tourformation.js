import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faPersonSwimming,
  faRestroom,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";

const Tourformation = ({
  locationName,
  ticket,
  activity,
  facility,
  transportation,
}) => {
  return (
    <TourformationSection>
      <div className="title-container">
        <h1 className="tourformation-title">TOURFORMATION</h1>
        <h2 className="location-title">
          {locationName}, Ternate Barat, Maluku Utara
        </h2>
      </div>
      <div className="card-container">
        <div className="card">
          <FontAwesomeIcon icon={faTicket} size="2x" />
          <h2>Tiket Masuk</h2>
          <ReactMarkdown
            children={ticket}
            rehypePlugins={[rehypeRaw]}
            className="content"
          />
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faPersonSwimming} size="2x" />
          <h2>Aktivitas</h2>
          <ReactMarkdown
            children={activity}
            rehypePlugins={[rehypeRaw]}
            className="content"
          />
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faRestroom} size="2x" />
          <h2>Fasilitas</h2>
          <ReactMarkdown
            children={facility}
            rehypePlugins={[rehypeRaw]}
            className="content"
          />
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faCar} size="2x" />
          <h2>Transportasi</h2>
          <ReactMarkdown
            children={transportation}
            rehypePlugins={[rehypeRaw]}
            className="content"
          />
        </div>
      </div>
    </TourformationSection>
  );
};

export default Tourformation;

const TourformationSection = styled.div`
  margin: 0;
  width: auto;
  padding: 2rem 7rem;
  margin: 1rem 0;
  background: #fcfafa;
  display: flex;
  flex-direction: column;

  .title-container {
    .tourformation-title,
    .location-title {
      font-family: "Montserrat", sans-serif;
      font-weight: 900;
      text-transform: capitalize;
    }

    .tourformation-title {
      font-size: 4rem;
      margin: 0;
    }

    .location-title {
      font-size: 1.75rem;
      margin: 1rem 0;
    }
  }

  .card-container {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 3rem;
  }

  .card {
    border-radius: 1rem;
    padding-top: 2.5rem;
    width: 230px;
    background: #fff;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

    .content {
      align-self: start;
      margin-left: 2rem;

      ul {
        padding: 0;
        li {
          list-style: inside;
          margin-top: 0.2rem;
        }
      }
    }
  }

  @media screen and (max-width: 760px) {
    margin-top: 2rem;
    padding: 0 2rem;

    .title-container {
      .tourformation-title {
        font-size: 2rem;
        text-align: center;
      }

      .location-title {
        font-size: 1.25rem;
        text-align: center;
      }
    }

    .card-container {
      flex-direction: column;
      margin: 3rem 0;
    }
  }
`;
