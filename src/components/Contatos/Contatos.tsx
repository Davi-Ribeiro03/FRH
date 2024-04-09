
import "./Contatos.css";
import DivisionPage from "../DivisionPage/DivisionPage";
import ContatosContent from "../ContatosContent/ContatosContent";
import Wpp from "../../assets/whatsapp.png";
import Face from "../../assets/facebook.png";
import Insta from "../../assets/instagram.png";
import Telefone from "../../assets/telefone.png";

const Contatos = () => {
  return (
    <div className="contatos">
      <DivisionPage titulo="Contatos" />
      <ContatosContent icone={Wpp} texto="(85) 98888-8888" />
      <ContatosContent icone={Face} texto="clinica_FRH" />
      <ContatosContent icone={Insta} texto="clinica_FRH" />
      <ContatosContent icone={Telefone} texto="3298-8888" />
    </div>
  );
};

export default Contatos;
