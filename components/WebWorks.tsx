"use client"

import { useState } from "react"
import Link from "next/link"
// import { ppEditorialNewUltralightItalic, inter } from "./fonts"
import { Youtube, Instagram, Twitter, Linkedin, Film, Github } from "lucide-react"
import { inter, ppEditorialNewUltralightItalic } from "@/app/fonts"


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
        tags: ["all", "business"],
        externalUrl: "https://ainsider.co",
      },
      {
        id: 1.1,
        title: "Rekrut Spark Website",
        description: "Business website for HR agency with CRM for job applications",
        type: "video",
        videoType: "vimeo",
         // YouTube ID
        // videoId: "VilbxnCTwbI",
        videoId: "1100387757", //https://vimeo.com/1100387757
        aspectRatio: "16:9",
        tags: ["all", "business"],
        externalUrl: "https://rekrutspark.com",
      },
      {
        id: 2,
        title: "Projects Showcase",
        description: "A short look into our company projects showcase.",
        type: "video",
        videoType: "vimeo",
        aspectRatio: "16:9",
        videoId: "1085350766", 
        tags: ["all"],
        externalUrl: "https://www.behance.net/macaistudio",
      },
      {
        id: 3,
        title: "AI Agent Interface",
        description: "Created with Open WebUI for n8n workflows & AI agents",
        type: "image",
        imageUrl: "/images/openweb-n8n.png",
        aspectRatio: "16:9",
        tags: ["all", "apps"],
        externalUrl: "https://github.com/piotrmacai/n8n/tree/main/openWebUI-n8n-integration",
      },
      {
        id: 4,
        title: "Ainsider AI Website",
        description: "A dynamic ad video showcasing our latest services campaign.",
        type: "video",
        videoType: "vimeo",
         // YouTube ID
        // videoId: "VilbxnCTwbI",
        videoId: "1085338341", //https://vimeo.com/1085338341
        aspectRatio: "16:9",
        tags: ["all", "business"],
        externalUrl: "https://ainsider.co",
      },
      {
        id: 5,
        title: "SkinProjectClinic.pl",
        description: "Website for beauty clinic & brand",
        type: "video",
        videoType: "vimeo",
         // YouTube ID
        // videoId: "VilbxnCTwbI",
        videoId: "1088475265", //https://vimeo.com/1088475265
        aspectRatio: "16:9",
       tags: ["all", "business"], 
        externalUrl: "https://ainsider.tools",
      },
      {
        id: 1.2,
        title: "Generative AI App - PromptGod v1",
        description: "This awesome app can create text prompts based on your image, allow to customize them easily and generate from it unique image or graphics.",
        type: "video",
        videoType: "vimeo",
         // YouTube ID
        // videoId: "VilbxnCTwbI",
        videoId: "1093987447", //https://vimeo.com/1093987447
        aspectRatio: "16:9",
        tags: ["all", "ai", "apps"],
        externalUrl: "https://github.com/piotrmacai/geminiai-promptgod-appv1",
      },
      {
        id: 5.5,
        title: "Custom Linktree Website with AI Agent",
        description: "Custom website being the custom Linktree alternative with AI Chatbot. Created in Next.js.",
        type: "video",
        videoType: "vimeo",
         // YouTube ID
        // videoId: "VilbxnCTwbI",
        videoId: "1091506278", //https://vimeo.com/1091506278
        aspectRatio: "16:9",
        tags: ["all", "apps"],
        externalUrl: "https://ainsider.link",
      },
      {
        id: 6,
        title: "After-rave.eu",
        description: "Multilingual Ecommerce with Supplements created at Shopify",
        type: "video",
        videoType: "vimeo",
         // YouTube ID
        // videoId: "VilbxnCTwbI",
        videoId: "1082919322", //https://vimeo.com/1082919322
        aspectRatio: "16:9",
        tags: ["all", "ecommerce"],
        externalUrl: "https://after-rave.eu",
      },
      {
        id: 7,
        title: "Piotrmacai.com",
        description: "Personal Portfolio Website with no-code CMS at Sanity",
        type: "video",
        videoType: "vimeo",
         // YouTube ID
        // videoId: "VilbxnCTwbI",
        videoId: "1085352267", //https://vimeo.com/1085352267?share=copy#t=0
        aspectRatio: "16:9",
        tags: ["all", "business"],
        externalUrl: "https://piotrmacai.com",
      },
      // {
      //   id: 8,
      //   title: "Voice AI Agent",
      //   description: "For customer support and sales",
      //   type: "image",
      //   imageUrl: "/images/elevenbot.png",
      //   aspectRatio: "16:9",
      //   tags: ["ai"],
      //   externalUrl: "https://ainsider.co",
      // },
      {
        id: 9,
        title: "SlovlyStudio.com",
        description: "Ecommerce with Home made fashion created at Shopify",
        type: "video",
        videoType: "vimeo",
         // YouTube ID
        // videoId: "VilbxnCTwbI",
        videoId: "1088472830", //https://vimeo.com/1088472830
        aspectRatio: "16:9",
        tags: ["all", "ecommerce"],
        externalUrl: "https://slovlystudio.com",
      },
      {
        id: 10,
        title: "Business Website with Catalog",
        description: "For Car Mechanic",
        type: "image",
        imageUrl: "/images/cora.png",
        aspectRatio: "16:9",
        tags: ["all", "business", "ecommerce"],
        externalUrl: "https://www.cora-goralczyk.pl/",
      },
      // {
      //   id: 11,
      //   title: "AI Recommendation Agent",
      //   description: "Working directly with websites and ecommerce online stores",
      //   type: "image",
      //   imageUrl: "/images/openweb-n8n.png",  
      //   aspectRatio: "16:9",
      //   tags: ["ai"],
      //   externalUrl: "https://github.com/piotrmacai/n8n/tree/main/openWebUI-n8n-integration",
      // },
      {
        id: 12,
        title: "Pgr-elektroteam.pl",
        description: "Multilingual Ecommerce with Supplements created at Shopify",
        type: "video",
        videoType: "vimeo",
         // YouTube ID
        // videoId: "VilbxnCTwbI",
        videoId: "1085338795", //https://vimeo.com/1085338795?share=copy#t=0
        aspectRatio: "16:9",
        tags: ["all", "business"],
        externalUrl: "https://pgr-elektroteam.pl/",
      },
      {
        id: 13,
        title: "Projects Showcase",
        description: "A short look into our company projects showcase.",
        type: "video",
        videoType: "vimeo",
        aspectRatio: "16:9",
        videoId: "1085350766", 
        tags: ["all", "apps"],
        externalUrl: "https://www.behance.net/macaistudio",
      },
       {
        id: 14,
        title: "Lanellya.de",
        description: "Multilingual Ecommerce created at Shopify",
        type: "video",
        videoType: "vimeo",
       videoId: "1088477211", //https://vimeo.com/1088477211?share=copy#t=0
        aspectRatio: "16:9",
        tags: ["all", "ecommerce"],
        externalUrl: "https://lanellya.de",
      },
      // {
      //   id: 15,
      //   title: "Services Campaign",
      //   description: "A dynamic ad video showcasing our latest services campaign.",
      //   type: "video",
      //   videoType: "vimeo",
      //   videoId: "1085350527", 
      //   aspectRatio: "16:9",
      //   tags: ["video"],
      //   externalUrl: "https://ainsider.co",
      // },
      // {
      //   id: 16,
      //   title: "Visuals Showcase",
      //   description: "A dynamic ad video showcasing our latest services campaign.",
      //   type: "video",
      //   videoType: "vimeo",
      //   videoId: "1085351448", 
      //   aspectRatio: "16:9",
      //   tags: ["video", "marketing"],
      //   externalUrl: "https://vimeo.com/1085351448",
      // },
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

const availableFilters = ["all", "business", "ecommerce", "apps"]

export default function Agents() {
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
          Web & Apps Showcase
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
                <div className="md:w-[70%] w-full relative md:min-h-[300px] min-h-[200px]">
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
