"use client"

import { ppEditorialNewUltralightItalic, inter } from "@/app/fonts"
import { Sparkles, Zap, Database, Layout, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export default function VibeCodingSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full my-24"
        >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 md:p-12 items-start">

                    {/* Left Column: The Pitch */}
                    <div className="flex flex-col gap-6">
                        <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-200 text-sm font-medium">
                            <Sparkles className="w-3 h-3" />
                            <span>Technical Mastery × Flow State</span>
                        </div>

                        <h2 className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl text-white/95 leading-tight`}>
                            Vibe Coding <br />
                            <span className="text-2xl md:text-3xl font-light text-white/50 font-sans not-italic mt-2 block">
                                Websites & Apps in hours, not days.
                            </span>
                        </h2>

                        <p className={`${inter.className} text-white/70 text-lg leading-relaxed`}>
                            I blend my deep programming background with an ultra-fast, intuitive workflow. This isn't just design—it's <strong>instant implementation</strong>.
                        </p>

                        <p className={`${inter.className} text-white/60`}>
                            Because I handle the full stack simultaneously, we cut out the "handoff" friction. You get production-grade, scalable code tailored to your business needs at a fraction of the standard cost and time.
                        </p>

                        {/* Feature Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                                <Zap className="w-5 h-5 text-yellow-200 mt-0.5" />
                                <div>
                                    <h4 className="text-white/90 font-medium text-sm">Rapid Velocity</h4>
                                    <p className="text-white/50 text-xs">From idea to live link in record time.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                                <Database className="w-5 h-5 text-blue-200 mt-0.5" />
                                <div>
                                    <h4 className="text-white/90 font-medium text-sm">Ultra Scalable</h4>
                                    <p className="text-white/50 text-xs">Built on solid architecture, easy to extend.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                                <Layout className="w-5 h-5 text-purple-200 mt-0.5" />
                                <div>
                                    <h4 className="text-white/90 font-medium text-sm">Custom Design</h4>
                                    <p className="text-white/50 text-xs">Personalized aesthetics, no generic templates.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                                <TrendingUp className="w-5 h-5 text-green-200 mt-0.5" />
                                <div>
                                    <h4 className="text-white/90 font-medium text-sm">Cost Effective</h4>
                                    <p className="text-white/50 text-xs">Efficiency passes the savings to you.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: The Technical Visualization */}
                    <div className="relative h-full min-h-[400px] w-full rounded-2xl bg-[#0f0f0f] border border-white/10 overflow-hidden flex flex-col">
                        {/* Code Editor Header */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <div className="text-xs text-white/30 font-mono">macai-workflow.tsx</div>
                        </div>

                        {/* Abstract Visualization of Speed/Process */}
                        <div className="p-6 flex flex-col gap-6 flex-1 relative">
                            {/* Background Grid */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

                            {/* Timeline Comparison */}
                            <div className="relative z-10 space-y-6">
                                {/* Traditional Way */}
                                <div className="opacity-50 grayscale">
                                    <div className="flex justify-between text-xs text-white/40 mb-2 font-mono">
                                        <span>Traditional Agency</span>
                                        <span>3-6 Weeks</span>
                                    </div>
                                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full w-full bg-white/20"></div>
                                    </div>
                                </div>

                                {/* Macai Way */}
                                <div>
                                    <div className="flex justify-between text-sm text-white/90 mb-2 font-medium font-mono">
                                        <span className="text-indigo-300">Vibe Coding</span>
                                        <span className="text-indigo-300">24-48 Hours</span>
                                    </div>
                                    <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden relative">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "95%" }}
                                            transition={{ duration: 1.5, ease: "circOut" }}
                                            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                                        />
                                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Tech Stack Badges */}
                            <div className="relative z-10 mt-4 pt-6 border-t border-white/10">
                                <p className="text-xs text-white/40 mb-3 uppercase tracking-wider">Powered by expertise</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-200 text-xs font-mono">TypeScript</span>
                                    <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-white/60 text-xs font-mono">Next.js 15</span>
                                    <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-white/60 text-xs font-mono">Tailwind</span>
                                    <span className="px-2 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-purple-200 text-xs font-mono">AI Augmented</span>
                                </div>
                                {/* PROCESS SECTION */}
                                <motion.section
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="mb-8 mt-8"
                                >
                                    <div className="text-center mb-16">
                                        <h2 className={`${ppEditorialNewUltralightItalic.className} text-3xl md:text-5xl font-light italic text-white/90 mb-4`}>
                                            The Workflow
                                        </h2>
                                        <p className={`${inter.className} text-white/50 max-w-lg mx-auto`}>
                                            Streamlined execution. From raw concept to a lead-generating machine.
                                        </p>
                                    </div>

                                    <div className="relative grid md:grid-cols-3 gap-6">
                                        {/* Connecting Line (Desktop only) */}
                                        <div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent border-t border-dashed border-white/20 z-0"></div>

                                        {/* Step 01 */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 }}
                                            className="relative z-10 flex flex-col items-center text-center group"
                                        >
                                            <div className="w-24 h-24 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center mb-6 group-hover:border-indigo-500/50 transition-colors duration-300 shadow-[0_0_30px_-10px_rgba(255,255,255,0.05)]">
                                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white/80">
                                                    <span className={`${ppEditorialNewUltralightItalic.className} text-2xl not-italic font-bold`}>1</span>
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-medium text-white/90 mb-3">Brief & Identity</h3>
                                            {/* <p className={`${inter.className} text-white/60 text-sm leading-relaxed px-2`}>
                                                We define the vision, Branding, and Visual Strategy.
                                            </p> */}
                                        </motion.div>

                                        {/* Step 02 */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 }}
                                            className="relative z-10 flex flex-col items-center text-center group"
                                        >
                                            <div className="w-24 h-24 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center mb-6 group-hover:border-purple-500/50 transition-colors duration-300 shadow-[0_0_30px_-10px_rgba(255,255,255,0.05)]">
                                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white/80">
                                                    <span className={`${ppEditorialNewUltralightItalic.className} text-2xl not-italic font-bold`}>2</span>
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-medium text-white/90 mb-3">Live Prototyping</h3>
                                            {/* <p className={`${inter.className} text-white/60 text-sm leading-relaxed px-2`}>
                                                I skip static mockups. I design <strong>directly in code</strong>. Changes happen instantly.
                                            </p> */}
                                        </motion.div>

                                        {/* Step 03 */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 }}
                                            className="relative z-10 flex flex-col items-center text-center group"
                                        >
                                            <div className="w-24 h-24 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center mb-6 group-hover:border-green-500/50 transition-colors duration-300 shadow-[0_0_30px_-10px_rgba(255,255,255,0.05)]">
                                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white/80">
                                                    <span className={`${ppEditorialNewUltralightItalic.className} text-2xl not-italic font-bold`}>3</span>
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-medium text-white/90 mb-3">Launch & Automate</h3>
                                            {/* <p className={`${inter.className} text-white/60 text-sm leading-relaxed px-2`}>
                                                Deployment with perfect SEO scores.
                                            </p> */}
                                        </motion.div>

                                    </div>
                                </motion.section>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </motion.section>
    )
}