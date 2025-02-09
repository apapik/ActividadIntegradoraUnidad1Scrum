import { Suspense } from "react"
import Link from "next/link"
import AlertButton from "./components/AlertButton"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Residencial Los Robles
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:underline">
                Contacto
              </Link>
            </li>
            <li>
              <Link href="/pagos" className="hover:underline">
                Pagos
              </Link>
            </li>
            <li>
              <Link href="/comunicados" className="hover:underline">
                Comunicados
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a Residencial Los Robles</h1>
        <p className="mb-4">Disfrute de una vida tranquila y cómoda en nuestra comunidad residencial.</p>
        <Suspense fallback={<div>Cargando...</div>}>
          <AlertButton />
        </Suspense>
      </main>

      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2025 Residencial Los Robles. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

