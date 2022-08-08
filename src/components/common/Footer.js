import React from "react";
import styled from "styled-components";

import exxonMobil from "../../assets/common/footer/exxonmobil.png";
import instagramLogo from "../../assets/common/footer/instagram-logo.png";
import linkedinLogo from "../../assets/common/footer/linkedin-logo.png";
import logoAtas from "../../assets/common/footer/logo-atas.png";
import logoBawah from "../../assets/common/footer/logo-bawah.png";
import kknLogo from "../../assets/common/footer/kkn-logo.png";
import ugmLogo from "../../assets/common/footer/ugm-logo.png";
import pertamina from "../../assets/common/footer/pertamina.png";

const Footer = () => {
  return (
    <FooterSection>
      <div className="top-section">
        <img src={ugmLogo} alt="" />
        <img src={kknLogo} alt="" />
        <img src={logoAtas} alt="" />
      </div>
      <div className="middle-section">
        <p className="tema">
          "Perencanaan Desa Wisata Berbasis Komunitas yang Berdaya Saing dan
          Berkelanjutan melalui Potensi Daya
        </p>
        <p>Tarik Pantai, Penyu, Geowisata, Mangrove, dan Perkebunan"</p>
        <p>
          Kelurahan Tobololo, Takome, dan Sulamadaha, Kecamatan Ternate Barat,
          Kota Ternate,
        </p>
        <p>Provinsi Maluku Utara</p>
      </div>
      <div className="lower-section">
        <div className="tebar-pesona">
          <img src={logoBawah} alt="" />
          <p>2022 KKN PPM UGM Tebar Pesona</p>
        </div>
        <div className="social-media">
          <p>Follow us</p>
          <a href="https://www.instagram.com/_tebarpesona" target="_blank">
            <img src={instagramLogo} className="social-media-logo" />
          </a>
          <img src={linkedinLogo} className="social-media-logo" />
        </div>
        <div className="csr">
          <p>
            <i>CSR by</i>
          </p>
          <img src={pertamina} />
          <img src={exxonMobil} />
        </div>
      </div>
    </FooterSection>
  );
};

export default Footer;

const FooterSection = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 3rem 0;

  .top-section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }

  .middle-section {
    display: flex;
    justfify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 2rem 0;

    p {
      margin: 0.25rem;
      font-family: "Roboto", sans-serif;
      font-weight: 600;
    }
  }

  .lower-section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    .tebar-pesona {
      p {
        font-family: "Roboto", sans-serif;
        font-weight: 600;
      }
    }

    .social-media {
      margin-left: 5.5rem;
      img:first-of-type {
        margin-right: 1rem;
      }

      p {
        text-align: center;
        font-family: "Roboto", sans-serif;
        font-weight: 600;
      }
    }

    .csr {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      p {
        font-family: "Roboto", sans-serif;
        font-weight: 600;
      }
    }
  }

  @media screen and (max-width: 780px) {
    overflow: hidden;
    padding: 0 2rem;

    .top-section {
      img {
        max-width: 20%;
      }
    }

    .middle-section {
      display: block;
      margin: 2rem auto;
      text-align: center;
      line-height: 1.25rem;
    }

    .lower-section {
      flex-direction: column;

      .tebar-pesona {
        text-align: center;
        img {
          max-width: 50%;
        }

        p {
          font-size: 0.8rem;
        }
      }

      .csr {
        text-align: center;
        img {
          max-width: 50%;
        }
      }

      .social-media {
        order: 3;
        margin: 0 auto;

        .social-media-logo {
          margin: 0;
        }
      }
    }
  }
`;
