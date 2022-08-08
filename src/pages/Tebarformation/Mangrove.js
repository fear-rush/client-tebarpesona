import React from "react";
import styled from "styled-components";
import TebarformationPage from "../../components/common/TebarformationPage/TebarformationPage";

const articleContent = {
  title: "Sahabat Mangrove",
  information: "24 Juli 2022",
  image: require("../../assets/TebarformationPage/mangrove/sahabat-mangrove-1.JPG"),
  content: [
    `Sahabat mangrove merupakan kegiatan penanaman mangrove bersama yang dilakukan KKN-PPM UGM Tebar Pesona 2022 bersama pertamina dan pemuda kelurahan sulamadaha. Program ini merupakan salah satu kegiatan untuk mengurangi dampak abrasi pantai yang semakin hari semakin parah. Hasil dan dampak dari terlaksananya kegiatan ini adalah mengurangi dampak abrasi dari lautan`,
  ],
};

const Mangrove = () => {
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

export default Mangrove;

const ArticleSection = styled.div`
  width: 100%;
`;
