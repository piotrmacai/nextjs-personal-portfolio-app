"use client"

import { useState } from "react"
import { ppEditorialNewUltralightItalic, inter } from "@/app/fonts"
import Link from "next/link"
import { Code, Zap, Database, Cpu, ArrowRight, Sparkles, Layout, Video, Bot, Terminal, TrendingUp, MonitorPlay, Gem } from "lucide-react"
import { motion } from "framer-motion"
import Pricing from "@/components/Pricing" // Still imported
import PortfolioSection from "@/components/PortfolioSection"
import SocialMedia from "@/components/Socialmedia"
import VibeCoding from "@/components/VibeCodingSection"
import Contact from "@/components/ContantComponent"
import PortfolioGrid from "@/components/PortfolioGrid"


const serviceCards = [
  {
    icon: <Code className="w-5 h-5" />,
    title: "Full Stack Web & App Development",
    description: "High-performance websites, custom web apps, and modern e-commerce solutions with Next.js and React.",
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: "AI Agents & Custom Automations",
    description: "Building intelligent systems for customer service, data analysis, and workflow automation for your business.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "AI-Powered Visual Content (Video/Image)",
    description: "Stunning visuals, promotional videos, and creative assets generated with the gen.macai.cloud studio.",
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Cloud & Database Integration",
    description: "Robust backend infrastructure, scalable cloud solutions (AWS, Vercel), and seamless data management.",
  },
  {
    icon: <Terminal className="w-5 h-5" />,
    title: "System Architecture & Consulting",
    description: "Designing scalable, secure, and maintainable software architectures for long-term growth.",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Performance & SEO Optimization",
    description: "Ensuring top-tier speed, accessibility, and search engine rankings for maximum reach.",
  }
]

// Updated tech stack to reflect Full Stack & AI focus
const techStack = {
  frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
  backendAi: ["Node.js / Express", "Python & AI/ML Libraries", "LangChain / LLMs", "PostgreSQL / MongoDB", "Headless CMS (Sanity, Strapi)"],
  aiagents: ["Langchain", "n8n", "Voiceflow", "Botpress", "Huggingface", "OpenAI", "Google Gemini", "VibeCoding", "Lovable"]
}

// Renamed the default export function to reflect the main page
export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-6 mt-20 md:mt-20 sm:mt-4">
      <div className="flex flex-col gap-12">

        {/* --- HERO SECTION --- */}
        <div className="w-full min-h-[70vh] pt-12 pb-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${ppEditorialNewUltralightItalic.className} text-5xl md:text-7xl font-light italic text-white/90 tracking-tight text-center mb-12`}
            >
              Full Stack Development & <br />Intelligent AI Systems
            </motion.h1>
            <SocialMedia />
          </div>

          <div className="bg-gradient-to-r from-transparent via-white/20 to-transparent my-10" />
          <div className={`${inter.className} flex flex-col gap-12 text-white/70 text-base font-light`}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <p>
                I am a Full Stack Developer specializing in crafting bespoke, high-performance web systems, **integrating custom AI agents** and automations to revolutionize business operations. Let's build the future, from sleek interfaces to scalable backend intelligence.
              </p>
              <div className="mt-8">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  Explore Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- CORE SERVICES SECTION --- */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="min-h-[80vh] mt-12 md:mt-16 mb-6 px-0"
        >
          <h2 className={`${ppEditorialNewUltralightItalic.className} text-3xl md:text-4xl font-light italic text-white/90 mb-10 text-center`}>
            What I Deliver
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceCards.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative rounded-xl p-6 border border-white/10 bg-gradient-to-br backdrop-blur-sm transition-all duration-300 ${hoveredCard === index ? 'shadow-lg bg-white/5' : ''}`}
              >
                <div className="absolute inset-0 rounded-xl border border-white/5"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-medium text-white/90 mb-2">{service.title}</h3>
                  <p className={`${inter.className} text-white/60 text-sm`}>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>


        {/* --- VIBE CODING SECTION --- */}

        <VibeCoding />


        {/* --- PORTFOLIO SECTION (Web is a primary category) --- */}
        <PortfolioGrid />
        {/* <PortfolioSection
                    initialFilter="all"
                    showFilters={true}
                    title="Featured Projects & Creations"
                /> */}


        {/* --- TECH STACK SECTION (Updated) --- */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/4">
              <h2 className={`${ppEditorialNewUltralightItalic.className} text-3xl md:text-4xl font-light italic text-white/90 mb-6`}>
                Technology Stack & AI Expertise
              </h2>
              <p className={`${inter.className} text-white/60 mb-8`}>
                Leveraging the latest in modern web development and cutting-edge AI frameworks to deliver scalable, intelligent solutions.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <span>Discuss your system requirements</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="md:w-3/4">

              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <h3 className="text-lg font-medium text-white/90 mb-4 flex items-center gap-2"><Layout className="w-5 h-5" /> Frontend & UI/UX</h3>
                  <ul className="space-y-3">
                    {techStack.frontend.map((tech, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                        <span className={`${inter.className} text-white/70`}>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <h3 className="text-lg font-medium text-white/90 mb-4 flex items-center gap-2"><Cpu className="w-5 h-5" /> Backend, Data & AI</h3>
                  <ul className="space-y-3">
                    {techStack.backendAi.map((tech, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                        <span className={`${inter.className} text-white/70`}>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <h3 className="text-lg font-medium text-white/90 mb-4 flex items-center gap-2"><Cpu className="w-5 h-5" /> Backend, Data & AI</h3>
                  <ul className="space-y-3">
                    {techStack.aiagents.map((tech, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                        <span className={`${inter.className} text-white/70`}>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* --- AI STUDIO PROMO SECTION (NEW) --- */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 mb-12 py-10 rounded-xl bg-gray-900/10 border border-gray-500/20 px-6 sm:px-10"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* <Gem className="w-12 h-12 text-purple-400 flex-shrink-0" /> */}
            <div>
              <h3 className={`${ppEditorialNewUltralightItalic.className} text-3xl font-light italic text-white/90 mb-3`}>
                Creative AI Studio
              </h3>
              <p className={`${inter.className} text-white/70`}>
                Go beyond code. Access the <span className="font-bold">gen.macai.cloud</span> studio for on-demand generation of stunning visual content—high-quality videos, images, and creative assets powered by advanced generative AI models.
              </p>
            </div>
            <Link
              href="https://gen.macai.cloud"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-500 text-white hover:bg-gray-600 transition-colors flex-shrink-0"
            >
              Visit AI Studio <MonitorPlay className="w-4 h-4" />
            </Link>
          </div>
        </motion.section>

        {/* --- PRICING SECTION --- */}
        {/* <Pricing /> */}


        <Contact />

        {/* --- CTA SECTION (Updated text) --- */}
        {/* <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mt-20 py-12 border-t border-white/10"
                >
                    <div className="text-center">
                        <h2 className={`${ppEditorialNewUltralightItalic.className} text-3xl md:text-4xl font-light italic text-white/90 mb-4`}>
                            Ready to build your next intelligent system?
                        </h2>
                        <p className={`${inter.className} text-white/60 max-w-2xl mx-auto mb-8`}>
                            Let's connect to discuss your vision for web development, custom AI integration, and business automation.
                        </p>
                        <Link
                            href="https://ainsider.notion.site/1bcb65ddefcf805d9f28f545e3680986?pvs=105" // Assuming this is your project brief link
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black hover:bg-white/90 transition-colors font-medium"
                            target="_blank" rel="noopener noreferrer"
                        >
                            Start Your Project
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </motion.section> */}

      </div>
    </div>
  )
}