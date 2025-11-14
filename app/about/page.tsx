"use client"
import { useState } from "react"
import { ppEditorialNewUltralightItalic, inter } from "../fonts"
import Link from "next/link"
import { Youtube, Instagram, Twitter, Linkedin, Film } from "lucide-react"
import { ArrowUpRight } from "lucide-react"

export default function OMnie() {
  const [headerSize] = useState(1.2)
  const [textSize] = useState(0.8)

  return (
    <div className="w-full max-w-3xl mx-auto mt-24 md:mt-20 sm:mt-12">
      <div className="flex flex-col gap-8">
        <h1
          className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter`}
          style={{ fontSize: `${4 * headerSize}rem` }}
        >
          About Me
        </h1>
        <div className="h-px bg-white/10 w-full" />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://twitter.com/piotrmacai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white/90 transition-colors mt-1"
            >
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://linkedin.com/in/piotrmacai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white/90 transition-colors mt-1"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://www.instagram.com/piotr.macai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white/90 transition-colors mt-1"
            >
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://github.com/piotrmacai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white/90 transition-colors"
            >
              <span className="font-bold text-lg">Git</span>
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://behance.net/macaistudio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white/90 transition-colors"
            >
              <span className="font-bold text-lg">Be</span>
              <span className="sr-only">Behance</span>
            </Link>
          </div>
        </div>
        <div
          className={`${inter.className} flex flex-col gap-8 text-white/50 text-sm font-light`}
          style={{ fontSize: `${0.875 * textSize}rem` }}
        >
          <p>
            I'm Piotr Machowski, a Fullstack Developer and Digital Creator specializing in AI-driven experiences, 
            immersive interfaces, and motion design. My work sits at the intersection of technology and aesthetics, 
            where clean code meets compelling visuals.
          </p>
          <p>
            My journey in web development began with a fascination for how design and technology intersect. I hold a
            Master's degree in Computer Science with a specialization in User Experience Design, which has given me a
            solid foundation in both the technical and creative aspects of web development.
          </p>
          <p>
            Regularly, I share my knowledge about artificial intelligence and automation on the platform <strong>X (Twitter)</strong>, in my newsletter, and other social media. I showcase practical applications of AI in business and automate daily tasks - from complex processes to small improvements that make a big difference.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-12 mt-12">
              <h1
                className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter`}
              >
                My Personal Projects
              </h1>
              <div className="grid gap-10">
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-white/80">Ainsider.co</h2>
                  <p className="text-white/50 text-sm">
                    A studio creating AI agents and custom automations for businesses and individuals.
                    Dedicated AI tools and custom software implementations.
                  </p>
                  <Link
                    href="https://ainsider.co"
                    target="_blank"
                    className="text-white/60 hover:text-white/90 flex items-center gap-1 text-sm"
                  >
                    Visit ainsider.co <ArrowUpRight size={16} />
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-white/80">Ainsider.store</h2>
                  <p className="text-white/50 text-sm">
                    A catalog of AI tools, language models, agents, and plugins with analyses and usage examples.
                  </p>
                  <Link
                    href="https://ainsider.store"
                    target="_blank"
                    className="text-white/60 hover:text-white/90 flex items-center gap-1 text-sm"
                  >
                    Visit ainsider.store <ArrowUpRight size={16} />
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-white/80">My Github</h2>
                  <p className="text-white/50 text-sm">
                    Github with AI Agents, automations, and web applications.
                  </p>
                  <Link
                    href="https://github.com/piotrmacai"
                    target="_blank"
                    className="text-white/60 hover:text-white/90 flex items-center gap-1 text-sm"
                  >
                    Visit Github <ArrowUpRight size={16} />
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-white/80">X/Twitter with AI</h2>
                  <p className="text-white/50 text-sm">
                    I share news from the AI world, case studies, experiments with agents, and automation.
                  </p>
                  <Link
                    href="https://x.com/piotrmacai"
                    target="_blank"
                    className="text-white/60 hover:text-white/90 flex items-center gap-1 text-sm"
                  >
                    Follow @piotrmacai <ArrowUpRight size={16} />
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-white/80">AI Newsletter</h2>
                  <p className="text-white/50 text-sm">
                    AI newsletter with news, case studies, experiments with agents, and automation.
                    Sent every two weeks. For free. No spam. <a href="https://ainsiderai.substack.com/" target="_blank" className="text-white/60 hover:text-white/90">Subscribe</a>
                  </p>
                  <Link
                    href="https://ainsiderai.substack.com/"
                    target="_blank"
                    className="text-white/60 hover:text-white/90 flex items-center gap-1 text-sm"
                  >
                    Join to my Substack <ArrowUpRight size={16} />
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-white/80">AI Art and Visual Experiments</h2>
                  <p className="text-white/50 text-sm">
                    I create images and videos using Midjourney, GPT, Recraft, and other generators — exploring the aesthetic boundaries of AI creativity.
                  </p>
                  <Link
                    href="https://www.instagram.com/piotr.macai"
                    target="_blank"
                    className="text-white/60 hover:text-white/90 flex items-center gap-1 text-sm"
                  >
                    Follow on Instagram <ArrowUpRight size={16} />
                  </Link>
                  <Link
                    href="https://www.artstation.com/piotrmacai"
                    target="_blank"
                    className="text-white/60 hover:text-white/90 flex items-center gap-1 text-sm"
                  >
                    Follow on Artstation <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
              <div className="h-px bg-white/10 w-full" />
            </div>
          </div>
          <h2
            className={`${ppEditorialNewUltralightItalic.className} text-2xl font-light italic text-white/80 tracking-tighter mt-12`}
          >
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium text-white/70">Design and UX</h3>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Prototyping in Figma and design systems</li>
                <li>Adobe Creative Suite (Photoshop, Illustrator)</li>
                <li>3D with Three.js, animations with GSAP/Framer</li>
                <li>Research and user testing methodologies</li>
              </ul>
              <p className="mt-2">
                Check out my design work on <Link href="https://behance.net/macaistudio" className="text-white/70 hover:underline">Behance</Link>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-white/70">Frontend Development</h3>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>React.js, Next.js, Vue.js with TypeScript</li>
                <li>Modern CSS (Tailwind, SASS) and UI frameworks</li>
                <li>Build tools: Vite, Webpack, npm/yarn/pnpm</li>
                <li>Performance optimization techniques</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-white/70">AI/ML and Automation</h3>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Language models and prompt engineering</li>
                <li>AI Agents (Langchain, Flowise, Botpress)</li>
                <li>Workflow automation (n8n, Make.com, Zapier)</li>
                <li>AI-assisted development (Cursor AI, Replit AI)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-white/70">Backend and DevOps</h3>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Node.js, Express, REST/GraphQL APIs</li>
                <li>Database systems PostgreSQL, MongoDB</li>
                <li>Workflow with Git, GitHub, Docker</li>
                <li>SEO and Analytics (Google Analytics, Search Console)</li>
              </ul>
            </div>
          </div>
          
          {/* <h2
            className={`${ppEditorialNewUltralightItalic.className} text-2xl font-light italic text-white/80 tracking-tighter mt-6`}
          >
            Significant Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white/70 font-medium">AI-Powered Portfolio</h3>
              <p className="text-white/60 text-sm mt-1">
                My personal portfolio showcasing AI-generated content managed by Sanity CMS
              </p>
              <Link href="https://piotrmacai.com" className="text-white/70 hover:underline text-sm">piotrmacai.com</Link>
            </div>
            <div>
              <h3 className="text-white/70 font-medium">AI Studio Platform</h3>
              <p className="text-white/60 text-sm mt-1">
                Ainsider.co combines custom AI agents with beautiful interfaces
              </p>
              <Link href="https://ainsider.co" className="text-white/70 hover:underline text-sm">ainsider.co</Link>
            </div>
            <div>
              <h3 className="text-white/70 font-medium">AI Agents</h3>
              <p className="text-white/60 text-sm mt-1">
                Custom solutions for workflow automation
              </p>
              <Link href="https://piotrmacai.com/ai-agents" className="text-white/70 hover:underline text-sm">See AI Agents</Link>
            </div>
            <div>
              <h3 className="text-white/70 font-medium">GitHub</h3>
              <p className="text-white/60 text-sm mt-1">
                Open-source projects and code samples
              </p>
              <Link href="https://github.com/piotrmacai" className="text-white/70 hover:underline text-sm">github.com/piotrmacai</Link>
            </div>
          </div> */}
          <div className="h-px bg-white/10 w-full mt-6" />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://twitter.com/piotrmacai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white/90 transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://github.com/piotrmacai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white/90 transition-colors"
              >
                <span className="font-bold text-lg">Git</span>
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/piotrmacai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white/90 transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://behance.net/macaistudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white/90 transition-colors"
              >
                <span className="font-bold text-lg">Be</span>
                <span className="sr-only">Behance</span>
              </Link>
            </div>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 text-white/70 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors text-center"
            >
              Collaborate with Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}



