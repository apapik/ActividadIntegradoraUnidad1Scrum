import { Suspense } from "react"
import AlertButton from "../components/AlertButton"

export default function AnnouncementsPage() {
  const announcements = [
    {
      id: 1,
      title: "Cuotas de Mantenimiento",
      date: "2025-03-15",
      content: "La nueva cuota de Mantenimiento entra en vigor el 20 de marzo.",
    },
    {
      id: 2,
      title: "Reunión de Vecinos",
      date: "2025-03-25",
      content: "Se convoca a todos los residentes a la reunión anual el 25 de marzo a las 19:00 en el salón comunal.",
    },
    {
      id: 3,
      title: "Nuevo Sistema de Seguridad",
      date: "2025-04-01",
      content:
        "A partir del 1 de abril, se implementará un nuevo sistema de seguridad en todas las entradas del residencial.",
    },
  ]

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Comunicados</h1>
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{announcement.title}</h2>
            <p className="text-gray-600 mb-2">Fecha: {announcement.date}</p>
            <p>{announcement.content}</p>
          </div>
        ))}
      </div>
      <Suspense fallback={<div>Cargando...</div>}>
        <AlertButton />
      </Suspense>
    </div>
  )
}

