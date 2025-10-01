export default function Chatbot() {
  return (
    <div className="p-6 max-w-2xl mx-auto flex flex-col">
      <h2 className="text-3xl font-bold text-center m-6 text-blue-900"> ChatBot - Hospital das Clínicas</h2>

      <div className="flex-1 border-4 border-blue-900 rounded-md p-4 bg-white flex flex-col overflow-y-auto">
        <div className="mb-2 flex justify-end">
          <span className="bg-emerald-500 text-white px-4 py-2 rounded-md inline-block max-w-xs">
            Olá, vocês realizam consultas online?
          </span>
        </div>

        <div className="m-2 flex justify-start">
          <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md inline-block max-w-xs">
            Olá! Sim, oferecemos consultas online em diversas especialidades.
          </span>
        </div>

        <div className="m-2 flex justify-end">
          <span className="bg-emerald-500 text-white px-4 py-2 rounded-md inline-block max-w-xs">
            E como posso agendar?
          </span>
        </div>

        <div className="m-2 flex justify-start">
          <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md inline-block max-w-xs">
            Você pode agendar diretamente pelo nosso site oficial, na aba de Consultas.
          </span>
        </div>
      </div>

      <div className="m-4 flex">
        <input type="text" placeholder="Digite sua mensagem..." className="flex-1 border border-gray-600 px-4 py-2"/>
        <button className="bg-emerald-500 text-white px-4 py-2 hover:bg-emerald-400">Enviar</button>
      </div>
    </div>
  )
}
