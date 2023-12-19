import Logo from "../../assets/Logo.png"
import "./Header.css"

export default function Header(){
 return(
    <header className="header">
        <img src={Logo} alt="Logo da empresa F.R.H" />

        <ul>
            <li><a href="#sobreNos">SOBRE NÓS</a></li>
            <li><a href="#servicos">SERVIÇOS</a></li>
            <li><a href="#contatos">CONTATOS</a></li>
        </ul>
    </header>
 );
}