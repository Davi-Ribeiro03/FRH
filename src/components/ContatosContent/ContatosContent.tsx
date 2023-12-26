import React from "react";
import "./ContatosContent.css";

const ContatosContent = ({
  icone,
  texto,
}: {
  icone: string;
  texto: string;
}) => {
  return (
    <div className="contatosContent">
      <img src={icone} alt="" />
      <p>{texto}</p>
    </div>
  );
};

export default ContatosContent;
