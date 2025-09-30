import { Link } from "react-router-dom";
import "./Cabecalho.css"

export default function Cabecalho(){
    return(
        <>
            <header className="bg-500 rounded-2xl">
                    Home
            </header>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/Integrantes"}>Integrantes</Link>
                <Link to={"/Contato"}>Contato</Link>
                <Link to={"/FAQ"}>Perguntas Frequentes</Link>
                <Link to={"/Chatbot"}>ChatBot</Link>
                <Link to={"/Solucao"}>Nossa Solução</Link>

            </nav>
        </>
    )
}