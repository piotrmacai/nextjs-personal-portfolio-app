"use client"

import Link from "next/link"
import { Instagram, Twitter, Linkedin, Github } from "lucide-react"

interface SocialMediaProps {
  className?: string
  iconSize?: number
  showInstagram?: boolean
  showBehance?: boolean
}

export default function SocialMedia({ 
  className = "", 
  iconSize = 22,
  showInstagram = true,
  showBehance = true
}: SocialMediaProps) {

  return (
    <div className={`flex flex-wrap gap-4 justify-center mt-2 sm:mb-4 md:mb-8 ${className}`}>
      <Link
        href="https://twitter.com/piotrmacai"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/60 hover:text-white/90 transition-colors mt-1"
      >
        <Twitter size={iconSize} />
        <span className="sr-only">Twitter</span>
      </Link>
      <Link
        href="https://linkedin.com/in/piotrmacai"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/60 hover:text-white/90 transition-colors mt-1"
      >
        <Linkedin size={iconSize} />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link
        href="https://github.com/piotrmacai"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/60 hover:text-white/90 transition-colors mt-1"
      >
        <Github size={iconSize} />
        <span className="sr-only">GitHub</span>
      </Link>
      {showInstagram && (
        <Link
          href="https://www.instagram.com/piotr.macai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white/90 transition-colors mt-1"
        >
          <Instagram size={iconSize} />
          <span className="sr-only">Instagram</span>
        </Link>
      )}
      {showBehance && (
        <Link
          href="https://behance.net/macaistudio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white/90 transition-colors"
        >
          <span className="font-bold text-lg">Be</span>
          <span className="sr-only">Behance</span>
        </Link>
      )}
    </div>
  )
}
