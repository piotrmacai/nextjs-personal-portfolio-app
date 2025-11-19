// web/page.tsx
"use client"

import { useState } from "react"
import { ppEditorialNewUltralightItalic, inter } from "../fonts"
import Link from "next/link"
import { Code, Globe, Smartphone, Zap, Database, Cpu, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import PortfolioPage from "../portfolio/page"
import Pricing from "@/components/Pricing"
import WebWorks from "@/components/WebWorks"
import SocialMedia from "@/components/Socialmedia"

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
  backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Python", "Rest API","CMS Platforms"]
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

        <WebWorks />

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

        <Pricing/>

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
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black hover:bg-white/90 transition-colors font-medium"
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



// "use client"

// import { useState } from "react"
// import { ppEditorialNewUltralightItalic, inter } from "../fonts"
// import Link from "next/link"
// import { Brush, Code, Globe, Layout, Twitter, Linkedin } from "lucide-react"
// import { motion } from "framer-motion"

// export default function Web() {
//   const [headerSize] = useState(1.2)
//   const [textSize] = useState(0.9)

//   const cardVariants = {
//     hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(255,255,255,0.1)" },
//     initial: { scale: 1, boxShadow: "0 4px 10px rgba(255,255,255,0.05)" }
//   }

//   return (
//     <div className="w-full min-h-screen py-12">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className={`${ppEditorialNewUltralightItalic.className} text-5xl md:text-7xl font-light italic text-white/90 tracking-tight text-center mb-12`}
//           style={{ fontSize: `${4.5 * headerSize}rem` }}
//         >
//           Web Development
//         </motion.h1>

//         <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />

//         <div
//           className={`${inter.className} flex flex-col gap-12 text-white/70 text-base font-light`}
//           style={{ fontSize: `${0.875 * textSize}rem` }}
//         >
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//             className="text-center max-w-2xl mx-auto"
//           >
//             <p>
//               I craft modern, high-performance websites that captivate and convert. From WordPress to Next.js and custom CMS solutions, I deliver tailored digital experiences that elevate your brand and drive results.
//             </p>
//           </motion.div>

//           <h2
//             className={`${ppEditorialNewUltralightItalic.className} text-3xl font-light italic text-white/80 tracking-tight mt-8`}
//           >
//             My Services
//           </h2>

//           <div className="grid md:grid-cols-2 gap-6">
//             {[
//               {
//                 icon: <Brush size={24} className="text-blue-400" />,
//                 title: "WordPress Development",
//                 description: "Custom WordPress sites with tailored themes, plugins, and WooCommerce for seamless e-commerce and SEO.",
//                 features: [
//                   "Bespoke theme design",
//                   "Plugin customization",
//                   "WooCommerce integration",
//                   "SEO & performance optimization"
//                 ]
//               },
//               {
//                 icon: <Code size={24} className="text-green-400" />,
//                 title: "Next.js & React.js",
//                 description: "Scalable, interactive web apps with server-side rendering and modern JavaScript frameworks.",
//                 features: [
//                   "Next.js SSR & static sites",
//                   "React.js with TypeScript",
//                   "API & state management",
//                   "Progressive Web Apps (PWA)"
//                 ]
//               },
//               {
//                 icon: <Globe size={24} className="text-purple-400" />,
//                 title: "CMS-Based Solutions",
//                 description: "Flexible, content-driven websites using Sanity CMS or headless CMS setups for ultimate control.",
//                 features: [
//                   "Sanity CMS integration",
//                   "Headless CMS with Next.js",
//                   "Custom content workflows",
//                   "Multi-language support"
//                 ]
//               },
//               {
//                 icon: <Layout size={24} className="text-orange-400" />,
//                 title: "UI/UX Design",
//                 description: "Intuitive, conversion-focused designs with a focus on user experience and interactivity.",
//                 features: [
//                   "Figma prototyping",
//                   "Responsive layouts",
//                   "Micro-interactions & animations",
//                   "User testing & iteration"
//                 ]
//               }
//             ].map((service, index) => (
//               <motion.div
//                 key={index}
//                 variants={cardVariants}
//                 initial="initial"
//                 whileHover="hover"
//                 className="bg-gray-800/50 p-6 rounded-xl border border-white/10 transition-all duration-300"
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   {service.icon}
//                   <h3 className="text-xl font-medium text-white/80">{service.title}</h3>
//                 </div>
//                 <p className="text-white/60 text-sm mb-4">{service.description}</p>
//                 <ul className="list-disc pl-5 space-y-2 text-white/60 text-sm">
//                   {service.features.map((feature, i) => (
//                     <li key={i}>{feature}</li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>

//           <h2
//             className={`${ppEditorialNewUltralightItalic.className} text-3xl font-light italic text-white/80 tracking-tight mt-12`}
//           >
//             Why Choose Me?
//           </h2>

//           <div className="grid md:grid-cols-2 gap-6">
//             {[
//               {
//                 title: "Tailored Solutions",
//                 description: "Custom websites designed to align perfectly with your brand and business objectives."
//               },
//               {
//                 title: "Performance & Scalability",
//                 description: "Fast, secure, and scalable websites built with the latest technologies."
//               },
//               {
//                 title: "End-to-End Development",
//                 description: "From design to deployment, I manage every step for a seamless experience."
//               },
//               {
//                 title: "Ongoing Support",
//                 description: "Post-launch maintenance and analytics to keep your site at peak performance."
//               }
//             ].map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 variants={cardVariants}
//                 initial="initial"
//                 whileHover="hover"
//                 className="bg-gray-800/50 p-6 rounded-xl border border-white/10 transition-all duration-300"
//               >
//                 <h3 className="text-white/80 font-medium">{benefit.title}</h3>
//                 <p className="text-white/60 text-sm mt-2">{benefit.description}</p>
//               </motion.div>
//             ))}
//           </div>

//           <h2
//             className={`${ppEditorialNewUltralightItalic.className} text-3xl font-light italic text-white/80 tracking-tight mt-12`}
//           >
//             Featured Projects
//           </h2>

//           <div className="grid md:grid-cols-2 gap-6">
//             {[
//               {
//                 title: "AI-Powered Portfolio",
//                 description: "A Next.js-based portfolio with Sanity CMS, showcasing dynamic, AI-generated content.",
//                 link: "https://piotrmacai.com",
//                 linkText: "piotrmacai.com"
//               },
//               {
//                 title: "AI Studio Platform",
//                 description: "A custom platform built with Next.js, integrating AI agents and sleek interfaces.",
//                 link: "https://ainsider.co",
//                 linkText: "ainsider.co"
//               }
//             ].map((project, index) => (
//               <motion.div
//                 key={index}
//                 variants={cardVariants}
//                 initial="initial"
//                 whileHover="hover"
//                 className="bg-gray-800/50 p-6 rounded-xl border border-white/10 transition-all duration-300"
//               >
//                 <h3 className="text-white/80 font-medium">{project.title}</h3>
//                 <p className="text-white/60 text-sm mt-2">{project.description}</p>
//                 <Link href={project.link} className="text-blue-400 hover:underline text-sm mt-3 inline-block">
//                   {project.linkText}
//                 </Link>
//               </motion.div>
//             ))}
//           </div>

//           <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-12" />

//           <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//             <div className="flex flex-wrap gap-6">
//               <Link
//                 href="https://twitter.com/piotrmacai"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white/60 hover:text-blue-400 transition-colors"
//               >
//                 <Twitter size={24} />
//                 <span className="sr-only">Twitter</span>
//               </Link>
//               <Link
//                 href="https://github.com/piotrmacai"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white/60 hover:text-blue-400 transition-colors"
//               >
//                 <span className="font-bold text-lg">Git</span>
//                 <span className="sr-only">GitHub</span>
//               </Link>
//               <Link
//                 href="https://linkedin.com/in/piotrmacai"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white/60 hover:text-blue-400 transition-colors"
//               >
//                 <Linkedin size={24} />
//                 <span className="sr-only">LinkedIn</span>
//               </Link>
//               <Link
//                 href="https://behance.net/macaistudio"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white/60 hover:text-blue-400 transition-colors"
//               >
//                 <span className="font-bold text-lg">Be</span>
//                 <span className="sr-only">Behance</span>
//               </Link>
//             </div>

//             <Link
//               href="/contact"
//               className="inline-block px-8 py-4 text-white bg-blue-500/20 border border-blue-500/50 rounded-full font-medium hover:bg-blue-500/30 transition-all duration-300"
//             >
//               Start Your Project
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }