import React from "react";
import styled from "styled-components";
import TebarformationPage from "../../components/common/TebarformationPage/TebarformationPage";

const articleContent = {
  title:
    "Workshop Pembuatan Ecoprint sebagai Bentuk Pemberdayaan Wanita di Kelurahan Sulamadaha dalam Mewujudkan Eduwisata",
  information: "28 Juli 2022",
  image: require("../../assets/TebarformationPage/workshop-ecoprint/workshop-ecoprint-1.JPG"),
  content: [
    `Workshop Pembuatan Ecoprint merupakan kegiatan pelatihan untuk ibu-ibu kelurahan Sulamadaha agar dapat melakukan pemanfaatan bahan alami di sekitar seperti daun, bunga, dan kulit kayu sebagai pemberi motif pada sebuah media bahan tertentu sebagai kerajinan yang memiliki nilai jual. Hasil dan dampak dari terlaksananya program ini adalah meningkatnya perekonomian masyarakat dengan memanfaatkan bahan alami seperti daun, bunga, dan kulit kayu sebagai pemberi motif pada sebuah media bahan tertentu sebagai kerajinan yang memiliki nilai jual.`,
  ],
};

const WorkshopEcoprint = () => {
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

export default WorkshopEcoprint;

const ArticleSection = styled.div`
  width: 100%;
`;
