"use client"

import { useState } from "react"
import { ppEditorialNewUltralightItalic, inter } from "../fonts"
import Link from "next/link"
import { Palette, FileText, Layers, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import VibeCodingSection from "@/components/VibeCodingSection"
import VisualWorks from "@/components/VisualWorks"
import MotionOrbit from "@/components/Motion"

const creativeServices = [
  {
    icon: <Palette className="w-5 h-5" />,
    title: "AI Visual Design",
    description: "Stunning visuals and brand identities generated and refined with advanced AI tools.",
    examples: ["Brand Identity", "Marketing Assets", "UI Design"]
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Content Systems",
    description: "Scalable content generation pipelines that maintain your brand voice.",
    examples: ["Copywriting", "Blog Systems", "Social Content"]
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Design Systems",
    description: "Comprehensive design languages and component libraries for consistent products.",
    examples: ["Figma Variables", "Component Sets", "Documentation"]
  }
]

export default function AISystemsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-6">
      <div className="flex flex-col gap-12">
        {/* Hero Section */}
        <div className="w-full min-h-[60vh] pt-12 pb-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${ppEditorialNewUltralightItalic.className} text-5xl md:text-7xl font-light italic text-white/90 tracking-tight text-center mb-12`}
            >
              AI-Powered <br /> Creative Systems
            </motion.h1>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />
          <div className={`${inter.className} flex flex-col gap-12 text-white/70 text-base font-light`}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center max-w-2xl mx-auto"
            >
              <p className={`${inter.className} text-lg text-white/70 max-w-2xl`}>
                I create complete design, visual, and content systems powered by AI. From stunning aesthetics to fully functional applications, I build the engines that drive your digital presence.
              </p>
            </motion.div>
          </div>
        </div>

        <MotionOrbit />

        {/* Vibe Coding Component (The "Apps" part) */}
        <VibeCodingSection />

        {/* Creative Services Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12"
        >
          <div className="text-center mb-12">
            <h2 className={`${ppEditorialNewUltralightItalic.className} text-3xl md:text-4xl font-light italic text-white/90 mb-4`}>
              Design & Content
            </h2>
            <p className={`${inter.className} text-white/60`}>
              Beyond code, I engineer the creative assets that bring your brand to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {creativeServices.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`rounded-2xl relative p-6 border border-white/10 backdrop-blur-sm transition-all duration-300 ${hoveredCard === index ? 'shadow-lg' : ''}`}
              >
                <div className="absolute inset-0 rounded-2xl border border-white/5"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-medium text-white/90 mb-2">{service.title}</h3>
                  <p className={`${inter.className} text-white/60 text-sm mb-4`}>{service.description}</p>
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <ul className="flex flex-wrap gap-2">
                      {service.examples.map((example, i) => (
                        <li key={i} className="text-xs px-2 py-1 bg-white/5 rounded-md text-white/70">
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Visual Works */}
        <VisualWorks />

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 py-12 border-t border-white/10"
        >
          <div className="text-center">
            <h2 className={`${ppEditorialNewUltralightItalic.className} text-3xl md:text-4xl font-light italic text-white/90 mb-4`}>
              Ready to build your system?
            </h2>
            <p className={`${inter.className} text-white/60 max-w-2xl mx-auto mb-8`}>
              Let’s combine design, content, and code into a powerful AI-driven engine for your brand.
            </p>
            <Link
              href="https://ainsider.notion.site/1bcb65ddefcf805d9f28f545e3680986?pvs=105"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black hover:bg-white/90 transition-colors font-medium"
              target="_blank" rel="noopener noreferrer"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  )
}