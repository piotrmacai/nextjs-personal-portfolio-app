"use client"

import { useState } from "react"
import { ppEditorialNewUltralightItalic, inter } from "../fonts"
import { Youtube, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [headerSize] = useState(1.2)
  const [textSize] = useState(0.8)

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 md:mt-8">
      <div className="flex flex-col gap-8">
        <h1
          className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter`}
          style={{ fontSize: `${4 * headerSize}rem` }}
        >
          Kontakt
        </h1>

        <div className="h-px bg-white/10 w-full" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            className={`${inter.className} flex flex-col gap-8 text-white/50 text-sm font-light`}
            style={{ fontSize: `${0.875 * textSize}rem` }}
          >
            <p>
            Z chęcią porozmawiam o nowych projektach, kreatywnych pomysłach lub możliwościach współpracy przy realizacji Twojej wizji.
            </p>

            <div className="space-y-4 mt-4">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-white/60" />
                <a href="mailto:piotr@macai.cloud" className="hover:text-white/80 transition-colors">
                 piotr@macai.cloud
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-white/60" />
                <a href="tel:+48123456789" className="hover:text-white/80 transition-colors">
                  +48 576 287 032
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-white/60" />
                <span>Poland</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
            <Link
              href="https://ainsider.notion.site/1bcb65ddefcf805d9f28f545e3680986?pvs=105" target="_blank" rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-white/70 border border-white/20 rounded-full font-medium bg-white/10 hover:bg-white/5 transition-colors text-center w-full max-w-[260px] text-sm mt-4"
            >
              Wycena projektu
            </Link>
            </div>

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

          <div>
                 {/* Contact Form */}
          <div className="space-y-4">
          
          <iframe src="https://ainsider.notion.site/ebd/1bcb65ddefcf805d9f28f545e3680986" width="100%" height="600" allowFullScreen className="border border-white/20 rounded-xl"/>
          
        </div>
          {/* <Link
              href="https://ainsider.notion.site/1bcb65ddefcf805d9f28f545e3680986?pvs=105" target="_blank" rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-white/70 border border-white/20 rounded-full font-medium bg-white/10 hover:bg-white/5 transition-colors text-center w-full max-w-[260px] text-sm mt-4"
            >
              Wycena projektu
            </Link> */}
            {/* <Link
              href="https://calendar.notion.so/meet/piotrmacai/rv484loq" target="_blank" rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-white/70 border border-white/20 rounded-full font-medium bg-white/10 hover:bg-white/5 transition-colors text-center w-full max-w-[260px] text-sm mt-4"
            >
             Konsultacja
            </Link> */}

           
          </div>
        </div>
      </div>
    </div>
  )
}
