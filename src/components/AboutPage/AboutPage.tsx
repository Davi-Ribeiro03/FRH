import React from 'react'
import AboutImg1 from "../../assets/AboutImg1.png"
import AboutImg2 from "../../assets/AboutImg2.png"
import "./AboutPage.css"

const AboutPage = () => {
  return (
    <div className='aboutPage'>
        <h2 className='titulo' id='sobreNos'>SOBRE NÓS</h2>
      <div className='linha'></div>

        <div className='aboutInfo'>
            <section className='aboutInfoLeft'>Bem-vindo à FRH, sua parceira dedicada para cuidados fisioterapêuticos personalizados. Nossa equipe altamente qualificada está pronta para atendê-lo com excelência, oferecendo tratamentos tanto em nossa clínica moderna quanto no conforto do seu lar. Com agendamento simplificado através do nosso aplicativo ou presencialmente, garantimos conveniência em cada passo da sua jornada de recuperação.</section>
            <section className="aboutInfoRight">
                <img src={AboutImg1} alt="Imagem de fisioterapeuta em consulta" />
            </section>
        </div>

        <div className='aboutInfo2'>
            <section className='aboutInfoLeft'>Bem-vindo à FRH, sua parceira dedicada para cuidados fisioterapêuticos personalizados. Nossa equipe altamente qualificada está pronta para atendê-lo com excelência, oferecendo tratamentos tanto em nossa clínica moderna quanto no conforto do seu lar. Com agendamento simplificado através do nosso aplicativo ou presencialmente, garantimos conveniência em cada passo da sua jornada de recuperação.</section>
            <section className="aboutInfoRight">
                <img src={AboutImg1} alt="Imagem de fisioterapeuta em consulta" />
            </section>
        </div>
    </div>
  )
}

export default AboutPage