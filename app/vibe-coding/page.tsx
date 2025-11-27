"use client"

import { useState } from "react"
import { ppEditorialNewUltralightItalic, inter } from "../fonts"
import Link from "next/link"
import { Code, Sparkles, Zap, Layout, Cpu, Rocket, ArrowRight, Bot, Award } from "lucide-react"
import { motion } from "framer-motion"
import Pricing from "@/components/Pricing"
import WebWorks from "@/components/WebWorks"
import MotionWeb from "@/components/MotionWeb"
import SocialMedia from "@/components/Socialmedia"
import VibeCodingSection from "@/components/VibeCodingSection"


const serviceCards = [
  {
    icon: <Code className="w-5 h-5" />,
    title: "AI-Powered Development",
    description: "Build websites and apps at ultra-speed with the latest coding AI models",
  },
  {
    icon: <Layout className="w-5 h-5" />,
    title: "UX/UI Design",
    description: "Stunning, intuitive designs crafted with AI-assisted precision and human creativity",
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "Ultra-Fast Delivery",
    description: "Get your project delivered in record time without compromising quality",
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Latest AI Models",
    description: "Leveraging cutting-edge AI coding assistants for superior code quality",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "High Performance",
    description: "Optimized, scalable solutions built with modern best practices",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Vibe-Coding Excellence",
    description: "Where speed meets quality through AI-enhanced development workflows",
  }
]

const aiModels = {
  coding: ["Claude Sonnet 4.5", "GPT-4o", "Cursor AI", "GitHub Copilot", "v0.dev", "Cline", "Aider"],
  design: ["Figma AI", "Midjourney", "DALL-E", "v0 Design", "Relume AI", "UIzard"]
}

const vibeCodingFeatures = [
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Ultra Speed",
    description: "Deliver projects in days, not months. Our AI-enhanced workflow eliminates bottlenecks and accelerates development cycles.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "High Quality",
    description: "Premium results every time. AI assistance ensures clean code, best practices, and pixel-perfect designs.",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Latest Technology",
    description: "Stay ahead with cutting-edge AI models and modern frameworks that power tomorrow's digital experiences.",
  }
]

export default function VibeCoding() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-6">
      <div className="flex flex-col gap-12">

        <VibeCodingSection />

        <div className="w-full min-h-[70vh] pt-12 pb-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${ppEditorialNewUltralightItalic.className} text-5xl md:text-7xl font-light italic text-white/90 tracking-tight text-center mb-12`}
            >
              Vibe-Coding <br />Development & Design
            </motion.h1>
            <SocialMedia />
          </div>

          <div className="bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4" />
          <div className={`${inter.className} flex flex-col gap-12 text-white/70 text-base font-light`}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center max-w-2xl mx-auto"
            >
              <p>
                Ultra-fast, high-quality website and app development powered by the latest AI coding models. Experience the future of development where speed meets excellence through vibe-coding methodologies.
              </p>
            </motion.div>
          </div>
        </div>


        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="min-h-[80vh] mt-2 mb-12 px-0"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceCards.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative rounded-xl p-6 border border-white/10 bg-gradient-to-br backdrop-blur-sm transition-all duration-300 ${hoveredCard === index ? 'shadow-lg' : ''}`}
              >
                <div className="absolute inset-0 rounded-xl border border-white/5"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-medium text-white/90 mb-2">{service.title}</h3>
                  <p className={`${inter.className} text-white/60 text-sm`}>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className={`${ppEditorialNewUltralightItalic.className} text-3xl md:text-4xl font-light italic text-white/90 mb-6`}>
                AI-Powered Stack
              </h2>
              <p className={`${inter.className} text-white/60 mb-8`}>
                Cutting-edge AI models and tools that power our ultra-fast, high-quality development process. From code generation to design assistance, we leverage the latest AI technology to deliver exceptional results.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <span>Discuss your AI-powered project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="md:w-1/2">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Bot className="w-5 h-5 text-white/70" />
                    <h3 className="text-lg font-medium text-white/90">AI Coding Models</h3>
                  </div>
                  <ul className="space-y-3">
                    {aiModels.coding.map((model, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-white/40"></div>
                        <span className={`${inter.className} text-white/70 text-sm`}>{model}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-white/70" />
                    <h3 className="text-lg font-medium text-white/90">AI Design Tools</h3>
                  </div>
                  <ul className="space-y-3">
                    {aiModels.design.map((tool, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-white/40"></div>
                        <span className={`${inter.className} text-white/70 text-sm`}>{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <MotionWeb />

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 mb-8"
        >
          <div className="mb-8 text-center">
            <h2 className={`${ppEditorialNewUltralightItalic.className} text-3xl md:text-4xl font-light italic text-white/90 mb-4`}>
              Why Vibe-Coding?
            </h2>
            <p className={`${inter.className} text-white/60 max-w-2xl mx-auto`}>
              Experience the future of development with our AI-powered approach
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {vibeCodingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={`relative rounded-xl p-8 border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm transition-all duration-300 ${hoveredFeature === index ? 'shadow-xl border-white/20' : ''
                  }`}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 transition-all duration-300 ${hoveredFeature === index ? 'bg-white/20 scale-110' : ''
                    }`}>
                    <div className="text-white/90">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className={`text-2xl font-medium text-white/90 mb-4 ${ppEditorialNewUltralightItalic.className} italic`}>
                    {feature.title}
                  </h3>
                  <p className={`${inter.className} text-white/70 text-base leading-relaxed`}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <WebWorks />

        <Pricing />

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 py-12 border-t border-white/10"
        >
          <div className="text-center">
            <h2 className={`${ppEditorialNewUltralightItalic.className} text-3xl md:text-4xl font-light italic text-white/90 mb-4`}>
              Ready to experience ultra-fast development?
            </h2>
            <p className={`${inter.className} text-white/60 max-w-2xl mx-auto mb-8`}>
              Let's build your website or app with the speed and quality only possible through vibe-coding and the latest AI models.
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
