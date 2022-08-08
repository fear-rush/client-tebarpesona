import React from "react";
import styled from "styled-components";
import TebarformationPage from "../../components/common/TebarformationPage/TebarformationPage";


const articleContent = {
  title:
    "Workshop Pembuatan Ecoprint sebagai Bentuk Pemberdayaan Wanita di Kelurahan Sulamadaha dalam Mewujudkan Eduwisata",
  information: "14 Juli 2022",
  image: require("../../assets/TebarformationPage/sosialisasi-mangrove/sosialisasi-mangrove-1.jpg"),
  content: [
    `Program Kerja Sosialisasi Peran Penting Mangrove Bagi Lingkungan dilaksanakan atas dasar kritisnya kondisi ekosistem mangrove di Kota Ternate. Padahal, Mangrove memiliki banyak manfaat baik dari segi ekologi, ekonomi, maupun manfaat ekonomi. Kelurahan Sulamadaha merupakan salah satu lokasi potensial bagi sebaran mangrove. Mengingat banyaknya manfaat yang diberikan oleh mangrove bagi lingkungan dan
    masyarakat sekitar, sudah selayaknya keberadaan mangrove dijaga dan dilestarikan`,

    `Hal ini perlu kesadaran dan dukungan masyarakat untuk berpartisipasi dalam melestarikan mangrove sebagai ekosistem penyangga wilayah pesisir. Oleh karena itu, Tim KKN PPM UGM Tebar Pesona 2022 melaksanakan program kerja yang berjudul "Sosialisasi Peran Penting Mangrove Bagi Lingkungan dan Pengenalan Jenis Mangrove". Program ini bekerja sama dengan Balai Pengelola Daerah Aliran Sungai dan Hutan Lindung Ake Malamo sebagai narasumber sosialisasi. Hasil dan dampak dari terlaksananya kegiatan ini adalah meningkatnya pengetahuan masyarakat Sulamadaha mengenai peran penting mangrove bagi lingkungan, pengenalan jenis mangrove, dan cara perawatan ekosistem mangrove.`,

    `Program sosialisasi tersebut dihadiri oleh masyarakat Sulamadaha dan mendapat respon positif dari masyarakat. Pada sesi diskusi, masyarakat antusias untuk mengajukan pertanyaan mengenai pengelolaan ekosistem mangrove dan potensi pengembangan ekowisata mangrove. Hasil dan dampak dari terlaksananya kegiatan ini adalah meningkatnya pengetahuan masyarakat Sulamadaha mengenai peran penting mangrove bagi lingkungan, pengenalan jenis mangrove, dan cara perawatan ekosistem mangrove`,
  ],
};

const SosialisasiMangrove = () => {
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

export default SosialisasiMangrove;

const ArticleSection = styled.div`
  width: 100%;
`;
