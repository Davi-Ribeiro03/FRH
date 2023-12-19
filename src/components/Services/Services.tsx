import React from 'react'
import "./Services.css"
import "../ServicesContent/ServicesContent"
import ServicesContent from '../ServicesContent/ServicesContent'
import Reabilitacao from "../../assets/Reabilitacao.png"

const Services = () => {
  return (
    <div className='services'>
        <h2 className="servicesTitulo">
            Serviços
        </h2>
        <div className='linha'></div>

        <div className="content">
        <ServicesContent nome="Reabilitação Pós-Operatória" img={Reabilitacao}/>
        <ServicesContent nome="Tratamento de Lesões Esportivas" img={Reabilitacao}/>
        <ServicesContent nome="Reabilitação Pós-Operatória" img={Reabilitacao}/>
        <ServicesContent nome="Reabilitação Pós-Operatória" img={Reabilitacao}/>
        <ServicesContent nome="Reabilitação Pós-Operatória" img={Reabilitacao}/>
        <ServicesContent nome="Reabilitação Pós-Operatória" img={Reabilitacao}/>
        <ServicesContent nome="Reabilitação Pós-Operatória" img={Reabilitacao}/>

        </div>

    </div>
  )
}

export default Services