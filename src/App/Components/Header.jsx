import React, { useState } from "react";
import "./CSS/Header.css";
import QuadradoNormal from "./img/quadrado-normal.png";
import QuadradoClicado from "./img/quadrado-clicado.png";

function criarLink(conteudo, endereco) {
  return (
    <a href={`#${endereco}`} className="text-dark mr-3">
      {conteudo}
    </a>
  );
}

function criarQuadrado(estado, setEstado, endereço) {
  function toggleImg() {
    if (estado === QuadradoNormal) {
      setEstado(QuadradoClicado);
    } else {
      setEstado(QuadradoNormal);
    }
  }

  const imagem = (
    <img
      className="header-quadrado"
      alt="imagem quadrada"
      src={estado}
      onMouseEnter={() => toggleImg()}
      onMouseLeave={() => toggleImg()}
    ></img>
  );
  return criarLink(imagem, endereço);
}

function criarCirculo(endereço) {
  const circulo = <span className="header-circulo"></span>;
  return criarLink(circulo, endereço);
}

export default (props) => {
  const [img, setImg] = useState(QuadradoNormal);

  return (
    <header>
      {criarLink("Gmail", "endreço")}
      {criarLink("Imagens", "endreço")}
      {criarQuadrado(img, setImg, "endreço")}
      {criarCirculo("endreço")}
    </header>
  );
};
