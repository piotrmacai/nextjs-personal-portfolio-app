"use client"

import { useState } from "react"
import { ppEditorialNewUltralightItalic, inter } from "../fonts"
import Link from "next/link"
import { Wand2, Image as ImageIcon, Video, Type, Cpu, Layers, ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import VisualsPricing from "@/components/VisualsPricing"
import VisualWorks from "@/components/VisualWorks"
import MotionOrbit from "@/components/Motion"
import SocialMedia from "@/components/Socialmedia"

const aiServices = [
  {
    icon: <ImageIcon className="w-5 h-5" />,
    title: "AI Image Generation",
    description: "Stunning, photorealistic visuals and custom illustrations tailored to your brand identity.",
    color: "from-cyan-500/20 to-blue-800/10",
    examples: ["Product photography", "Brand assets", "Concept art"]
  },
  {
    icon: <Video className="w-5 h-5" />,
    title: "AI Video Production",
    description: "Engaging video content created at speed, from text-to-video to AI avatars and motion.",
    color: "from-purple-500/20 to-violet-800/10",
    examples: ["Social reels", "Explainer videos", "Dynamic ads"]
  },
  {
    icon: <Type className="w-5 h-5" />,
    title: "Generative Copywriting",
    description: "Persuasive, SEO-optimized text that captures your voice and converts readers.",
    color: "from-emerald-500/20 to-teal-800/10",
    examples: ["Blog posts", "Ad copy", "Email sequences"]
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Custom AI Models",
    description: "Fine-tuned models trained on your specific brand style for consistent, high-quality output.",
    color: "from-amber-500/20 to-orange-800/10",
    examples: ["Style training", "Voice cloning", "Asset libraries"]
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Content Automation",
    description: "Streamlined workflows to generate, format, and distribute content across platforms.",
    color: "from-rose-500/20 to-pink-800/10",
    examples: ["Bulk creation", "Multi-format adaptation", "Scheduling"]
  },
  {
    icon: <Wand2 className="w-5 h-5" />,
    title: "Creative Strategy",
    description: "Data-backed direction on how to leverage AI tools for maximum market impact.",
    color: "from-indigo-500/20 to-purple-800/10",
    examples: ["Trend analysis", "Prompt engineering", "Visual identity"]
  }
]

const tools = [
  { name: "Midjourney", category: "Image Generation" },
  { name: "Runway Gen-2", category: "Video Synthesis" },
  { name: "ChatGPT-4", category: "Copy & Strategy" },
  { name: "Stable Diffusion", category: "Custom Models" },
  { name: "ElevenLabs", category: "Voice Synthesis" },
  { name: "Topaz Video AI", category: "Enhancement" },
  { name: "Leonardo.ai", category: "Asset Creation" }
]

export default function AIContentServices() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-6 mt-24 md:mt-20 sm:mt-12">
      <div className="flex flex-col gap-12">

        <div className="w-full min-h-[70vh] pt-12 pb-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${ppEditorialNewUltralightItalic.className} text-5xl md:text-7xl font-light italic text-white/90 tracking-tight text-center mb-12`}
            >
              AI-Powered <br />Content Creation
            </motion.h1>
            <SocialMedia />
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
                Unleash the power of generative AI to create stunning visuals, compelling copy, and engaging videos at scale.
                I blend cutting-edge technology with human creativity to deliver premium content that sets your brand apart.
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
            {aiServices.map((service, index) => (
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

        <VisualWorks />

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
                The AI Stack
              </h2>
              <p className={`${inter.className} text-white/60 mb-8`}>
                The state-of-the-art tools I orchestrate to produce world-class content:
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
                <h3 className="text-xl font-medium text-white/90 mb-4">Production Workflow</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm mt-0.5">1</div>
                    <div>
                      <h4 className="font-medium text-white/80">Concept & Prompting</h4>
                      <p className={`${inter.className} text-white/60 text-sm mt-1`}>Translating creative vision into precise AI instructions.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm mt-0.5">2</div>
                    <div>
                      <h4 className="font-medium text-white/80">Generation & Iteration</h4>
                      <p className={`${inter.className} text-white/60 text-sm mt-1`}>Rapidly producing and refining assets for perfection.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm mt-0.5">3</div>
                    <div>
                      <h4 className="font-medium text-white/80">Human Polish</h4>
                      <p className={`${inter.className} text-white/60 text-sm mt-1`}>Expert editing, color grading, and curation.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm mt-0.5">4</div>
                    <div>
                      <h4 className="font-medium text-white/80">Scale & Distribution</h4>
                      <p className={`${inter.className} text-white/60 text-sm mt-1`}>Formatting and deploying content across all channels.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <VisualsPricing />

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 py-12 border-t border-white/10"
        >
          <div className="text-center">
            <h2 className={`${ppEditorialNewUltralightItalic.className} text-3xl md:text-4xl font-light italic text-white/90 mb-4`}>
              Ready to scale your content creation?
            </h2>
            <p className={`${inter.className} text-white/60 max-w-2xl mx-auto mb-8`}>
              Let's leverage the power of AI to build a content engine that drives growth and engagement.
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