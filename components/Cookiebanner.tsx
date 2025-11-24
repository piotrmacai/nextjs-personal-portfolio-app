"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

type ConsentCategories = {
  necessary: true
  analytics: boolean
  marketing: boolean
}

type ConsentPayload = {
  consent: boolean | null
  categories: ConsentCategories
  timestamp: number
  expiresAt: number
  version: number
}

const CONSENT_KEY = "cookieConsent"
const CONSENT_VERSION = 1
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000

function readConsent(): ConsentPayload | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as ConsentPayload
    if (!parsed.version) return null
    return parsed
  } catch {
    return null
  }
}

function writeConsent(payload: ConsentPayload) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(payload))
  try {
    window.dispatchEvent(new CustomEvent("consentchange", { detail: payload }))
  } catch { }
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showPrefs, setShowPrefs] = useState(false)
  const [categories, setCategories] = useState<ConsentCategories>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    let timer: number | undefined

    const evaluate = () => {
      const c = readConsent()
      const now = Date.now()
      if (!c) {
        setIsVisible(true)
        return
      }
      if (c.version !== CONSENT_VERSION || now >= c.expiresAt) {
        setIsVisible(true)
        return
      }
      setIsVisible(false)
    }

    // Small delay to avoid layout shift
    timer = window.setTimeout(evaluate, 200)

    return () => {
      if (timer) window.clearTimeout(timer)
    }
  }, [])

  const persist = (next: ConsentPayload) => {
    writeConsent(next)
    setIsVisible(false)
  }

  const handleAcceptAll = () => {
    const now = Date.now()
    persist({
      consent: true,
      categories: { necessary: true, analytics: true, marketing: true },
      timestamp: now,
      expiresAt: now + THIRTY_DAYS_MS,
      version: CONSENT_VERSION,
    })
  }

  const handleRejectAll = () => {
    const now = Date.now()
    persist({
      consent: false,
      categories: { necessary: true, analytics: false, marketing: false },
      timestamp: now,
      expiresAt: now + THIRTY_DAYS_MS,
      version: CONSENT_VERSION,
    })
  }

  const handleSavePrefs = () => {
    const now = Date.now()
    const anyOptional = categories.analytics || categories.marketing
    persist({
      consent: anyOptional,
      categories,
      timestamp: now,
      expiresAt: now + THIRTY_DAYS_MS,
      version: CONSENT_VERSION,
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 right-50 z-50 max-w-sm w-[calc(100%-2rem)]"
        >
          <div className="bg-[#1a1a1a]/95 backdrop-blur-md border border-white/10 rounded-lg p-6 shadow-2xl shadow-black/50">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-white font-medium text-lg">Cookie Preferences</h3>
              <button
                onClick={handleRejectAll}
                className="text-white/40 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <p className="text-sm text-white/60 mb-6 leading-relaxed">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
              <Link href="/privacy-policy" className="text-white/90 hover:text-white underline ml-1 transition-colors">
                Learn more
              </Link>
            </p>

            {showPrefs ? (
              <div className="space-y-3 mb-4">
                <label className="flex items-center justify-between gap-3 text-sm text-white">
                  <span>Necessary</span>
                  <input type="checkbox" checked readOnly className="opacity-60" />
                </label>
                <label className="flex items-center justify-between gap-3 text-sm text-white">
                  <span>Analytics</span>
                  <input
                    type="checkbox"
                    checked={categories.analytics}
                    onChange={(e) => setCategories((c) => ({ ...c, analytics: e.target.checked }))}
                  />
                </label>
                <label className="flex items-center justify-between gap-3 text-sm text-white">
                  <span>Marketing</span>
                  <input
                    type="checkbox"
                    checked={categories.marketing}
                    onChange={(e) => setCategories((c) => ({ ...c, marketing: e.target.checked }))}
                  />
                </label>
              </div>
            ) : null}

            <div className="flex gap-3">
              <button
                onClick={handleAcceptAll}
                className="flex-1 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                Accept all
              </button>
              <button
                onClick={handleRejectAll}
                className="flex-1 bg-white/5 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-colors border border-white/10"
              >
                Reject all
              </button>
            </div>

            <button
              onClick={() => setShowPrefs((v) => !v)}
              className="mt-3 w-full text-center text-xs text-white/70 hover:text-white underline"
            >
              {showPrefs ? "Hide preferences" : "Manage preferences"}
            </button>

            {showPrefs ? (
              <button
                onClick={handleSavePrefs}
                className="mt-2 w-full bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-colors border border-white/10"
              >
                Save preferences
              </button>
            ) : null}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
