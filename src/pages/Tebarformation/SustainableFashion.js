import React from "react";
import styled from "styled-components";
import TebarformationPage from "../../components/common/TebarformationPage/TebarformationPage";

const articleContent = {
  title:
    "Pembuatan Konsep Pakaian Sustainable Cultural Fashion dan Pelatihan Penjahit PKK",
  information: "25 Juli 2022",
  image: require("../../assets/TebarformationPage/sustainable-fashion/sustainable-fashion-2.jpeg"),
  content: [
    `Program Pembuatan Konsep Pakaian Sustainable Cultural Fashion dan Pelatihan Penjahit PKK ini bekerja sama dengan komunitas Upcycle Product yang bernama Stitch It Up Bali. Dimana merka merupakan komunitas yang mengkampanyekan fashion berbasis bahan daur ulang.`,

    `Kami berkomunikasi sejak kami masih di Yogyakarta untuk merancang model busana yang nantinya akan di tampilkan saat Fashion show pda acara Festival Tebar Pesona. Untuk model busananya sendiri terdapat 6 pasang putra putri busana batik tradisional dan 6 pasang putra putri busana penari daerah Ternate. Sehingga ketika di total jumlahnya terdapat 12 busana yang telah dirancang oleh kami, Tim stitch it up dan bantuan dari Tri Upcycle.`,

    `Awalnya kami mencari kain kain perca batik dari penjahit sekitar Surakarta, dan menggunakan batik khas Ternate yang kemudian di kirimkan ke Bali dan di olah mitra kerjasama kami yakni Stitch it Up untuk kombinasikan menjadi 12 busana fashion show.`,

    `Setelah busana jadi busana tersebut kami bawa ke Ternate lalu dibagikan kepada 3 kelurahan lokasi KKN kami untuk dilakukan Foto model putra putri daerah , dan kemudian di Pakai untuk peragaan busana saat puncak acara Festival Tebar Pesona.`,

    `Selain pembutan konsep busana untuk keberlanjytannya kami merancang program kerja prlatihan jahit kepada ibu ibu PKK kelurahan Takome yang mana bertujuan untuk membentuk komunitas jahit dengan berbekal pelatihan jahit kain perca yang dapat dimanfaatkan menjadi berbagai produk sehingga dapat menjadikan ibu ibu PKK lebih produktif. Hasil dan dampak dari terlaksananya program ini adalah dapat mendorong masyarakat setempat untuk sadar akan peluang kewirausahaan menggunakan bahan daur ulang kain perca dengan melihat potensi kekayaan alam dan budaya Ternate Barat yang dapat dijadikan bahan inspirasi usaha`,
  ],
};

const SustainableFashion = () => {
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

export default SustainableFashion;

const ArticleSection = styled.div`
  width: 100%;
`;
