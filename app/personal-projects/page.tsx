"use client"

import { ppEditorialNewUltralightItalic, inter } from "../fonts"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function PersonalProjects() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12">
      <div className="flex flex-col gap-12">
        <h1
          className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter`}
        >
          What I'm Building
        </h1>

        <div className="grid gap-8">
          {/* Ainsider.co */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-white/80">Ainsider.co</h2>
            <p className="text-white/50 text-sm">
              A studio creating chatbots, AI agents and automation solutions for companies.
              Dedicated AI tools and custom software implementations.
            </p>
            <Link
              href="https://ainsider.cloud"
              target="_blank"
              className="text-white/60 hover:text-white/90 flex items-center gap-1 text-sm"
            >
              Visit ainsider.co <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Ainsider.tools */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-white/80">Ainsider.store</h2>
            <p className="text-white/50 text-sm">
              A catalog of AI tools, language models, agents and plugins with analysis and use case examples.
            </p>
            <Link
              href="https://ainsider.store"
              target="_blank"
              className="text-white/60 hover:text-white/90 flex items-center gap-1 text-sm"
            >
              Visit ainsider.store <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* X.com */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-white/80">AI Insights on X</h2>
            <p className="text-white/50 text-sm">
              I share news from the AI world, case studies, experiments with agents and automation.
            </p>
            <Link
              href="https://x.com/piotrmacai"
              target="_blank"
              className="text-white/60 hover:text-white/90 flex items-center gap-1 text-sm"
            >
              Follow @piotrmacai <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* X.com */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-white/80">AI Newsletter</h2>
            <p className="text-white/50 text-sm">
              AI newsletter with news, case studies, experiments with agents and automation.
              Sent bi-weekly. Free. No spam. <a href="https://ainsiderai.substack.com/" target="_blank" className="text-white/60 hover:text-white/90">Subscribe</a>
            </p>
            <Link
              href="https://ainsiderai.substack.com/"
              target="_blank"
              className="text-white/60 hover:text-white/90 flex items-center gap-1 text-sm"
            >
              Subscribe to newsletter <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* AI Art */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-white/80">AI Art & Visual Experiments</h2>
            <p className="text-white/50 text-sm">
              I create images and videos using Midjourney, GPT, Recraft and other generators — exploring the aesthetic boundaries of AI creativity.
            </p>
            <Link
              href="https://www.instagram.com/piotr.macai"
              target="_blank"
              className="text-white/60 hover:text-white/90 flex items-center gap-1 text-sm"
            >
              Follow at Instagram <ArrowUpRight size={16} />
            </Link>
            <Link
              href="https://www.artstation.com/piotrmacai"
              target="_blank"
              className="text-white/60 hover:text-white/90 flex items-center gap-1 text-sm"
            >
              Follow at Artstation <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="h-px bg-white/10 w-full" />

        <div className="flex justify-start">
          <Link
            href="/contact"
            className="inline-block px-6 py-3 text-white/70 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors text-center"
          >
            Let’s Work Together
          </Link>
        </div>
      </div>
    </div>
  )
}
