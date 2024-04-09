
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
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          nome="Reabilitação Pós-Operatória"
          img={Reabilitacao}
        />
        <ServicesContent
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          nome="Tratamento de Lesões Esportivas"
          img={Tratamento}
        />
        <ServicesContent
          nome="Fisioterapia Neurológica"
          img={FisioNeuro}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
        <ServicesContent
          nome="Fisioterapia Ortopédica"
          img={FisioOrtopedica}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <ServicesContent
          nome="Avaliação e Tratamento da Dor Crônica"
          img={Avaliacao}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
        <ServicesContent
          nome="Pilates Terapêutico"
          img={Pilates}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        />
      </div>
    </div>
  );
};

export default Services;
