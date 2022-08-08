import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "swiper/css/bundle";

import App from "./App";
import Tourism from "./pages/Tourism";
import Geospatial from "./pages/Geospatial";
import VirtualTour from "./pages/VirtualTour";
import KotaRempah from "./pages/KotaRempah";
import NotFound from "./pages/NotFound";

import Sulamadaha from "./components/Sulamadaha/Sulamadaha";
import Takome from "./components/Takome/Takome";
import Tobololo from "./components/Tobololo/Tobololo";

import GlobalStyle from "./styles/GlobalStyle";
import PlaceDescription from "./components/common/PlaceDescription";
import Mangrove from "./pages/Tebarformation/Mangrove";
import SekolahBencana from "./pages/Tebarformation/SekolahBencana";
import DataMangrove from "./pages/Tebarformation/DataMangrove";
import KatalogQRCode from "./pages/Tebarformation/KatalogQRCode";
import SosialisasiMangrove from "./pages/Tebarformation/SosialisasiMangrove";
import SustainableFashion from "./pages/Tebarformation/SustainableFashion";
import TernateYouthCamp from "./pages/Tebarformation/TernateYouthCamp";
import WorkshopEcoprint from "./pages/Tebarformation/WorkshopEcoprint";
import AreaPenyu from "./pages/Tebarformation/AreaPenyu";

import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer";
import ScrollToTop from "./hooks/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <>
      <GlobalStyle />
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route index element={<App />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/virtualtour" element={<VirtualTour />} />
          <Route path="/geospatial" element={<Geospatial />} />
          <Route path="/kotarempah" element={<KotaRempah />} />

          <Route path="sulamadaha">
            <Route index element={<Sulamadaha />} />
            <Route path=":locationPath" element={<PlaceDescription />} />
          </Route>
          <Route path="takome">
            <Route index element={<Takome />} />
            <Route path=":locationPath" element={<PlaceDescription />} />
          </Route>
          <Route path="tobololo">
            <Route index element={<Tobololo />} />
            <Route path=":locationPath" element={<PlaceDescription />} />
          </Route>

          <Route path="/tebarformation" element={<Mangrove />} />

          <Route path="/tebarformation">
            <Route path="penanaman-mangrove" element={<Mangrove />} />
            <Route path="data-mangrove" element={<DataMangrove />} />
            <Route path="sekolah-bencana" element={<SekolahBencana />} />
            <Route path="katalog-qr-code" element={<KatalogQRCode />} />
            <Route
              path="sosialisasi-mangrove"
              element={<SosialisasiMangrove />}
            />
            <Route
              path="sustainable-fashion"
              element={<SustainableFashion />}
            />
            <Route path="ternate-youth-camp" element={<TernateYouthCamp />} />
            <Route path="workshop-ecoprint" element={<WorkshopEcoprint />} />
            <Route path="pengadaan-area-penyu" element={<AreaPenyu />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </>
  </BrowserRouter>
);
