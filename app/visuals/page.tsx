"use client"

import { useState } from "react"
import { ppEditorialNewUltralightItalic, inter } from "../fonts"
import Link from "next/link"
import { Palette, Film, Camera, Monitor, PenTool, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import VisualsPricing from "@/components/VisualsPricing"
import VisualWorks from "@/components/VisualWorks"
import MotionOrbit from "@/components/Motion"

const designServices = [
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Identyfikacja Wizualna",
    description: "Spójne systemy identyfikacji komunikujące istotę Twojej marki",
    color: "from-rose-500/20 to-pink-800/10",
    examples: ["Logotypy", "Palety kolorów", "Systemy typograficzne"]
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "UX/UI Design",
    description: "Spójne systemy identyfikacji komunikujące istotę Twojej marki",
    color: "from-rose-500/20 to-pink-800/10",
    examples: ["Logotypy", "Palety kolorów", "Systemy typograficzne"]
  },
  {
    icon: <Film className="w-5 h-5" />,
    title: "Motion Design",
    description: "Kinetyczne animacje ożywiające Twoją markę",
    color: "from-blue-500/20 to-indigo-800/10",
    examples: ["Animacje UI", "Prezentacje produktów", "Filmy edukacyjne"]
  },
  {
    icon: <Camera className="w-5 h-5" />,
    title: "Produkcja Wideo",
    description: "Od koncepcji po ostateczny montaż - kompletne rozwiązania wideo",
    color: "from-amber-500/20 to-orange-800/10",
    examples: ["Reklamy", "Wywiady", "Relacje wydarzeniowe"]
  },
  {
    icon: <Monitor className="w-5 h-5" />,
    title: "Design Cyfrowy",
    description: "Interfejsy perfekcyjne w każdym pikselu, które zachwycają i konwertują",
    color: "from-purple-500/20 to-violet-800/10",
    examples: ["Projektowanie stron", "Aplikacje mobilne", "Panele dashboardów"]
  },
  {
    icon: <PenTool className="w-5 h-5" />,
    title: "Projektowanie Graficzne",
    description: "Materiały drukowane i cyfrowe o wyrazistym przekazie wizualnym",
    color: "from-emerald-500/20 to-teal-800/10",
    examples: ["Broszury", "Social media", "Prezentacje"]
  }
]

const tools = [
  { name: "Figma", category: "UI/UX" },
  { name: "Adobe Suite", category: "Design" },
  { name: "DaVinci Resolve", category: "Wideo" },
  { name: "Capcut Pro", category: "Wideo" },
  { name: "After Effects", category: "Motion" },
  { name: "Spline", category: "3D" },
  { name: "Midjourney", category: "Wizualizacje" }
]

export default function DesignServices() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-6">
      <div className="flex flex-col gap-12">

      <div className="w-full  min-h-[70vh] pt-12 pb-4">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`${ppEditorialNewUltralightItalic.className} text-5xl md:text-7xl font-light italic text-white/90 tracking-tight text-center mb-12`}
                    // style={{ fontSize: `${4.5 * headerSize}rem` }}
                    >
                    Wizualne Narracje <br />Które Zachwycają
                    </motion.h1>
                </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />
                <div
                className={`${inter.className} flex flex-col gap-12 text-white/70 text-base font-light`}
                //   style={{ fontSize: `${0.875 * textSize}rem` }`}
                >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto"
                >
                   <p className={`${inter.className} text-lg text-white/70 max-w-2xl`}>
                Tworzę przekonujące doświadczenia wizualne poprzez design, motion i wideo.
                Każdy projekt łączy wyczucie estetyki ze strategicznym myśleniem, aby stworzyć
                dzieła, które rezonują z odbiorcami i osiągają cele biznesowe.
              </p>
                </motion.div>
                </div>
        </div>

        <MotionOrbit />

        {/* Services Grid */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {designServices.map((service, index) => (
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

        <VisualWorks/>

        {/* Tools & Process */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20"
        >
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className={`${ppEditorialNewUltralightItalic.className} text-3xl md:text-4xl font-light italic text-white/90 mb-6`}>
                Zestaw Design
              </h2>
              <p className={`${inter.className} text-white/60 mb-8`}>
                Profesjonalne narzędzia, które wykorzystuję do ożywiania wizji kreatywnych:
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tools.map((tool, index) => (
                  <div key={index} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-sm font-medium text-white/90">{tool.name}</div>
                    <div className="text-xs text-white/50 mt-1">{tool.category}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="p-8 rounded-2xl bg-gradient-to-br border border-white/10 backdrop-blur-sm h-full">
                <h3 className="text-xl font-medium text-white/90 mb-4">Proces Kreatywny</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm mt-0.5">1</div>
                    <div>
                      <h4 className="font-medium text-white/80">Odkrywanie</h4>
                      <p className={`${inter.className} text-white/60 text-sm mt-1`}>Zrozumienie Twojej marki i celów</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm mt-0.5">2</div>
                    <div>
                      <h4 className="font-medium text-white/80">Rozwój Koncepcji</h4>
                      <p className={`${inter.className} text-white/60 text-sm mt-1`}>Tworzenie moodboardów i style frame'ów</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm mt-0.5">3</div>
                    <div>
                      <h4 className="font-medium text-white/80">Realizacja Design</h4>
                      <p className={`${inter.className} text-white/60 text-sm mt-1`}>Produkcja wizualiów wysokiej jakości</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm mt-0.5">4</div>
                    <div>
                      <h4 className="font-medium text-white/80">Dostawa & Iteracja</h4>
                      <p className={`${inter.className} text-white/60 text-sm mt-1`}>Udoskonalanie na podstawie feedbacku</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

          <VisualsPricing/>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 py-12 border-t border-white/10"
        >
          <div className="text-center">
            <h2 className={`${ppEditorialNewUltralightItalic.className} text-3xl md:text-4xl font-light italic text-white/90 mb-4`}>
              Gotowy, by podnieść swoją identyfikację wizualną?
            </h2>
            <p className={`${inter.className} text-white/60 max-w-2xl mx-auto mb-8`}>
              Porozmawiajmy, jak możemy wspólnie stworzyć design, który opowie Twoją unikalną historię i zachwyci odbiorców.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 transition-colors font-medium"
            >
              Rozpocznij Projekt
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  )
}