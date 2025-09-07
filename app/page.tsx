"use client"

import { useState } from "react"
import DynamicFrameLayout from "../components/DynamicFrameLayout"
import { ppEditorialNewUltralightItalic, inter } from "./fonts"
import Link from "next/link"
import { Youtube, Instagram, Twitter, Linkedin, Github } from "lucide-react"

export default function Home() {
  const [headerSize] = useState(1.1) // 120% is the default size
  const [textSize] = useState(0.8) // 80% is the default size

  return (
    <div className="w-full h-full flex flex-col md:flex-row items-start gap-8 md:gap-8 mt-8 md:mt-0">
      {/* Left Content */}
      <div className="w-full md:w-[260px] flex-shrink-0 flex flex-col justify-between h-full order-1 md:order-1">
        <div className="flex flex-col gap-8">
          <h1
            className={`${ppEditorialNewUltralightItalic.className} text-5xl md:text-6xl font-light italic text-white/80 tracking-tighter leading-[1.4rem] mt-2`}
            // style={{ fontSize: `${4 * headerSize}rem` }}
          >
            MacaiLabs
          </h1>
          <h2
            className={`${ppEditorialNewUltralightItalic.className} text-3xl md:text-4xl font-light italic text-white/80 tracking-tighter leading-[1.2rem] mt-0 md:-mt-4`}
            // style={{ fontSize: `${4 * headerSize}rem` }}
          >
            Creative Studio
          </h2>

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
                href="https://github.com/piotrmacai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white/90 transition-colors mt-1"
              >
                {/* <span className="font-bold text-lg">Git</span> */}
                <Github size={20} />
                <span className="sr-only">GitHub</span>
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
                href="https://behance.net/macaistudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white/90 transition-colors"
              >
                <span className="font-bold text-lg">Be</span>
                <span className="sr-only">Behance</span>
              </Link>
        </div>




          <div
            className={`${inter.className} flex flex-col gap-12 text-white/50 text-sm font-light max-w-[300px]`}
            style={{ fontSize: `${0.875 * textSize}rem` }}
          >
            <div className="space-y-6">
              <div className="h-px bg-white/10 w-full" />
              <p>
              At Macailabs Studio, I blend marketing, design, and social media into a cohesive whole. I create not just beautiful visuals, but solutions that build engagement and truly impact business results.
</p>
<p>
My process combines creative intuition with advanced tools—I collaborate with my own AI agents to accelerate iterations, test ideas, and deliver campaigns and applications tailored to real audience needs.
</p>
<p>
Let's talk and create something that truly makes you stand out from the crowd.
</p>
     
              {/* <div className="h-px bg-white/10 w-full" /> */}
            </div>
          </div>
        </div>


        {/* <div className="flex flow-col justify-between">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 text-white/70 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors text-center w-full max-w-[260px] text-sm mt-14 ml-4 md:ml-0 mr-2 md:mr-0"
            >
              Let's talk
            </Link>
        </div> */}

      </div>

      {/* Right Content */}
      <div className="w-full md:flex-grow h-[60vh] md:h-[80vh] order-2 md:order-2">
        <DynamicFrameLayout />

        {/* <div className="mt-2 mb-4 flex flow-row justify-between hidden sm:flex">
            <Link
              href="/contact"
              className="inline-block px-6 py-3 text-white/70 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors text-center w-full max-w-[260px] text-sm mt-14"
            >
              Let's talk
            </Link>
            
            <div className="flex flex-row space-x-4 justify-center mt-16">
                  <Link
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white/90 transition-colors"
                  >
                    <Youtube size={20} />
                    <span className="sr-only">YouTube</span>
                  </Link>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white/90 transition-colors"
                  >
                    <Instagram size={20} />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white/90 transition-colors"
                  >
                    <Twitter size={20} />
                    <span className="sr-only">X (Twitter)</span>
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white/90 transition-colors"
                  >
                    <Linkedin size={20} />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://behance.net"
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
              className="inline-block px-6 py-3 text-white/70 border border-white/20 rounded-full font-medium bg-white/10 hover:bg-white/5 transition-colors text-center w-full max-w-[260px] text-sm mt-14"
            >
              Contact
            </Link>
        </div> */}

      </div>
      
    </div>
  )
}

