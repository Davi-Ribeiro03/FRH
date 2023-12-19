import React from 'react'
import HomePageImg from "../../assets/HomePageImg.png"
import "./HomePage.css"
import { CgChevronDoubleUp } from "react-icons/cg";

const HomePage = () => {
  return (
    <div className='containerHomePage'>
      <section className='info'>
        <section className='homePageLeft'>
            <p>
            Restaurando movimentos, transformando vidas: sua jornada para o bem-estar começa aqui.
            </p>

            <button><a href="google.com">Baixe nosso App</a></button>
        </section>
        <section className='homePageRight'> 
            <img src={HomePageImg} alt="Imagem ilustrativa de um fisioterapeuta com uma paciente" />
        </section>
      </section>

      <section className='seta'>
        <CgChevronDoubleUp className='setaImg' size="50" />

      </section>
    </div>
  )
}

export default HomePage