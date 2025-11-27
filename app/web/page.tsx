"use client"

import { useState } from "react"
import { ppEditorialNewUltralightItalic, inter } from "../fonts"
import Link from "next/link"
import { Code, Globe, Smartphone, Zap, Database, Cpu, ArrowRight, Sparkles, Palette, Layout, MousePointer, Layers, Command, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import PortfolioPage from "../portfolio/page"
import Pricing from "@/components/Pricing"
import WebWorks from "@/components/WebWorks"
import SocialMedia from "@/components/Socialmedia"
import VibeCodingSection from "@/components/VibeCodingSection"
import PortfolioSection from "@/components/PortfolioSection"


const serviceCards = [
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Design & UI/UX",
    description: "Consistent look and intuitive navigation on every device",
  },
  {
    icon: <Code className="w-5 h-5" />,
    title: "Web Development",
    description: "Custom websites and apps tailored to your needs",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "CMS Systems",
    description: "Easy content management with WordPress, Sanity, or other platforms",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "SEO & Optimization",
    description: "Optimization for top rankings and lightning-fast loading",
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Integrations & API",
    description: "Connect with external services and automate processes",
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "AI Solutions",
    description: "Personalized content, chatbots, and AI-powered support",
  }
]

const techStack = {
  frontend: ["JavaScript", "TypeScript", "Next.js", "React", "Tailwind CSS", "Framer Motion", "Three.js", "CSS Frameworks", "No/Low-code tools"],
  backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Python", "Rest API", "CMS Platforms"]
}

export default function Web() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-6 mt-20 md:mt-20 sm:mt-4">
      <div className="flex flex-col gap-12">

        <div className="w-full min-h-[70vh] pt-12 pb-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${ppEditorialNewUltralightItalic.className} text-5xl md:text-7xl font-light italic text-white/90 tracking-tight text-center mb-12`}
            >
              Web & E-commerce <br />Development
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
                I create modern, high-performance websites that attract and convert. From WordPress to Next.js and headless CMS – I deliver solutions tailored to you that elevate your brand and drive real results.
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



        <PortfolioSection
          initialFilter="web"
          showFilters={true}
          title="Web & E-commerce Development"
        />



        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className={`${ppEditorialNewUltralightItalic.className} text-3xl md:text-4xl font-light italic text-white/90 mb-6`}>
                Technology Stack
              </h2>
              <p className={`${inter.className} text-white/60 mb-8`}>
                Modern tools and frameworks I use to deliver high-quality digital products.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <span>Discuss your technical needs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="md:w-1/2">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <h3 className="text-lg font-medium text-white/90 mb-4">Frontend</h3>
                  <ul className="space-y-3">
                    {techStack.frontend.map((tech, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full"></div>
                        <span className={`${inter.className} text-white/70`}>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <h3 className="text-lg font-medium text-white/90 mb-4">Backend & CMS</h3>
                  <ul className="space-y-3">
                    {techStack.backend.map((tech, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full"></div>
                        <span className={`${inter.className} text-white/70`}>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <Pricing />

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 py-12 border-t border-white/10"
        >
          <div className="text-center">
            <h2 className={`${ppEditorialNewUltralightItalic.className} text-3xl md:text-4xl font-light italic text-white/90 mb-4`}>
              Ready to level up your online presence?
            </h2>
            <p className={`${inter.className} text-white/60 max-w-2xl mx-auto mb-8`}>
              Let's talk about how we can create a web solution that truly supports your business.
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

