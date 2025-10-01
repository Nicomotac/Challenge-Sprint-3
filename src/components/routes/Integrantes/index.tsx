export default function Integrantes() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">
        Conheça os Integrantes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="border-4 border-blue-800 rounded-md p-4 flex flex-col items-center bg-white">
          <img src="/placeholder-caio.jpg" alt="foto caio" className="w-32 h-32 object-cover rounded-md mb-4 border-2 border-gray-500"
          />
          <h3 className="text-lg font-bold text-black">Caio Kenzo Tayra</h3>
          <p className="text-sm text-gray-600">RM: 562979 1</p>
          <p className="text-sm text-gray-600">Turma: 1TDSPI</p>
        </div>

        <div className="border-4 border-blue-800 rounded-md p-4 flex flex-col items-center bg-white">
          <img src="/integrantes-enzo.jpg" alt="foto enzo" className="w-32 h-32 object-cover rounded-md mb-4 border-2 border-gray-500"
          />
          <h3 className="text-lg font-bold text-gray-800">Enzo Vieira Bernardini</h3>
          <p className="text-sm text-gray-600">RM: 563000</p>
          <p className="text-sm text-gray-600">Turma: 1TDSPI</p>
        </div>

        <div className="border-4 border-blue-800 rounded-md p-4 flex flex-col items-center bg-white">
          <img src="/placeholder-nicolas.jpg" alt="foto nicolas" className="w-32 h-32 object-cover rounded-md mb-4 border-2 border-gray-500"
          />
          <h3 className="text-lg font-bold text-gray-800">Nicolas Mota Cândido</h3>
          <p className="text-sm text-gray-600">RM: 561857</p>
          <p className="text-sm text-gray-600">Turma: 1TDSPI</p>
        </div>

      </div>
    </div>
  )
}