import "./globals.css"
import { ppEditorialNewUltralightItalic, inter } from "./fonts"
import type React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Voiceflow from "@/components/Voiceflow"

export const metadata = {
  title: "Fullstack Creative Studio",
  description: "Full Stack Design & Development Studio /by @PiotrMacai",
  keywords: "AI Creative Studio, AI Video Studio, AI Video Agency, AI Creative Agency, Full Stack Design, Full Stack Development, AI Design, AI Development, Web Design, Web Development, PiotrMacai",
  author: "@PiotrMacai",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  canonical: "https:/macai.cloud",
  ogTitle: "Fullstack Creative Studio | Full Stack Design & Development",
  ogDescription: "Discover Full Stack Design & Development creative solutions by @PiotrMacai & set of specialized AI Agents.",
  ogUrl: "https:/macai.cloud",
  // ogImage: "https://yourwebsite.com/og-image.jpg",
  twitterCard: "summary_large_image",
  twitterTitle: "AI Creative Studio | Full Stack Design & Development",
  twitterDescription: "AI Creative Studio offers top-tier Full Stack Design & Development solutions powered by AI.",
  // twitterImage: "https://yourwebsite.com/twitter-image.jpg",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ppEditorialNewUltralightItalic.variable} ${inter.variable}`}>
      <body className={`${inter.className} min-h-screen bg-[#141414] flex flex-col cursor-soft-dot`}>
        <Header />
        <main className="flex-grow flex items-center justify-center p-4 md:p-8">{children}</main>
        <Footer />
        <Voiceflow />
      </body>
    </html>
  )
}



import './globals.css'