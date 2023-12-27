import React from "react";
import HomePageImg from "../../assets/HomePageImg.png";
import "./HomePage.css";
import { CgChevronDoubleUp } from "react-icons/cg";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="containerHomePage">
      <section className="info">
        <motion.section
          className="homePageLeft"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p>
            Restaurando movimentos, transformando vidas: sua jornada para o
            bem-estar começa aqui.
          </p>

          <button>
            <a href="google.com">Baixe nosso App</a>
          </button>
        </motion.section>
        <section className="homePageRight">
          <img
            src={HomePageImg}
            alt="Imagem ilustrativa de um fisioterapeuta com uma paciente"
          />
        </section>
      </section>

      <section className="seta">
        <CgChevronDoubleUp className="setaImg" size="50" />
      </section>
    </div>
  );
};

export default HomePage;
