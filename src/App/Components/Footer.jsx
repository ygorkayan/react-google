import React from "react";
import "./CSS/Footer.css";

function criarLink(conteudo, endereço, ultimo = false) {
  return (
    <a
      className={`footer-texto footer-link ${ultimo ? "" : "mr-3"}`}
      href={`#${endereço}`}
    >
      {conteudo}
    </a>
  );
}

export default (props) => {
  return (
    <footer>
      <div className="footer-barra footer-primeira-barra">
        <span className="footer-texto">Brasil</span>
      </div>
      <div className="footer-barra">
        <span className="footer-texto">
          {criarLink("Publicidade", "endreço")}
          {criarLink("Negocios", "endreço")}
          {criarLink("Sobre", "endreço")}
          {criarLink("Como funciona a Pesquisa", "endereço", true)}
        </span>

        <span className="footer-texto float-right">
          {criarLink("Privacidade", "endreço")}
          {criarLink("Termos", "endreço")}
          {criarLink("Configurações", "endreço", true)}
        </span>
      </div>
    </footer>
  );
};
