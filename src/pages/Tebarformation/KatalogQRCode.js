import React from "react";
import styled from "styled-components";
import TebarformationPage from "../../components/common/TebarformationPage/TebarformationPage";

const articleContent = {
  title: "Pembuatan Katalog Berbasis Digitalisasi QR Code",
  information: "1 Agustus 2022",
  image: require("../../assets/TebarformationPage/katalog-qr-code/katalog-qr-code.jpeg"),
  content: [
    `Pada Program Kerja Pembuatan Menu Berbasis Digitalisasi QR Code, kami melakukan survei kepada setiap UMKM di objek wisata Tolire Ici. Hasil survei menunjukan bahwa tidak setiap UMKM memiliki papan menu, solusi dari hal tersebut sesuai dengan program kerja yang sebelumnya sudah kami rancang sebelum pemberangkatan ke lokasi KKN yakni “Pembuatan Katalog Menu Berbasis QR Code”. Dampak dan hasil dari program ini adalah menjadikan UMKM berbasis digitalisasi melalui Katalog QR Code`,

    `Progam kami berjalan mulai dari survei mendapatkan informasi menu- menu setiap warung, mengolah hasil survei menjadi Katalog dan dikonversikan menjadi QR Code yang berbeda setiap warung lalu di cetak, dan terakir penempelan QR Code pada setiap meja tiap warung bersamaan dengan penyuluhan kepada pelaku UMKM.`,

    `Program ini berjalan dengan lancar dan di sambut positif oleh pelaku UMKM Tolire Ici.`,
  ],
};

const KatalogQRCode = () => {
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

export default KatalogQRCode;

const ArticleSection = styled.div`
  width: 100%;
`;
