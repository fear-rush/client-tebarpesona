import React from "react";
import styled from "styled-components";
import TebarformationPage from "../../components/common/TebarformationPage/TebarformationPage";

const articleContent = {
  title:
    "Ternate Youth Camp: Sosialisasi Jalur Masuk PTN Khususnya UGM Serta Jalur Masuk Program Calon Mahasiswa Daerah pada Murid SMA Sederajat",
  information: "30 Juli 2022",
  image: require("../../assets/TebarformationPage/ternate-youth-camp/ternate-youth-camp-1.jpg"),
  content: [
    `Sosialisasi jalur masuk PTN bertujuan untuk memberikan informasi kepada siswa SMA terutama siswa kelas XII tentang cara masuk, perkuliahan yang ada di perguruan tinggi dan sebagainya sehingga siswa dapat lebih paham dan sudah memiliki pandangan kedepannya. Hasil dan dampak dari program ini adalah siswa menjadi lebih paham dan terarah bagaimana cara atau jalur yang dapat di tempuh jika akan melanjutkan studi ke PTN terutama UGM`,
  ],
};

const TernateYouthCamp = () => {
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

export default TernateYouthCamp;

const ArticleSection = styled.div`
  width: 100%;
`;
