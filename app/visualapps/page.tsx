// app/visuals-apps/page.tsx
"use client"

import { useState } from "react"
import { ppEditorialNewUltralightItalic, inter } from "@/app/fonts"
import Link from "next/link"
import { Camera, Film, Zap, Settings, ArrowRight, Sparkles, Wand2, Factory, Diamond } from "lucide-react"
import { motion } from "framer-motion"
import Contact from "@/components/ContantComponent" // Assuming this component is available

// --- LOCAL DEFINITIONS FOR THIS PAGE ---

const visualServiceCards = [
    {
        icon: <Wand2 className="w-5 h-5" />,
        title: "Rapid AI Product Video Generation",
        description: "Creating dynamic, cinematic product spots and promotional videos, ready in hours, optimized for every social media platform.",
        details: ["4K Resolution", "Automatic Social Media Optimization", "Custom AI Voiceovers/Narrations"]
    },
    {
        icon: <Camera className="w-5 h-5" />,
        title: "High-End AI Product Photography",
        description: "Generating ultra-realistic product photos in any context or environment—impossible to achieve in a traditional studio—minimizing traditional session costs.",
        details: ["Realistic lighting and shadows", "Any background/scene (e.g., Mars, underwater)", "A/B variant generation at scale"]
    },
    {
        icon: <Factory className="w-5 h-5" />,
        title: "Custom AI Generation Applications",
        description: "Deployment of dedicated web applications/systems that integrate advanced AI models to generate visual content directly within your workflow.",
        details: ["API Integration (OpenAI, Gemini, others)", "'Low-code' interfaces for your team", "Model training on your data (style, brand consistency)"]
    },
]

const processSteps = [
    { step: 1, title: "Briefing & Concept", description: "Defining goals, style, color palette, and the desired output (image/video)." },
    { step: 2, title: "Model Configuration", description: "Selecting and fine-tuning AI models and generation parameters for unique project requirements." },
    { step: 3, title: "Rapid Generation", description: "Executing the first batch of visual content. The process takes minutes to a few hours." },
    { step: 4, title: "Review and Adaptation", description: "Iterative adjustments and customization based on your feedback until full satisfaction." },
    { step: 5, title: "Deployment/Delivery", description: "Delivery of final files or deployment of the custom visual generation application." },
]


export default function VisualsApps() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null)

    return (
        <div className="w-full max-w-6xl mx-auto px-2 sm:px-6 mt-20 md:mt-20 sm:mt-4">
            <div className="flex flex-col gap-12">

                {/* --- HERO SECTION: VISUAL AI --- */}
                <div className="w-full min-h-[60vh] pt-12 pb-4">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className={`${ppEditorialNewUltralightItalic.className} text-5xl md:text-7xl font-light italic text-white/90 tracking-tight mb-8`}
                        >
                            AI Visual Studio: Speed & Customization
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className={`${inter.className} text-white/70 text-xl font-light max-w-3xl mx-auto`}
                        >
                            Transform your products into **stunning visuals** and **dynamic videos** in record time, using dedicated artificial intelligence models. Produce content 100x faster than a traditional studio.
                        </motion.p>
                        <div className="mt-8">
                            <Link
                                href="#contact-form"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-purple-600 text-white border border-purple-600 hover:bg-purple-700 transition-colors font-medium shadow-xl shadow-purple-600/20"
                            >
                                Start Your Visual Project <Zap className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-transparent via-white/20 to-transparent my-10" />

                {/* --- CORE VISUAL SERVICES --- */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="min-h-[70vh] mt-12 md:mt-16 mb-6 px-0"
                >
                    <h2 className={`${ppEditorialNewUltralightItalic.className} text-3xl md:text-4xl font-light italic text-white/90 mb-12 text-center`}>
                        My AI Visual Content Services
                    </h2>
                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                        {visualServiceCards.map((service, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                                className={`relative rounded-xl p-8 border border-white/10 bg-gradient-to-br from-gray-900/50 to-black/30 backdrop-blur-sm transition-all duration-300 ${hoveredCard === index ? 'shadow-2xl shadow-purple-500/10 border-purple-500/30' : ''}`}
                            >
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-medium text-white/90 mb-3">{service.title}</h3>
                                    <p className={`${inter.className} text-white/60 text-base mb-6`}>{service.description}</p>

                                    <ul className="space-y-3 pt-4 border-t border-white/10">
                                        {service.details.map((detail, dIndex) => (
                                            <li key={dIndex} className="flex items-center gap-3">
                                                <Diamond className="w-4 h-4 text-purple-400 flex-shrink-0" />
                                                <span className={`${inter.className} text-white/70 text-sm`}>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* --- CUSTOM APP SECTION (Deep Dive) --- */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-16 mb-16 py-10 rounded-xl bg-gray-900/20 border border-purple-500/20 px-6 sm:px-10"
                >
                    <div className="flex flex-col md:flex-row items-start gap-10">
                        <Settings className="w-12 h-12 text-cyan-400 flex-shrink-0 mt-2" />
                        <div className="flex-grow">
                            <h3 className={`${ppEditorialNewUltralightItalic.className} text-3xl font-light italic text-white/90 mb-4`}>
                                Dedicated Generation Apps for Individual Goals
                            </h3>
                            <p className={`${inter.className} text-white/70 text-lg mb-6`}>
                                When standard tools fall short, I build **fast, personalized web applications** (Next.js) that serve as your internal **visual content generator**. From automatically generating 100 A/B variants for an ad to producing brand-consistent materials at scale.
                            </p>
                            <ul className="space-y-3">
                                <li className={`${inter.className} text-white/70`}><span className="font-bold text-cyan-400">Rapid Deployment:</span> Applications are ready to use in weeks, not months.</li>
                                <li className={`${inter.className} text-white/70`}><span className="font-bold text-cyan-400">Total Control:</span> Full customization of the interface and business logic to fit your specific marketing/sales process.</li>
                                <li className={`${inter.className} text-white/70`}><span className="font-bold text-cyan-400">Scalability:</span> Systems based on cloud infrastructure, ready to handle large volumes of generation.</li>
                            </ul>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-cyan-600 text-white hover:bg-cyan-700 transition-colors"
                            >
                                Discuss App Implementation <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </motion.section>

                {/* --- PROCESS SECTION --- */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mt-12 mb-12"
                >
                    <h2 className={`${ppEditorialNewUltralightItalic.className} text-3xl md:text-4xl font-light italic text-white/90 mb-12 text-center`}>
                        My Workflow Process
                    </h2>
                    <div className="relative">
                        {/* Line connecting steps (desktop only) */}
                        <div className="hidden md:block absolute left-4 top-0 bottom-0 w-0.5 bg-white/10" />

                        {processSteps.map((item, index) => (
                            <div key={index} className="flex gap-6 mb-10 relative">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold border-2 border-white/5 shadow-lg relative z-10">
                                    {item.step}
                                </div>
                                <div className="flex-grow pt-1 pb-4">
                                    <h3 className="text-xl font-medium text-white/90 mb-2">{item.title}</h3>
                                    <p className={`${inter.className} text-white/60`}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* --- CONTACT FORM --- */}
                <div id="contact-form">
                    <Contact />
                </div>

            </div>
        </div>
    )
}