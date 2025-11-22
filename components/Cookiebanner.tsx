"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const checkConsent = () => {
            const storedConsent = localStorage.getItem("cookieConsent")

            if (!storedConsent) {
                // No consent stored, show banner after delay
                const timer = setTimeout(() => setIsVisible(true), 1000)
                return () => clearTimeout(timer)
            }

            try {
                const parsedConsent = JSON.parse(storedConsent)
                const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000
                const now = Date.now()

                // Check if consent is older than 30 days
                if (now - parsedConsent.timestamp > thirtyDaysInMs) {
                    setIsVisible(true)
                }
            } catch (error) {
                // If parsing fails (e.g. old string format), treat as invalid and show banner
                setIsVisible(true)
            }
        }

        checkConsent()
    }, [])

    const handleAccept = () => {
        const consentData = {
            consent: true,
            timestamp: Date.now()
        }
        localStorage.setItem("cookieConsent", JSON.stringify(consentData))
        setIsVisible(false)
    }

    const handleDecline = () => {
        const consentData = {
            consent: false,
            timestamp: Date.now()
        }
        localStorage.setItem("cookieConsent", JSON.stringify(consentData))
        setIsVisible(false)
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-4 right-4 z-50 max-w-sm w-[calc(100%-2rem)]"
                >
                    <div className="bg-[#1a1a1a]/95 backdrop-blur-md border border-white/10 rounded-lg p-6 shadow-2xl shadow-black/50">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-white font-medium text-lg">Cookie Preferences</h3>
                            <button
                                onClick={handleDecline}
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

                        <div className="flex gap-3">
                            <button
                                onClick={handleAccept}
                                className="flex-1 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                            >
                                Accept
                            </button>
                            <button
                                onClick={handleDecline}
                                className="flex-1 bg-white/5 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/10 transition-colors border border-white/10"
                            >
                                Decline
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
