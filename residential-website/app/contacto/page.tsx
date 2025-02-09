import { Suspense } from "react"
import AlertButton from "../components/AlertButton"

export default function ContactPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contacto y Buzón</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Información de Contacto</h2>
          <p>Dirección: Calle Prueba #123, Guadalajara</p>
          <p>Teléfono: (123) 456-7890</p>
          <p>Email: info@residenciallosrobles.com</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Buzón de Mensajes</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">
                Nombre:
              </label>
              <input type="text" id="name" name="name" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Email:
              </label>
              <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">
                Mensaje:
              </label>
              <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
      <Suspense fallback={<div>Cargando...</div>}>
        <AlertButton />
      </Suspense>
    </div>
  )
}

