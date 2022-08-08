import React from "react";
import styled from "styled-components";

import TebarformationPage from "../../components/common/TebarformationPage/TebarformationPage";

const articleContent = {
  title: "Sekolah Kebencanaaan",
  information: "22 Juli 2022",
  image: require("../../assets/TebarformationPage/sekolah-bencana/sekolah-bencana-3.jpg"),
  content: [
    `Kegiatan sekolah kebencanaan terdiri dari beberapa rangkaian kegiatan yang secara umum merupakan kegiatan berupa sosialisasi terkait mitigasi bencana yang dikemas secara kreatif. Kegiatan ini bertujuan agar siswa dapat mengenali dan memahami akan pentingnya mitigasi bencana sedari dini. Selain itu, kegiatan ini sebagai upaya mendukung program Badan Nasional Penanggulangan Bencana (BNPB) melalui Surat Edaran No. 70a/SE/MPN/2010. Hasil dan dampak dari terlaksananya kegiatan ini adalah meningkatnya kapasitas masyarakat usia dini dalam hal ini siswa dan siswi SD Negeri 60 Kota Ternate terkait kebencanaan, mulai dari pengenalan bencana lokal di Ternate hingga mitigasi bencana yang dikemas secara menarik dan edukatif`,
  ],
};

const SekolahBencana = () => {
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

export default SekolahBencana;

const ArticleSection = styled.div`
  width: 100%;
`;
