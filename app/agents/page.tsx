"use client"

import { useState } from "react"
import Link from "next/link"
import { ppEditorialNewUltralightItalic, inter } from "../fonts"
import { Youtube, Instagram, Twitter, Linkedin, Film, Github } from "lucide-react"


interface PortfolioItem {
  id: number
  title: string
  description: string
  type: 'video' | 'image'
  videoType?: 'mp4' | 'youtube' | 'vimeo'
  videoId?: string
  imageUrl?: string
  aspectRatio?: '1:1' | '16:9' | '4:3' | '21:9'
  tags: string[]
  externalUrl?: string 
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Ainsider AI Website",
    description: "A dynamic ad video showcasing our latest services campaign.",
    type: "video",
    videoType: "vimeo",
     // YouTube ID
    // videoId: "VilbxnCTwbI",
    videoId: "1085338341", //https://vimeo.com/1085338341
    aspectRatio: "16:9",
    tags: ["agents"],
    externalUrl: "https://ainsider.co",
  },
  {
    id: 2,
    title: "AI Agent Interface",
    description: "Created with Open WebUI for n8n workflows & AI agents",
    type: "image",
    imageUrl: "/images/openweb-n8n.png",
    aspectRatio: "16:9",
    tags: ["ai apps", "agents"],
    externalUrl: "https://github.com/piotrmacai/n8n/tree/main/openWebUI-n8n-integration",
  },
  {
    id: 3,
    title: "Voice AI Agent",
    description: "For customer support and sales",
    type: "image",
    imageUrl: "/images/elevenbot.png",
    aspectRatio: "16:9",
    tags: ["ai", "agents"],
    externalUrl: "https://ainsider.co",
  },
  {
    id: 4,
    title: "AI Recommendation Agent",
    description: "Working directly with websites and ecommerce online stores",
    type: "image",
    imageUrl: "/images/openweb-n8n.png",  
    aspectRatio: "16:9",
    tags: ["ai"],
    externalUrl: "https://github.com/piotrmacai/n8n/tree/main/openWebUI-n8n-integration",
  },
  {
    id: 5,
    title: "AI Agents Showcase",
    description: "A Video ad showcase with Ainsider AI Agents Services.",
    type: "video",
    videoType: "vimeo",
    videoId: "1085351950", //https://vimeo.com/1085351950?share=copy#t=0
    aspectRatio: "16:9",
    tags: ["ai apps"],
    externalUrl: "https://github.com/piotrmacai/",
  },
  // {
  //   id: 3,
  //   title: "Animated Short",
  //   description: "An animated short that tells a unique story.",
  //   videoType: "mp4",
  //   videoId: "https://static.cdn-luma.com/files/58ab7363888153e3/Jitter%20Exported%20Poster.mp4",
  //   aspectRatio: "16:9",
  //   tags: ["stories"],
  // },
  // {
  //   id: 4,
  //   title: "Social Media Highlight",
  //   description: "A highlight reel crafted specifically for social media platforms.",
  //   videoType: "mp4",
  //   videoId: "https://static.cdn-luma.com/files/58ab7363888153e3/Exported%20Web%20Video.mp4",
  //   aspectRatio: "16:9",
  //   tags: ["social media", "ads"],
  // },
  // Add more portfolio items as needed
]

const availableFilters = ["all", "agents", "ai apps", "ecommerce"]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.tags.includes(activeFilter))

  // Helper function to render the appropriate media based on type
  const renderMedia = (item: PortfolioItem) => {
    switch (item.type) {
      case "video":
        switch (item.videoType) {
          case "youtube":
            return (
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&mute=1&loop=1&playlist=${item.videoId}&controls=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )
          case "vimeo":
            return (
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src={`https://player.vimeo.com/video/${item.videoId}?background=1&autoplay=1&loop=1&byline=0&title=0`}
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            )
          default: // mp4
            return (
              <video
                className="w-full h-full object-cover"
                src={item.videoId}
                loop
                muted
                playsInline
                autoPlay
              />
            )
        }
      case "image":
        return (
          <div className="w-4/5 aspect-video overflow-hidden rounded-lg mx-auto">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="object-cover w-full h-full"
          />
        </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-2 md:px-4 py-8">

        <h1
          className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter`}
          // style={{ fontSize: `${4 * headerSize}rem` }}
        >
          AI Agents Showcase
        </h1>


        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
        <div className="flex flex-wrap gap-4 mt-6">
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
              {/* <Link
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
              </Link> */}
        </div>
            {/* <Link
              href="/contact"
              className="inline-block px-6 py-3 text-white/70 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors text-center"
            >
              Collaborate with Me
            </Link> */}
          </div>
        <div className="h-px bg-white/10 w-full mb-8" />


      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar - 20% width on desktop, sticky */}
        <div className="w-full md:w-1/5 md:sticky md:top-0 md:h-screen md:overflow-y-auto pr-4">
          {/* <h1 className="text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter mb-8">
            Portfolio
          </h1> */}

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            {availableFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 border rounded-full text-sm transition-colors ${
                  activeFilter === filter
                    ? "bg-white/10 text-white"
                    : "bg-transparent text-white/50 hover:bg-white/5"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - 80% width on desktop */}
        <div className="w-full md:w-4/5">
          <div className="flex flex-col space-y-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row bg-black/20 rounded-lg overflow-hidden"
              >
                {/* Left Section: Title, Description, and Button */}
                <div className="md:w-[30%] w-full p-6 flex flex-col justify-center">
                  <h2 className="text-2xl font-light italic text-white/80 mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm text-white/50 mb-4">{item.description}</p>
                  <Link
                    href={`${item.externalUrl}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 text-white/70 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors text-center"
                  >
                    View Details
                  </Link>
                </div>

                {/* Right Section: Media */}
                <div className="md:w-[70%] w-full relative" style={{ minHeight: "300px" }}>
                  {renderMedia(item)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
