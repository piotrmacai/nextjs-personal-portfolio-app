"use client"

import { useState } from "react"
import { ppEditorialNewUltralightItalic, inter } from "../fonts"
import Link from "next/link"
import { Megaphone, Users, TrendingUp, MessageCircle, Target, Lightbulb, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import VisualsPricing from "@/components/VisualsPricing"
import VisualWorks from "@/components/VisualWorks"
import MotionOrbit from "@/components/Motion"
import SocialMedia from "@/components/Socialmedia"

const marketingServices = [
  {
    icon: <Megaphone className="w-5 h-5" />,
    title: "Brand Campaigns",
    description: "Comprehensive campaigns that amplify your message at every touchpoint",
    color: "from-cyan-500/20 to-blue-800/10",
    examples: ["Product launches", "Awareness building actions", "Seasonal campaigns"]
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Community Management",
    description: "Nurture loyal communities that recommend your brand 24/7",
    color: "from-emerald-500/20 to-teal-800/10",
    examples: ["Social listening", "Engagement scripts", "UGC curation"]
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Paid Media",
    description: "Data-driven strategies that maximize ROAS on every platform",
    color: "from-amber-500/20 to-orange-800/10",
    examples: ["Meta & TikTok Ads", "Google Performance Max", "Influencer whitelisting"]
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "Content Strategy",
    description: "Content calendars that stop the scroll based on platform psychology",
    color: "from-purple-500/20 to-violet-800/10",
    examples: ["Reels & Shorts", "Carousel stories", "Meme marketing"]
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Influencer Partnerships",
    description: "Authentic collaborations that turn creators into sales engines",
    color: "from-rose-500/20 to-pink-800/10",
    examples: ["Nano to macro tiers", "Performance codes", "Affiliate funnels"]
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Growth Hacking",
    description: "Rapid experiments that unlock scalable acquisition channels",
    color: "from-indigo-500/20 to-purple-800/10",
    examples: ["Viral loops", "Airdrop mechanics", "Waiting list gamification"]
  }
]

const tools = [
  { name: "Meta Business Suite", category: "Ads & Insights" },
  { name: "TikTok Ads Manager", category: "Paid Social" },
  { name: "Hootsuite", category: "Scheduling" },
  { name: "Sprout Social", category: "Analytics" },
  { name: "Flick", category: "Hashtag Research" },
  { name: "Canva Pro", category: "Content Creation" },
  { name: "Brandwatch", category: "Listening" }
]

export default function MarketingServices() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-6 mt-24 md:mt-20 sm:mt-12">
      <div className="flex flex-col gap-12">

      <div className="w-full  min-h-[70vh] pt-12 pb-4">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`${ppEditorialNewUltralightItalic.className} text-5xl md:text-7xl font-light italic text-white/90 tracking-tight text-center mb-12`}
                    >
                    Social-First Stories <br />That Sell
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
                I transform feeds into funnels with scroll-stopping creativity and data-driven targeting.
                Every post, story, and campaign is designed to spark conversations, build communities, and drive revenue.
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
                The technology and tactics I use to hack attention and scale communities:
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
                <h3 className="text-xl font-medium text-white/90 mb-4">Growth Framework</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm mt-0.5">1</div>
                    <div>
                      <h4 className="font-medium text-white/80">Audience Intelligence</h4>
                      <p className={`${inter.className} text-white/60 text-sm mt-1`}>In-depth analytics & psychographic mapping</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm mt-0.5">2</div>
                    <div>
                      <h4 className="font-medium text-white/80">Hook Engineering</h4>
                      <p className={`${inter.className} text-white/60 text-sm mt-1`}>3-second tests for creative scroll-stopping</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm mt-0.5">3</div>
                    <div>
                      <h4 className="font-medium text-white/80">Iteration & Scaling</h4>
                      <p className={`${inter.className} text-white/60 text-sm mt-1`}>Real-time optimization & budget reallocation</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/70 text-sm mt-0.5">4</div>
                    <div>
                      <h4 className="font-medium text-white/80">Retention Loops</h4>
                      <p className={`${inter.className} text-white/60 text-sm mt-1`}>Automated nurture sequences & loyalty perks</p>
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
              Ready to make your brand unignorable?
            </h2>
            <p className={`${inter.className} text-white/60 max-w-2xl mx-auto mb-8`}>
              Let's build data-driven campaigns that turn casual scrollers into superfans, and superfans into customers.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transition-colors font-medium"
            >
              Schedule a Strategy Call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  )
}