// "use client"

// import { useState } from "react"
// import { ppEditorialNewUltralightItalic, inter } from "../fonts"
// import Link from "next/link"
// import { Youtube, Instagram, Twitter, Linkedin, Film } from "lucide-react"

// export default function About() {
//   const [headerSize] = useState(1.2)
//   const [textSize] = useState(0.8)

//   return (
//     <div className="w-full max-w-3xl mx-auto">
//       <div className="flex flex-col gap-8">
//         <h1
//           className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter`}
//           style={{ fontSize: `${4 * headerSize}rem` }}
//         >
//           About Me
//         </h1>

//         <div className="h-px bg-white/10 w-full" />

//         <div
//           className={`${inter.className} flex flex-col gap-8 text-white/50 text-sm font-light`}
//           style={{ fontSize: `${0.875 * textSize}rem` }}
//         >
//           <p>
//             I'm Piotr Machowski, a Fullstack Developer and Digital Creator specializing in AI-driven experiences, 
//             immersive interfaces, and motion design. My work sits at the intersection of technology and aesthetics, 
//             where clean code meets compelling visuals.
//           </p>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div>
//               <h2
//                 className={`${ppEditorialNewUltralightItalic.className} text-2xl font-light italic text-white/80 tracking-tighter mb-4`}
//               >
//                 Design Philosophy
//               </h2>
//               <p>
//                 I approach design as functional art — every pixel should serve a purpose while creating emotional 
//                 connection. My background in civil engineering gives me a unique perspective on structural design 
//                 principles applied to digital experiences.
//               </p>
//               <ul className="list-disc pl-5 space-y-2 mt-4">
//                 <li>Conversion-focused UI with measurable results</li>
//                 <li>Micro-interactions that guide and delight users</li>
//                 <li>Responsive systems that adapt beautifully across devices</li>
//                 <li>Data-informed design decisions</li>
//               </ul>
//             </div>

//             <div>
//               <h2
//                 className={`${ppEditorialNewUltralightItalic.className} text-2xl font-light italic text-white/80 tracking-tighter mb-4`}
//               >
//                 Motion & Video
//               </h2>
//               <p>
//                 I specialize in creating cinematic web experiences that blend video content with interactive 
//                 elements. From product showcases to narrative portfolios, motion design is central to my work.
//               </p>
//               <div className="mt-4 flex items-center space-x-2">
//                 <Film className="text-white/60" size={20} />
//                 <Link 
//                   href="https://nextjs-video-web-app.vercel.app" 
//                   target="_blank"
//                   className="text-white/70 hover:text-white/90 underline"
//                 >
//                   View my video portfolio
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <h2
//             className={`${ppEditorialNewUltralightItalic.className} text-2xl font-light italic text-white/80 tracking-tighter mt-6`}
//           >
//             Technical Expertise
//           </h2>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h3 className="text-white/70 font-medium mb-2">Development</h3>
//               <ul className="list-disc pl-5 space-y-1">
//                 <li>React.js/Next.js with TypeScript</li>
//                 <li>AI integration (LLMs, Langchain)</li>
//                 <li>Headless CMS architectures</li>
//                 <li>Performance optimization</li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-white/70 font-medium mb-2">Design</h3>
//               <ul className="list-disc pl-5 space-y-1">
//                 <li>Figma prototyping & design systems</li>
//                 <li>Adobe Creative Suite</li>
//                 <li>3D with Three.js</li>
//                 <li>Motion design with GSAP/Framer</li>
//               </ul>
//             </div>
//           </div>

//           <h2
//             className={`${ppEditorialNewUltralightItalic.className} text-2xl font-light italic text-white/80 tracking-tighter mt-6`}
//           >
//             Featured Projects
//           </h2>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <h3 className="text-white/70 font-medium mb-2">AI-Powered Portfolio</h3>
//               <p className="text-white/60 text-sm">
//                 My personal showcase featuring AI-generated content managed through Sanity CMS, demonstrating 
//                 the fusion of creative coding and content strategy.
//               </p>
//               <Link 
//                 href="https://piotrmacai.com" 
//                 target="_blank"
//                 className="inline-block mt-2 text-white/70 hover:text-white/90 underline text-sm"
//               >
//                 Visit piotrmacai.com
//               </Link>
//             </div>
//             <div>
//               <h3 className="text-white/70 font-medium mb-2">AI Studio Platform</h3>
//               <p className="text-white/60 text-sm">
//                 Ainsider.co represents my vision for AI-enhanced web solutions, combining custom AI agents 
//                 with beautiful interfaces.
//               </p>
//               <Link 
//                 href="https://ainsider.co" 
//                 target="_blank"
//                 className="inline-block mt-2 text-white/70 hover:text-white/90 underline text-sm"
//               >
//                 Visit ainsider.co
//               </Link>
//             </div>
//           </div>

//           <div className="h-px bg-white/10 w-full mt-6" />

//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
//             <div className="flex space-x-4">
//               <Link
//                 href="https://youtube.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white/60 hover:text-white/90 transition-colors"
//               >
//                 <Youtube size={20} />
//                 <span className="sr-only">YouTube</span>
//               </Link>
//               <Link
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white/60 hover:text-white/90 transition-colors"
//               >
//                 <Instagram size={20} />
//                 <span className="sr-only">Instagram</span>
//               </Link>
//               <Link
//                 href="https://x.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white/60 hover:text-white/90 transition-colors"
//               >
//                 <Twitter size={20} />
//                 <span className="sr-only">X (Twitter)</span>
//               </Link>
//               <Link
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white/60 hover:text-white/90 transition-colors"
//               >
//                 <Linkedin size={20} />
//                 <span className="sr-only">LinkedIn</span>
//               </Link>
//               <Link
//                 href="https://behance.net"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white/60 hover:text-white/90 transition-colors"
//               >
//                 <span className="font-bold text-lg">Be</span>
//                 <span className="sr-only">Behance</span>
//               </Link>
//             </div>

//             <Link
//               href="/contact"
//               className="inline-block px-6 py-3 text-white/70 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors text-center"
//             >
//               Get in Touch
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

