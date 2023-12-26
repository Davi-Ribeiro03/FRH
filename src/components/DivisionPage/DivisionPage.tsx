import React from "react";
import "./DivisionPage.css";

const DivisionPage = ({ titulo }: { titulo: string }) => {
  return (
    <div className="division">
      <h2 className="titulo" id="sobreNos">
        {titulo}
      </h2>
      <div className="linha"></div>
    </div>
  );
};

export default DivisionPage;
