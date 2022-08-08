import GlobalStyle from "./styles/GlobalStyle";
import "./index.css";
import React from "react";

import Home from "./pages/Home";


function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
