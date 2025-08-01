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
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex flex-col gap-8">
        <h1
          className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter`}
          style={{ fontSize: `${4 * headerSize}rem` }}
        >
          O Mnie
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
            Jestem full-stack developerem, specjalistą od sztucznej inteligencji i projektantem z Polski. Tworzę nowoczesne rozwiązania webowe i AI, które łączą zaawansowaną technologię z dopracowanym doświadczeniem użytkownika.  </p>
          <p>
          Od kilku lat pomagam klientom przekształcać ich pomysły w skalowalne, inteligentne aplikacje – zarówno pod względem technologicznym, jak i estetycznym.
          </p>
          <p>
          Regularnie dzielę się wiedzą na temat sztucznej inteligencji i automatyzacji na platformie <strong>X (Twitter)</strong>, w moim newsletterze oraz innych mediach społecznościowych. Pokazuję praktyczne zastosowania AI w biznesie i automatyzuję codzienną pracę – od złożonych procesów po małe usprawnienia, które robią wielką różnicę.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-12 mt-12">
              <h1
                className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter`}
              >
                Moje Osobiste Projekty
              </h1>
              <div className="grid gap-10">
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-white/80">Ainsider.co</h2>
                  <p className="text-white/50 text-sm">
                    Studio tworzące agentów AI i customowe automatyzacje dla firm i osób indywidualnych.
                    Dedykowane narzędzia AI i niestandardowe implementacje oprogramowania.
                  </p>
                  <Link
                    href="https://ainsider.co"
                    target="_blank"
                    className="text-white/60 hover:text-white/90 flex items-center gap-1 text-sm"
                  >
                    Odwiedź ainsider.co <ArrowUpRight size={16} />
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-white/80">Ainsider.tools</h2>
                  <p className="text-white/50 text-sm">
                    Katalog narzędzi AI, modeli językowych, agentów i wtyczek z analizami i przykładami zastosowań.
                  </p>
                  <Link
                    href="https://ainsider.tools"
                    target="_blank"
                    className="text-white/60 hover:text-white/90 flex items-center gap-1 text-sm"
                  >
                    Odwiedź ainsider.tools <ArrowUpRight size={16} />
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-white/80">Mój Github</h2>
                  <p className="text-white/50 text-sm">
                    Github z Agentami AI, automatyzacjami i aplikacjami web.
                  </p>
                  <Link
                    href="https://github.com/piotrmacai"
                    target="_blank"
                    className="text-white/60 hover:text-white/90 flex items-center gap-1 text-sm"
                  >
                    Odwiedź Github <ArrowUpRight size={16} />
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-white/80">X/Twitter z AI</h2>
                  <p className="text-white/50 text-sm">
                    Dzielę się nowinkami ze świata AI, studiami przypadków, eksperymentami z agentami i automatyzacją.
                  </p>
                  <Link
                    href="https://x.com/piotrmacai"
                    target="_blank"
                    className="text-white/60 hover:text-white/90 flex items-center gap-1 text-sm"
                  >
                    Obserwuj @piotrmacai <ArrowUpRight size={16} />
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-white/80">Newsletter AI</h2>
                  <p className="text-white/50 text-sm">
                    Newsletter AI z nowinkami, studiami przypadków, eksperymentami z agentami i automatyzacją.
                    Wysyłany rydzień. Za darmo. Bez spamu. <a href="https://ainsider.beehiiv.com" target="_blank" className="text-white/60 hover:text-white/90">Zapisz się</a>
                  </p>
                  <Link
                    href="https://ainsider.beehiiv.com"
                    target="_blank"
                    className="text-white/60 hover:text-white/90 flex items-center gap-1 text-sm"
                  >
                    Zapisz się do newslettera <ArrowUpRight size={16} />
                  </Link>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold text-white/80">AI Art i Eksperymenty Wizualne</h2>
                  <p className="text-white/50 text-sm">
                    Tworzę obrazy i filmy przy użyciu Midjourney, GPT, Recraft i innych generatorów — eksplorując estetyczne granice kreatywności AI.
                  </p>
                  <Link
                    href="https://www.instagram.com/piotr.macai"
                    target="_blank"
                    className="text-white/60 hover:text-white/90 flex items-center gap-1 text-sm"
                  >
                    Obserwuj na Instagramie <ArrowUpRight size={16} />
                  </Link>
                  <Link
                    href="https://www.artstation.com/piotrmacai"
                    target="_blank"
                    className="text-white/60 hover:text-white/90 flex items-center gap-1 text-sm"
                  >
                    Obserwuj na Artstation <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
              <div className="h-px bg-white/10 w-full" />
            </div>
          </div>
          <h2
            className={`${ppEditorialNewUltralightItalic.className} text-2xl font-light italic text-white/80 tracking-tighter mt-12`}
          >
            Skille Techniczne
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium text-white/70">Projektowanie i UX</h3>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Prototypowanie w Figmie i systemy projektowe</li>
                <li>Adobe Creative Suite (Photoshop, Illustrator)</li>
                <li>3D z Three.js, animacje z GSAP/Framer</li>
                <li>Metodologie badań i testów użytkowników</li>
              </ul>
              <p className="mt-2">
                Zapoznaj się z moimi pracami projektowymi na <Link href="https://behance.net/macaistudio" className="text-white/70 hover:underline">Behance</Link>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-white/70">Rozwój Frontendu</h3>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>React.js, Next.js, Vue.js z TypeScript</li>
                <li>Nowoczesny CSS (Tailwind, SASS) i frameworki UI</li>
                <li>Narzędzia budowania: Vite, Webpack, npm/yarn/pnpm</li>
                <li>Techniki optymalizacji wydajności</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-white/70">AI/ML i Automatyzacja</h3>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Modele językowe i inżynieria promptów</li>
                <li>Agenci AI (Langchain, Flowise, Botpress)</li>
                <li>Automatyzacja przepływów pracy (n8n, Make.com, Zapier)</li>
                <li>Rozwój wspomagany AI (Cursor AI, Replit AI)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-white/70">Backend i DevOps</h3>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Node.js, Express, API REST/GraphQL</li>
                <li>Systemy baz danych PostgreSQL, MongoDB</li>
                <li>Przepływy pracy z Git, GitHub, Docker</li>
                <li>SEO i Analiza (Google Analytics, Search Console)</li>
              </ul>
            </div>
          </div>
          
          {/* <h2
            className={`${ppEditorialNewUltralightItalic.className} text-2xl font-light italic text-white/80 tracking-tighter mt-6`}
          >
            Znaczące Projekty
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white/70 font-medium">Portfolio zasilane AI</h3>
              <p className="text-white/60 text-sm mt-1">
                Moje osobiste portfolio prezentujące treści generowane przez AI zarządzane przez Sanity CMS
              </p>
              <Link href="https://piotrmacai.com" className="text-white/70 hover:underline text-sm">piotrmacai.com</Link>
            </div>
            <div>
              <h3 className="text-white/70 font-medium">Platforma AI Studio</h3>
              <p className="text-white/60 text-sm mt-1">
                Ainsider.co łączy niestandardowe agenty AI z pięknymi interfejsami
              </p>
              <Link href="https://ainsider.co" className="text-white/70 hover:underline text-sm">ainsider.co</Link>
            </div>
            <div>
              <h3 className="text-white/70 font-medium">Agenci AI</h3>
              <p className="text-white/60 text-sm mt-1">
                Niestandardowe rozwiązania automatyzacji przepływów pracy
              </p>
              <Link href="https://piotrmacai.com/ai-agents" className="text-white/70 hover:underline text-sm">Zobacz Agentów AI</Link>
            </div>
            <div>
              <h3 className="text-white/70 font-medium">GitHub</h3>
              <p className="text-white/60 text-sm mt-1">
                Projekty open-source i przykłady kodu
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
              Współpracuj ze mną
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
//             <div className="flex flex-wrap gap-4">
//               <Link
//                 href="https://twitter.com/piotrmacai"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white/60 hover:text-white/90 transition-colors"
//               >
//                 <Twitter size={20} />
//                 <span className="sr-only">Twitter</span>
//               </Link>
//               <Link
//                 href="https://github.com/piotrmacai"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white/60 hover:text-white/90 transition-colors"
//               >
//                 <span className="font-bold text-lg">Git</span>
//                 <span className="sr-only">GitHub</span>
//               </Link>
//               <Link
//                 href="https://linkedin.com/in/piotrmacai"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-white/60 hover:text-white/90 transition-colors"
//               >
//                 <Linkedin size={20} />
//                 <span className="sr-only">LinkedIn</span>
//               </Link>
//               <Link
//                 href="https://behance.net/macaistudio"
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
//               Collaborate with Me
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



// "use client"

// import { useState } from "react"
// import { ppEditorialNewUltralightItalic, inter } from "../fonts"
// import Link from "next/link"
// import { Youtube, Instagram, Twitter, Linkedin } from "lucide-react"

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
//             I'm Piotr Macai, a passionate Web Developer and Designer with over 8 years of experience creating digital
//             experiences that combine functionality with aesthetic appeal. Based in Warsaw, Poland, I've worked with
//             clients across Europe and North America to bring their digital visions to life.
//           </p>

//           <p>
//             My journey in web development began with a fascination for how design and technology intersect. I hold a
//             Master's degree in Computer Science with a specialization in User Experience Design, which has given me a
//             solid foundation in both the technical and creative aspects of web development.
//           </p>

//           <h2
//             className={`${ppEditorialNewUltralightItalic.className} text-2xl font-light italic text-white/80 tracking-tighter mt-6`}
//           >
//             My Approach
//           </h2>

//           <p>
//             I believe that great digital products are born at the intersection of technology, design, and human
//             psychology. My work process involves deep collaboration with clients, thorough research, and iterative
//             design and development to ensure the final product not only looks beautiful but also delivers results.
//           </p>

//           <h2
//             className={`${ppEditorialNewUltralightItalic.className} text-2xl font-light italic text-white/80 tracking-tighter mt-6`}
//           >
//             Technical Skills
//           </h2>

//           <ul className="list-disc pl-5 space-y-2">
//             <li>Frontend: React, Next.js, TypeScript, Tailwind CSS</li>
//             <li>Design: Figma, Adobe Creative Suite</li>
//             <li>3D & Motion: Three.js, GSAP, Framer Motion</li>
//             <li>Backend: Node.js, Express, MongoDB, PostgreSQL</li>
//           </ul>

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

