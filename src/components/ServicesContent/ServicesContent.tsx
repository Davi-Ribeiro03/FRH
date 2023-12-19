import React from 'react'
import "./ServicesContent.css"

type ServicesContentType = {
    nome: string;
    img: string;
}

const ServicesContent = ({nome,img}:ServicesContentType) :JSX.Element=> {
  return (
    <div className='servicesContent'>
        <img src={img} alt={nome} />
        <p>{nome}</p>
    </div>
  )
}

export default ServicesContent