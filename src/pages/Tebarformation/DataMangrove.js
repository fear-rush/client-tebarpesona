import React from "react";
import styled from "styled-components";
import TebarformationPage from "../../components/common/TebarformationPage/TebarformationPage";

const articleContent = {
  title:
    "Pemeliharaan Data Lokasi Penanaman Hutan Mangrove di Kelurahan Sulamadaha",
  information: "1 Agustus 2022",
  image: require("../../assets/TebarformationPage/data-mangrove/data-lokasi-mangrove.jpg"),
  content: [
    `Penyampaian laporan penanaman mangrove dan database hasil geotagging dari penanaman mangrove di kelurahan Sulamadaha. Hasil dan dampak dari terlaksananya kegiatan ini adalah terdatanya lokasi penanaman mangrove untuk menjadi lokasi pelestarian mangrove di pantai pasir putih Kelurahan Sulamadaha`,
  ],
};

const DataMangrove = () => {
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

export default DataMangrove;

const ArticleSection = styled.div`
  width: 100%;
`;
