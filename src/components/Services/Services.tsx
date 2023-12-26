import React from "react";
import "./Services.css";
import "../ServicesContent/ServicesContent";
import ServicesContent from "../ServicesContent/ServicesContent";
import Reabilitacao from "../../assets/Reabilitacao.png";
import Tratamento from "../../assets/TratamentoDeLesoes.png";
import FisioNeuro from "../../assets/FisioterapiaNeurologica.png";
import FisioOrtopedica from "../../assets/FisioterapiaOrtopedica.png";
import Avaliacao from "../../assets/AvaliacaoETratamento.png";
import Pilates from "../../assets/PilatesTerapeutico.png";
import DivisionPage from "../DivisionPage/DivisionPage";

const Services = () => {
  return (
    <div className="services">
      <DivisionPage titulo="Serviços" />

      <div className="content">
        <ServicesContent
          nome="Reabilitação Pós-Operatória"
          img={Reabilitacao}
        />
        <ServicesContent
          nome="Tratamento de Lesões Esportivas"
          img={Tratamento}
        />
        <ServicesContent nome="Fisioterapia Neurológica" img={FisioNeuro} />
        <ServicesContent nome="Fisioterapia Ortopédica" img={FisioOrtopedica} />
        <ServicesContent
          nome="Avaliação e Tratamento da Dor Crônica"
          img={Avaliacao}
        />
        <ServicesContent nome="Pilates Terapêutico" img={Pilates} />
      </div>
    </div>
  );
};

export default Services;
