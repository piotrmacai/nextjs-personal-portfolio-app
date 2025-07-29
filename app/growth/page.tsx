"use client"

import { useState } from "react"
import { ppEditorialNewUltralightItalic, inter } from "../fonts"
import Link from "next/link"
import { Megaphone, Users, TrendingUp, MessageCircle, Target, Lightbulb, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import VisualsPricing from "@/components/VisualsPricing"
import VisualWorks from "@/components/VisualWorks"
import MotionOrbit from "@/components/Motion"

const marketingServices = [
  {
    icon: <Megaphone className="w-5 h-5" />,
    title: "Kampanie Marki",
    description: "Kompletne kampanie, które wzmacniają Twój przekaz na każdym punkcie styku",
    color: "from-cyan-500/20 to-blue-800/10",
    examples: ["Premiery produktów", "Akcje budowania świadomości", "Kampanie sezonowe"]
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Zarządzanie Społecznością",
    description: "Pielęgnuj lojalne społeczności, które 24/7 rekomendują Twoją markę",
    color: "from-emerald-500/20 to-teal-800/10",
    examples: ["Social listening", "Skrypty angażowania", "Kuracja UGC"]
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Płatne Media",
    description: "Strategie oparte na danych, które maksymalizują ROAS na każdej platformie",
    color: "from-amber-500/20 to-orange-800/10",
    examples: ["Reklamy Meta & TikTok", "Google Performance Max", "Whitelisting influencerów"]
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "Strategia Treści",
    description: "Kalendarze treści, które zatrzymują scroll oparte na psychologii platform",
    color: "from-purple-500/20 to-violet-800/10",
    examples: ["Reels & Shorts", "Opowieści karuzelowe", "Meme marketing"]
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Partnerstwa Influencerów",
    description: "Autentyczne współprace, które przekształcają twórców w silniki sprzedaży",
    color: "from-rose-500/20 to-pink-800/10",
    examples: ["Tiers nano do macro", "Kody wydajnościowe", "Lejki afiliacyjne"]
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Growth Hacking",
    description: "Szybkie eksperymenty, które odblokowują skalowalne kanały pozyskiwania",
    color: "from-indigo-500/20 to-purple-800/10",
    examples: ["Pętle wiralowe", "Mechaniki airdrop", "Gamifikacja listy oczekujących"]
  }
]

const tools = [
  { name: "Meta Business Suite", category: "Reklamy & Insights" },
  { name: "TikTok Ads Manager", category: "Płatne Social" },
  { name: "Hootsuite", category: "Planowanie" },
  { name: "Sprout Social", category: "Analityka" },
  { name: "Flick", category: "Badanie Hashtagów" },
  { name: "Canva Pro", category: "Tworzenie Treści" },
  { name: "Brandwatch", category: "Listening" }
]

export default function MarketingServices() {
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
                    >
                    Historie Social-First <br />Które Sprzedają
                    </motion.h1>
                </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />
                <div
                className={`${inter.className} flex flex-col gap-12 text-white/70 text-base font-light`}
                >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto"
                >
                   <p className={`${inter.className} text-lg text-white/70 max-w-2xl`}>
                Przekształcam feedy w lejki dzięki kreatywności zatrzymującej scroll i targetowaniu opartemu na danych.
                Każdy post, story i kampania jest zaprojektowany, by wywołać konwersacje, budować społeczności i napędzać przychód.
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
            {marketingServices.map((service, index) => (
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
                Growth Stack
              </h2>
              <p className={`${inter.className} text-white/60 mb-8`}>
                Technologia i taktyki, które wykorzystuję do hakowania uwagi i skalowania społeczności:
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
                <h3 className="text-xl font-medium text-white/90 mb-4">Framework Wzrostu</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm mt-0.5">1</div>
                    <div>
                      <h4 className="font-medium text-white/80">Inteligencja Audiencji</h4>
                      <p className={`${inter.className} text-white/60 text-sm mt-1`}>Dogłębna analityka & mapowanie psychograficzne</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm mt-0.5">2</div>
                    <div>
                      <h4 className="font-medium text-white/80">Inżynieria Haka</h4>
                      <p className={`${inter.className} text-white/60 text-sm mt-1`}>3-sekundowe testy kreatywnego zatrzymania scrolla</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm mt-0.5">3</div>
                    <div>
                      <h4 className="font-medium text-white/80">Iteracja & Skalowanie</h4>
                      <p className={`${inter.className} text-white/60 text-sm mt-1`}>Optymalizacja w czasie rzeczywistym & realokacja budżetu</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm mt-0.5">4</div>
                    <div>
                      <h4 className="font-medium text-white/80">Pętle Retencji</h4>
                      <p className={`${inter.className} text-white/60 text-sm mt-1`}>Zautomatyzowane sekwencje nurture & korzyści lojalnościowe</p>
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
              Gotowy, by uczynić swoją markę nie ignorable?
            </h2>
            <p className={`${inter.className} text-white/60 max-w-2xl mx-auto mb-8`}>
              Zbudujmy kampanie oparte na danych, które przekształcą przypadkowych scrollujących w superfani, a superfani w klientów.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transition-colors font-medium"
            >
              Umów Rozmowę Strategiczną
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  )
}