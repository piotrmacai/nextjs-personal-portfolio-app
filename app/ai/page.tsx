"use client"
import { useState } from "react"
import { ppEditorialNewUltralightItalic, inter } from "../fonts"
import Link from "next/link"
import { BrainCircuit, Bot, Zap, Cpu, Network, ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import Agents from "@/components/Agents"
import AiLogo from "@/components/ui/AiLogo"
import AgentsPricing from "@/components/AgentsPricing"

const aiServices = [
  {
    icon: <BrainCircuit className="w-5 h-5" />,
    title: "Dedykowani Agenci AI",
    description: "Inteligentni asystenci dopasowani do Twoich procesów i logiki biznesowej",
    color: "from-purple-500/20 to-indigo-800/10",
    features: ["Oparte na LLM", "Możliwości multi-modalne", "Integracje z API"]
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: "Rozwiązania Chatbotowe",
    description: "Konwersacyjna AI poprawiająca obsługę klienta i doświadczenia użytkownika",
    color: "from-blue-500/20 to-cyan-800/10",
    features: ["Przetwarzanie języka naturalnego", "Świadomość kontekstu", "Wielokanałowe wdrożenie"]
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Automatyzacja Procesów",
    description: "Automatyzacja zasilana AI, oszczędzająca czas i zmniejszająca błędy",
    color: "from-emerald-500/20 to-teal-800/10",
    features: ["n8n/Make.com", "Integracja z Zapier", "Własne skrypty"]
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Rozwój wspierany przez AI",
    description: "Zwiększanie wydajności zespołu dzięki narzędziom do kodowania AI",
    color: "from-amber-500/20 to-orange-800/10",
    features: ["Cursor AI", "Replit AI", "GitHub Copilot"]
  },
  {
    icon: <Network className="w-5 h-5" />,
    title: "Audyty i Strategie",
    description: "Kompleksowe audyty i strategie wdrożenia AI dla indywidualnych potrzeb oraz wymagań",
    color: "from-pink-500/20 to-rose-800/10",
    features: ["Langchain", "Flowise", "Botpress"]
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Generowanie Treści AI",
    description: "Automatyczne tworzenie treści o jakości zbliżonej do ludzkiej",
    color: "from-violet-500/20 to-fuchsia-800/10",
    features: ["Integracja z GPT-4", "Ton marki", "Optymalizacja pod SEO"]
  }
]

const frameworks = [
  { name: "GPT z API", category: "LLM" },
  { name: "Anthropic Claude", category: "LLM" },
  { name: "Mistral", category: "LLM" },
  { name: "MCP", category: "Orkiestracja" },
  { name: "Voiceflow", category: "Agenty AI" },
  { name: "LlamaIndex", category: "Dane" },
  { name: "Langchain", category: "Orkiestracja" },
  { name: "Flowise", category: "Agenty AI" },
  { name: "Botpress", category: "Agenty AI" },
  { name: "n8n", category: "Automatyzacja" },
  { name: "Make", category: "Automatyzacja" },
  { name: "Huggingface", category: "LLM" }
]

export default function AIServices() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-6">
      <div className="flex flex-col gap-12">
        <div className="w-full min-h-[70vh] pt-12 pb-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${ppEditorialNewUltralightItalic.className} text-5xl md:text-7xl font-light italic text-white/90 tracking-tight text-center mb-12`}
            >
              Inteligentna Automatyzacja <br /> z Agentami AI
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
                Projektuję i wdrażam zaawansowane agenty AI oraz systemy automatyzacji, które transformują procesy biznesowe. Od chatbotów po złożone wieloagentowe przepływy pracy – łączę potencjał sztucznej inteligencji z praktycznym zastosowaniem.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Grid usług AI */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiServices.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)} 
                className={`relative rounded-xl p-6 border border-white/10 backdrop-blur-sm transition-all duration-300 ${hoveredCard === index ? 'shadow-lg' : ''}`}
              >
                <div className="absolute inset-0 rounded-xl border border-white/5"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-medium text-white/90 mb-2">{service.title}</h3>
                  <p className={`${inter.className} text-white/60 text-sm mb-4`}>{service.description}</p>
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <ul className="flex flex-wrap gap-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-xs px-2 py-1 bg-white/5 rounded-md text-white/70">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Przykłady zastosowań */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20"
        >
          <h2 className={`${ppEditorialNewUltralightItalic.className} text-3xl md:text-4xl font-light italic text-white/90 mb-8`}>
            Moje Zasoby i Aplikacje AI
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative rounded-2xl overflow-hidden border border-white/10 min-h-64">
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/80 z-10"></div>
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
              <div className="relative z-20 p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                    <Zap className="w-5 h-5 text-white/80" />
                  </div>
                  <h3 className="text-2xl font-medium text-white/90 mb-2">Katalog Agentów i Narzędzi AI</h3>
                  <p className={`${inter.className} text-white/60 mb-6`}>Kompleksowa biblioteka agentów, modeli i narzędzi AI z ponad 500 wysokiej jakości zasobów.</p>
                </div>
                <Link 
                  href="https://ainsider.tools"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white group-hover:underline"
                >
                  <span>Wykonaj</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="group relative rounded-2xl overflow-hidden border border-white/10 min-h-64">
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/10 to-black/80 z-10"></div>
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
              <div className="relative z-20 p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                    <Zap className="w-5 h-5 text-white/80" />
                  </div>
                  <h3 className="text-2xl font-medium text-white/90 mb-2">Ainsider.co</h3>
                  <p className={`${inter.className} text-white/60 mb-6`}>Rozwiązania cyfrowe oparte na AI dla biznesu. Zbudujmy razem Twoje własne.</p>
                </div>
                <Link 
                  href="https://github.com/piotrmacai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white group-hover:underline"
                >
                  <span>Ainsider</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div> 
            </div>

            <div className="group relative rounded-2xl overflow-hidden border border-white/10 min-h-64">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/10 to-black/80 z-10"></div>
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
              <div className="relative z-20 p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                    <Bot className="w-5 h-5 text-white/80" />
                  </div>
                  <h3 className="text-2xl font-medium text-white/90 mb-2">Bezpłatne szablony Agentów AI</h3>
                  <p className={`${inter.className} text-white/60 mb-6`}>Odkryj kolekcję innowacyjnych aplikacji i agentów AI zaprojektowanych, by usprawniać różne procesy i zwiększać produktywność.</p>
                </div>
                <Link 
                  href="https://github.com/piotrmacai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white group-hover:underline"
                >
                  <span>Wykonaj</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </motion.section>

        <Agents/>

        {/* Stos technologiczny */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20"
        >
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className={`${ppEditorialNewUltralightItalic.className} text-3xl md:text-4xl font-light italic text-white/90 mb-6`}>
                Stack Technologiczny
              </h2>
              <p className={`${inter.className} text-white/60 mb-8`}>
                Pracuję z wiodącymi frameworkami i platformami AI, by dostarczać niezawodne rozwiązania:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {frameworks.map((framework, index) => (
                  <div key={index} className="rounded-2xl p-4 bg-white/5 border border-white/10">
                    <div className="text-sm font-medium text-white/90">{framework.name}</div>
                    <div className="text-xs text-white/50 mt-1">{framework.category}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="p-8 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent border border-white/10 backdrop-blur-sm h-full">
                <h3 className="text-xl font-medium text-white/90 mb-4">Proces Wdrożenia</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm mt-0.5">1</div>
                    <div>
                      <h4 className="font-medium text-white/80">Analiza wymagań</h4>
                      <p className={`${inter.className} text-white/60 text-sm mt-1`}>Zrozumienie Twoich procesów i punktów bólu</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm mt-0.5">2</div>
                    <div>
                      <h4 className="font-medium text-white/80">Projektowanie agenta</h4>
                      <p className={`${inter.className} text-white/60 text-sm mt-1`}>Architektura optymalnego rozwiązania AI</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm mt-0.5">3</div>
                    <div>
                      <h4 className="font-medium text-white/80">Rozwój</h4>
                      <p className={`${inter.className} text-white/60 text-sm mt-1`}>Tworzenie i trenowanie agentów AI</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm mt-0.5">4</div>
                    <div>
                      <h4 className="font-medium text-white/80">Integracja</h4>
                      <p className={`${inter.className} text-white/60 text-sm mt-1`}>Łączenie z istniejącymi systemami</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <AgentsPricing/>

        {/* Sekcja CTA */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 py-12 border-t border-white/10"
        >
          <div className="text-center">
            <h2 className={`${ppEditorialNewUltralightItalic.className} text-3xl md:text-4xl font-light italic text-white/90 mb-4`}>
              Gotowy na automatyzację z AI?
            </h2>
            <p className={`${inter.className} text-white/60 max-w-2xl mx-auto mb-8`}>
              Porozmawiajmy, jak agenty AI mogą przekształcić Twoje operacje biznesowe i interakcje z klientami.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transition-colors font-medium"
            >
              Umów się na konsultację AI
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  )
}