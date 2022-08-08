import React from "react";
import styled from "styled-components";
import TebarformationPage from "../../components/common/TebarformationPage/TebarformationPage";

const articleContent = {
  title: "Pengadaan Area Konservasi Penyu Sementara",
  information: "29 Juli 2022",
  image: require("../../assets/TebarformationPage/pengadaan-area-penyu/pengadaan-area-penyu.jpg"),
  content: [
    `Keputusan untuk melakukan pengadaan area konservasi penyu sementara di Tobololo diambil karena area konservasi sebelumnya terkena abrasi akibat gelombang tinggi yang menyapu pesisir Ternate, sedangkan masa-masa ini merupakan musim penyu bertelur. Desain visualisasi mengenai rancangan pengembangan area konservasi ini juga dibuat dengan penyesuaian kondisi, luasan, dan kebutuhan area konservasi penyu dengan harapan pengembangan yang berkelanjutan kedepannya.`,

    `Dalam pengadaan area konservasi ini, kami bersinergi dengan PT Pertamina dalam penyiapan lahan serta pemenuhan kebutuhan dalam area konservasi penyu. Dengan bantuan sinergi dari PT Pertamina ini, kedepannya akan dilakukan pula pengadaan panel surya dan mesin pakan penyu otomatis. Dampak dan hasil dari terlaksananya kegiatan ini adalah terciptanya area konservasi penyu sementara dengan rancangan desain berkelanjutan `,
  ],
};

const AreaPenyu = () => {
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

export default AreaPenyu;

const ArticleSection = styled.div`
  width: 100%;
`;
