import React from "react";
import Header from "./Components/Header";
import Pesquisa from "./Components/Pesquisa"
import Footer from "./Components/Footer";

export default (props) => {
  return (
    <React.Fragment>
      <Header />
      <Pesquisa />
      <Footer />
    </React.Fragment>
  );
};
