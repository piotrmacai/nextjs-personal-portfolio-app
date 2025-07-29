"use client"

import { useEffect } from "react"

export default function Botpress() {
  useEffect(() => {
    // Function to load a script dynamically
    const loadScript = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement("script")
        script.src = src
        script.async = true
        script.onload = () => resolve()
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`))
        document.body.appendChild(script)
      })
    }

    // Load Botpress scripts
    const initializeBotpress = async () => {
      try {
        // Load the Botpress webchat inject script
        await loadScript("https://cdn.botpress.cloud/webchat/v2.5/inject.js")
        // Load the specific chatbot configuration script
        await loadScript("https://files.bpcontent.cloud/2024/10/18/09/20241018090808-B2VMOI0Y.js")
      } catch (error) {
        console.error("Error loading Botpress scripts:", error)
      }
    }

    initializeBotpress()

    // Cleanup: Remove scripts when component unmounts
    return () => {
      const scripts = document.querySelectorAll(
        'script[src="https://cdn.botpress.cloud/webchat/v2.5/inject.js"], ' +
          'script[src="https://files.bpcontent.cloud/2024/10/18/09/20241018090808-B2VMOI0Y.js"]'
      )
      scripts.forEach((script) => script.remove())
    }
  }, [])

  return null // No UI rendering needed, as Botpress injects its own widget
}