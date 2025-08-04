"use client"

import { useEffect } from "react"

// Extend the window type to include `voiceflow`
declare global {
  interface Window {
    voiceflow?: {
      chat: {
        load: (config: {
          verify: { projectID: string }
          url: string
          versionID: string
          voice?: {
            url: string
          }
        }) => void
      }
    }
  }
}

export default function Voiceflow() {
  useEffect(() => {
    const scriptUrl = "https://cdn.voiceflow.com/widget-next/bundle.mjs"

    const script = document.createElement("script")
    script.src = scriptUrl
    script.type = "text/javascript"
    script.async = true

    script.onload = () => {
      if (window.voiceflow?.chat?.load) {
        window.voiceflow.chat.load({
          verify: { projectID: "66fd9286a5b369f00abef5fb" },
          url: "https://general-runtime.voiceflow.com",
          versionID: "production",
          voice: {
            url: "https://runtime-api.voiceflow.com",
          },
        })
      } else {
        console.warn("Voiceflow chat not available on window")
      }
    }

    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return null // Voiceflow UI is injected by the script
}
