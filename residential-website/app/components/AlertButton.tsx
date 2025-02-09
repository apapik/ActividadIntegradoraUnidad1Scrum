"use client"

import { useState } from "react"

export default function AlertButton() {
  const [isAlertSent, setIsAlertSent] = useState(false)

  const handleAlert = () => {
    // Here you would typically send an alert to the management
    console.log("Alert sent to management")
    setIsAlertSent(true)
    setTimeout(() => setIsAlertSent(false), 3000) // Reset after 3 seconds
  }

  return (
    <button
      onClick={handleAlert}
      className={`fixed bottom-4 right-4 p-4 rounded-full ${
        isAlertSent ? "bg-green-500" : "bg-red-500"
      } text-white font-bold transition-colors duration-300`}
    >
      {isAlertSent ? "¡Alerta Enviada!" : "¡Alerta!"}
    </button>
  )
}

