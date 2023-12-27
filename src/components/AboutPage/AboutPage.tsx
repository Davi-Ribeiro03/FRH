import React from "react";
import AboutImg1 from "../../assets/AboutImg1.png";
import AboutImg2 from "../../assets/AboutImg2.png";
import "./AboutPage.css";
import DivisionPage from "../DivisionPage/DivisionPage";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <DivisionPage titulo="SOBRE NÓS" />

      <motion.div
        className="aboutInfo"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section className="aboutInfoLeft">
          Bem-vindo à FRH, sua parceira dedicada para cuidados fisioterapêuticos
          personalizados. Nossa equipe altamente qualificada está pronta para
          atendê-lo com excelência, oferecendo tratamentos tanto em nossa
          clínica moderna quanto no conforto do seu lar. Com agendamento
          simplificado através do nosso aplicativo ou presencialmente,
          garantimos conveniência em cada passo da sua jornada de recuperação.
        </section>
        <section className="aboutInfoRight">
          <img src={AboutImg1} alt="Imagem de fisioterapeuta em consulta" />
        </section>
      </motion.div>

      <motion.div
        className="aboutInfo2"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section className="aboutInfoLeft">
          Na FRH, acreditamos na importância da flexibilidade. Seja para
          reabilitação pós-operatória, lesões esportivas ou cuidados específicos
          para condições crônicas, adaptamos nossos serviços às suas
          necessidades. Priorizamos sua saúde e bem-estar, proporcionando uma
          experiência de cuidado completa, onde quer que você esteja. Sua
          jornada para uma vida mais saudável e ativa começa agora. Agende sua
          consulta e permita-nos cuidar de você.
        </section>
        <section className="aboutInfoRight">
          <img src={AboutImg2} alt="Imagem de fisioterapeuta em consulta" />
        </section>
      </motion.div>
    </div>
  );
};

export default AboutPage;
