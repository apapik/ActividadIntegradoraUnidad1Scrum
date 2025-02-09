import { Suspense } from "react"
import AlertButton from "../components/AlertButton"

export default function PaymentsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Pasarela de Pagos</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
            Monto a Pagar
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="amount"
            type="number"
            placeholder="Monto en $"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="concept">
            Concepto
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="concept"
            type="text"
            placeholder="Ej: Cuota de mantenimiento"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Proceder al Pago
          </button>
        </div>
      </div>
      <p className="text-center text-gray-500 text-xs">
        &copy;2025 Residencial Los Robles. Todos los pagos son procesados de forma segura.
      </p>
      <Suspense fallback={<div>Cargando...</div>}>
        <AlertButton />
      </Suspense>
    </div>
  )
}

