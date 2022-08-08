import React from "react";
import styled from "styled-components";

import TebarformationPage from "../../components/common/TebarformationPage/TebarformationPage";

const articleContent = {
  title: "Pelepasan Tukik",
  information: "24 Juli 2022",
  image: require("../../assets/TebarformationPage/pelepasan-tukik/placeholder.png"),
  content: [
    `  Pantai Sulamadaha adalah salah satu objek wisata alam yang secara
  administrativ terletak di Kelurahan Sulamadaha Kota Teranate
  Provinsi Maluku Utara. Pantai ini menawarkan atraksi wisata alam
  berupa keindahan permukaan laut dan keindahan alam bawah laut.
  Pantai Sulamadaha adalah salah satu objek wisata alam yang secara
  administrativ terletak di Kelurahan Sulamadaha Kota Teranate
  Provinsi Maluku Utara. Pantai ini menawarkan atraksi wisata alam
  berupa keindahan permukaan laut dan keindahan alam bawah laut.`,

    `Pantai Sulamadaha adalah salah satu objek wisata alam yang secara
  administrativ terletak di Kelurahan Sulamadaha Kota Teranate
  Provinsi Maluku Utara. Pantai ini menawarkan atraksi wisata alam
  berupa keindahan permukaan laut dan keindahan alam bawah laut.Pantai
  Sulamadaha adalah salah satu objek wisata alam yang secara
  administrativ terletak di Kelurahan Sulamadaha Kota Teranate
  Provinsi Maluku Utara. Pantai ini menawarkan atraksi wisata alam
  berupa keindahan permukaan laut dan keindahan alam bawah laut.Pantai
  Sulamadaha adalah salah satu objek wisata alam yang secara
  administrativ terletak di Kelurahan Sulamadaha Kota Teranate
  Provinsi Maluku Utara. Pantai ini menawarkan atraksi wisata alam
  berupa keindahan permukaan laut dan keindahan alam bawah laut.Pantai
  Sulamadaha adalah salah satu objek wisata alam yang secara
  administrativ terletak di Kelurahan Sulamadaha Kota Teranate
  Provinsi Maluku Utara. Pantai ini menawarkan atraksi wisata alam
  berupa keindahan permukaan laut dan keindahan alam bawah laut.`,

    `Pantai Sulamadaha adalah salah satu objek wisata alam yang secara
  administrativ terletak di Kelurahan Sulamadaha Kota Teranate
  Provinsi Maluku Utara. Pantai ini menawarkan atraksi wisata alam
  berupa keindahan permukaan laut dan keindahan alam bawah laut.Pantai
  Sulamadaha adalah salah satu objek wisata alam yang secara
  administrativ terletak di Kelurahan Sulamadaha Kota Teranate
  Provinsi Maluku Utara. Pantai ini menawarkan atraksi wisata alam
  berupa keindahan permukaan laut dan keindahan alam bawah laut.Pantai
  Sulamadaha adalah salah satu objek wisata alam yang secara
  administrativ terletak di Kelurahan Sulamadaha Kota Teranate
  Provinsi Maluku Utara. Pantai ini menawarkan atraksi wisata alam
  berupa keindahan permukaan laut dan keindahan alam bawah laut.Pantai
  Sulamadaha adalah salah satu objek wisata alam yang secara
  administrativ terletak di Kelurahan Sulamadaha Kota Teranate
  Provinsi Maluku Utara. Pantai ini menawarkan atraksi wisata alam
  berupa keindahan permukaan laut dan keindahan alam bawah laut.`,
  ],
};

const PelepasanTukik = () => {
  return (
    <ArticleSection>
      <TebarformationPage
        title={articleContent.title}
        information={articleContent.information}
        image={articleContent.image}
        content={articleContent.content}
      />
    </ArticleSection>
  );
};

export default PelepasanTukik;

const ArticleSection = styled.div`
  width: 100%;
`;
