import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <header className="bg-blue-900 text-white">
      <div className="px-6 py-4 flex items-center justify-center">
        <h1 className="text-2xl font-bold">Hospital das Clínicas</h1>
      </div>

      <nav className="bg-emerald-500 px-6 py-3">
        <ul className="flex flex-col md:flex-row gap-4 justify-center">
          <li>
            <Link className="hover:text-gray-300" to={"/"}>Home</Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" to={"/Integrantes"}>Integrantes</Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" to={"/Contato"}>Contato</Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" to={"/FAQ"}>FAQ</Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" to={"/Chatbot"}>ChatBot</Link>
          </li>
          <li>
            <Link className="hover:text-gray-300" to={"/Solucao"}>Nossa Solução</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
