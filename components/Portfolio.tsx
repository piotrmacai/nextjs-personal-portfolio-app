"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ppEditorialNewUltralightItalic, inter } from "@/app/fonts" // Updated font path assuming the component is in a subfolder or sibling
import { Youtube, Instagram, Twitter, Linkedin, Film, Github } from "lucide-react"

// --- 1. DATA STRUCTURE AND DEFINITIONS ---

interface PortfolioItem {
  id: number | string
  title: string
  description: string
  type: 'video' | 'image'
  videoType?: 'mp4' | 'youtube' | 'vimeo'
  videoId?: string
  imageUrl?: string
  imageCoverUrl?: string
  aspectRatio?: '1:1' | '16:9' | '4:3' | '21:9'
  tags: string[]
  externalUrl?: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Video Business website",
    description: "Modern motion website built in Next.js with video portfolio app",
    type: "video",
    videoType: "vimeo",
    videoId: "1133675483", //https://vimeo.com/1133675483?fl=ip&fe=ec
    aspectRatio: "16:9",
    tags: ["web", "design"],
    externalUrl: "https://creative.macai.dev/",
  },
  {
    id: 2,
    title: "AI Agents Directory",
    description: "AI Directory with embeded AI Recommendation Agent",
    type: "image",
    imageUrl: "/images/ainsiderstore.png",
    aspectRatio: "16:9",
    tags: ["web", "ai", "personal"],
    externalUrl: "https://ainsider.cloud",
  },
  {
    id: 3,
    title: "Promptr - Ai Art Prompts Gallery",
    description: "A curated gallery of creative prompts for generative AI art.",
    type: "image",
    imageUrl: "/images/promptgallery.png",
    aspectRatio: "16:9",
    tags: ["web", "ai", "personal"],
    externalUrl: "https://promptr.macai.dev",
  },
  {
    id: 4,
    title: "Designs & Visuals",
    description: "See my Visuals and UX UI Designs at Behance",
    type: "image",
    imageUrl: "/images/design.jpg",
    aspectRatio: "16:9",
    tags: ["visuals"],
    externalUrl: "https://behance.net/macaistudio",
  },
  {
    id: 5,
    title: "See my Behance",
    description: "All my Visuals, Designs and UX UI at Behance",
    type: "video",
    videoType: "vimeo",
    videoId: "1133683410", //https://vimeo.com/1133683410?fl=ip&fe=ec
    aspectRatio: "16:9",
    tags: ["web", "design"],
    externalUrl: "https://www.behance.net/macaistudio/",
  },
  {
    id: 6,
    title: "AI Chatbot App with multiple LLMs",
    description: "with Gemini models and n8n workflows",
    type: "image",
    imageUrl: "/images/geminin8n.png",
    aspectRatio: "16:9",
    tags: ["web", "ai", "personal"],
    externalUrl: "https://github.com/piotrmacai/Gemini-Chatbot-App",
  },
  // {
  //   id: 5.15,
  //   title: "Rekrut Spark Website",
  //   description: "Business website for HR agency with CRM for job applications",
  //   type: "video",
  //   videoType: "vimeo",
  //   videoId: "1100387757", //https://vimeo.com/1100387757
  //   aspectRatio: "16:9",
  //   tags: ["web"],
  //   externalUrl: "https://rekrutspark.com",
  // },
  // {
  //   id: 1,
  //   title: "AI Voice Agent",
  //   description: "AI Voice Agent trained on business built-in into website",
  //   type: "image",
  //   imageUrl: "/images/voicebotmacai.png",
  //   aspectRatio: "16:9",
  //   tags: ["web", "ai"],
  //   externalUrl: "https://ainsider.store",
  // },
  {
    id: 7,
    title: "AI Image Editing App",
    description: "Nano Banana powered Image Generation and Editing App",
    type: "image",
    imageUrl: "/images/creativeai.png",
    aspectRatio: "16:9",
    tags: ["web", "ai", "personal"],
    externalUrl: "https://github.com/piotrmacai/Gemini-Chatbot-App",
  },
  {
    id: 8,
    title: "Macai Studio Website",
    description: "All about my AI and Web Solutions Studio",
    type: "video",
    videoType: "vimeo",
    // YouTube ID
    // videoId: "VilbxnCTwbI",
    videoId: "1085338341", //https://vimeo.com/1085338341
    aspectRatio: "16:9",
    imageCoverUrl: "/images/tools.png",
    tags: ["web", "personal"],
    externalUrl: "https://studio.macai.dev",
  },
  {
    id: 9,
    title: "AI Chatbot App with Vercel AI SDK",
    description: "Perfect as starter for own AI Apps. Built in Next.js with Vercel AI Gateway.",
    type: "image",
    imageUrl: "/images/vercelchat.png",
    aspectRatio: "16:9",
    tags: ["web", "ai"],
    externalUrl: "https://ainsiderchat.vercel.app/",
  },
  // {
  //   id: 6,
  //   title: "Visuals Showcase",
  //   description: "A dynamic ad video showcasing our latest services campaign.",
  //   type: "video",
  //   videoType: "vimeo",
  //   videoId: "1085351448", //https://vimeo.com/1085351448
  //   aspectRatio: "16:9",
  //   tags: ["visuals"],
  //   externalUrl: "https://vimeo.com/1085351448",
  // }, 	 
  // {
  //   id: 7,
  //   title: "After-rave.eu",
  //   description: "Multilingual Ecommerce with Supplements created at Shopify",
  //   type: "video",
  //   videoType: "vimeo",
  //   // YouTube ID
  //   // videoId: "VilbxnCTwbI",
  //   videoId: "1082919322", //https://vimeo.com/1082919322
  //   aspectRatio: "16:9",
  //   tags: ["web"], 
  //   externalUrl: "https://after-rave.eu",
  // },
  {
    id: 10,
    title: "Fullstack Chatbot App",
    description: "working with any n8n workflow",
    type: "image",
    imageUrl: "/images/customchatbot.png",
    aspectRatio: "16:9",
    tags: ["ai"],
    externalUrl: "https://github.com/piotrmacai/openwebui-n8n-app",
  },
  {
    id: 11,
    title: "Agents and Automations Templates",
    description: "Ready to use powerful set of automation templates.",
    type: "video",
    videoType: "vimeo",
    videoId: "1109736494",
    aspectRatio: "16:9",
    tags: ["ai", "personal"],
    externalUrl: "https://ainsider.cloud",
  },
  // {
  //   id: 8.5,
  //   title: "Recommendation and customer support AI Agent",
  //   description: "trained on company data, services and products",
  //   type: "image",
  //   imageUrl: "/images/ainsiderlink.png",
  //   aspectRatio: "16:9",
  //   tags: ["ai"],
  //   externalUrl: "https://ainsider.link",
  // },
  // {
  //   id: 9,
  //   title: "Oskmachowski.pl",
  //   description: "Ultra-fast Business & well SEO-optimized Website with built-in AI Assistant",
  //   type: "video",
  //   videoType: "vimeo",
  //   // YouTube ID
  //   // videoId: "VilbxnCTwbI",
  //   videoId: "1121933690", //https://vimeo.com/1121933690
  //   aspectRatio: "16:9",
  //   tags: ["web"],
  //   externalUrl: "https://oskmachowski.pl",
  // },
  {
    id: 12,
    title: "Voice Agent App with Vercel AI SDK",
    description: "Perfect as starter for own AI Apps. Built in Next.js with Vercel AI Gateway.",
    type: "image",
    imageUrl: "/images/elevenvercel.png",
    aspectRatio: "16:9",
    tags: ["web", "ai"],
    externalUrl: "https://v0.app/chat/eleven-labs-agents-starter-xuyVdQFxPAE?ref=L4O3TN",
  },
  {
    id: 13,
    title: "Customized Personal AI Assistant at Telegram",
    description: "connected with your own platforms and data",
    type: "image",
    imageUrl: "/images/personalai.png",
    aspectRatio: "16:9",
    tags: ["ai"],
    externalUrl: "https://github.com/piotrmacai/n8n/tree/main/telegram-personal-agent",
  },
  // {
  //   id: 10,
  //   title: "SlovlyStudio.com",
  //   description: "Ecommerce with Home made fashion created at Shopify",
  //   type: "video",
  //   videoType: "vimeo",
  //   // YouTube ID
  //   // videoId: "VilbxnCTwbI",
  //   videoId: "1088472830", //https://vimeo.com/1088472830
  //   aspectRatio: "16:9",
  //   tags: ["web"], 
  //   externalUrl: "https://slovlystudio.com",
  // },
  // {
  //   id: 11,
  //   title: "SkinProjectClinic.pl",
  //   description: "Website for beauty clinic & brand",
  //   type: "video",
  //   videoType: "vimeo",
  //   // YouTube ID
  //   // videoId: "VilbxnCTwbI",
  //   videoId: "1088475265", //https://vimeo.com/1088475265
  //   aspectRatio: "16:9",
  //   tags: ["web"],
  //   externalUrl: "https://www.skinprojectclinic.pl/",
  // },
  // {
  //   id: '9.5b', // Changed duplicate ID 9.5 to '9.5b'
  //   title: "AI Agent built-in into website",
  //   description: "with goal to be perfect customer support",
  //   type: "image",
  //   imageUrl: "/images/ainsiderbot.png",
  //   aspectRatio: "16:9",
  //   tags: ["ai"],
  //   externalUrl: "https://ainsider.co",
  // },
  // {
  //   id: 12.5,
  //   title: "Complete CRM for Business",
  //   description: "Highly personalized CRM for business with AI Assitant and automation workflows",
  //   type: "image",
  //   imageUrl: "/images/crmnotion.png",
  //   aspectRatio: "16:9",
  //   tags: ["ai"],
  //   externalUrl: "https://ainsider.co/crm",
  // },
  // {
  //   id: 13,
  //   title: "Machtrans.pl",
  //   description: "Top SEO and ultra-fast Website in React.js for Transport Company",
  //   type: "image",
  //   imageUrl: "/images/machtrans.png",
  //   aspectRatio: "16:9",
  //   tags: ["web"],
  //   externalUrl: "https://machtrans.pl",
  // },
  // {
  //   id: 13.5,
  //   title: "Video Generation & Publishing Automation",
  //   description: "Complete AI system for generating marketing or ad video and publish it to social media",
  //   type: "image",
  //   imageUrl: "/images/videoautomation.jpg",
  //   aspectRatio: "16:9",
  //   tags: ["ai"],
  //   externalUrl: "https://github.com/piotrmacai/n8n/tree/main/ai-video-automation",
  // },
  // {
  //   id: 14,
  //   title: "Landing Page for Business CRM",
  //   description: "Ultra fast landing page created in React.js",
  //   type: "video",
  //   videoType: "vimeo",
  //   // YouTube ID
  //   // videoId: "VilbxnCTwbI",
  //   videoId: "1121924337", //https://vimeo.com/1121924337
  //   aspectRatio: "16:9",
  //   tags: ["web"],
  //   externalUrl: "https://ai.studio/apps/drive/1gj3DyNXi5-9fgxTmBWZ_OH9cvNEqRVBR",
  // },
  // {
  //   id: 15,
  //   title: "Pgr-elektroteam.pl",
  //   description: "Multilingual Ecommerce with Supplements created at Shopify",
  //   type: "video",
  //   videoType: "vimeo",
  //   // YouTube ID
  //   // videoId: "VilbxnCTwbI",
  //   videoId: "1085338795", //https://vimeo.com/1085338795?share=copy#t=0
  //   aspectRatio: "16:9",
  //   tags: ["web"],
  //   externalUrl: "https://pgr-elektroteam.pl/",
  // },
  // {
  //   id: 15.5,
  //   title: "Recommendation and customer support AI Agent",
  //   description: "with goal to find the best solutions for users",
  //   type: "image",
  //   imageUrl: "/images/ainsider-link.jpg",
  //   aspectRatio: "16:9",
  //   tags: ["ai"],
  //   externalUrl: "https://ainsider.link",
  // },
  {
    id: 14,
    title: "AI powered Business Dashboard",
    description: "Created in React.js with Google Gemini AI",
    type: "image",
    imageUrl: "/images/AiLocalSeo.png",
    aspectRatio: "16:9",
    tags: ["ai"],
    externalUrl: "https://ai.studio/apps/drive/1XayPfs4Sb0EQpLeUKm5mQRyw2KEdMdmQ",
  },
  {
    id: 15,
    title: "Wordpress blog post complete automation",
    description: "n8n workflow created posts with images on autopilot",
    type: "image",
    imageUrl: "/images/n8n-wordpress.png",
    aspectRatio: "16:9",
    tags: ["ai"],
    externalUrl: "https://github.com/piotrmacai/n8n/tree/main/wordpress-full-blog-automation",
  },
  {
    id: 16,
    title: "Projects Showcase",
    description: "A short look into our company projects showcase.",
    type: "video",
    videoType: "vimeo",
    aspectRatio: "16:9",
    videoId: "1085350766",
    tags: ["web"],
    externalUrl: "https://www.behance.net/macaistudio",
  },
  {
    id: 17,
    title: "Custom Linktree Website with AI Agent",
    description: "Custom website being the custom Linktree alternative with AI Chatbot. Created in Next.js.",
    type: "video",
    videoType: "vimeo",
    // YouTube ID
    // videoId: "VilbxnCTwbI",
    videoId: "1091506278", //https://vimeo.com/1091506278
    aspectRatio: "16:9",
    tags: ["web"],
    externalUrl: "https://ainsider.link",
  },
  // {
  //   id: 19,
  //   title: "Services Campaign",
  //   description: "A dynamic ad video showcasing our latest services campaign.",
  //   type: "video",
  //   videoType: "vimeo",
  //   // YouTube ID
  //   // videoId: "VilbxnCTwbI",
  //   videoId: "1085350527", //https://vimeo.com/1085350527
  //   aspectRatio: "16:9",
  //   tags: ["visuals"],
  //   externalUrl: "https://ainsider.co",
  // },
  // {
  //   id: 21,
  //   title: "After-rave.eu",
  //   description: "Multilingual Ecommerce with Supplements created at Shopify",
  //   type: "video",
  //   videoType: "vimeo",
  //   // YouTube ID
  //   // videoId: "VilbxnCTwbI",
  //   videoId: "1082919322", //https://vimeo.com/1082919322
  //   aspectRatio: "16:9",
  //   tags: ["web"], 
  //   externalUrl: "https://after-rave.eu",
  // },
  // {
  //   id: 22,
  //   title: "Business Website with Catalog",
  //   description: "For Car Mechanic",
  //   type: "image",
  //   imageUrl: "/images/cora.png",
  //   aspectRatio: "16:9",
  //   tags: ["ai"],
  //   externalUrl: "https://www.cora-goralczyk.pl/",
  // },
  // {
  //   id: 23,
  //   title: "AI Agents Showcase",
  //   description: "A Video ad showcase with Ainsider AI Agents Services.",
  //   type: "video",
  //   videoType: "vimeo",
  //   videoId: "1085351950", //https://vimeo.com/1085351950?share=copy#t=0
  //   aspectRatio: "16:9",
  //   tags: ["visuals"],
  //   externalUrl: "https://github.com/piotrmacai/",
  // },
  // {
  //   id: 24,
  //   title: "Lanellya.de",
  //   description: "Multilingual Ecommerce created at Shopify",
  //   type: "video",
  //   videoType: "vimeo",
  //   // YouTube ID
  //   // videoId: "VilbxnCTwbI",
  //   videoId: "1088477211", //https://vimeo.com/1088477211?share=copy#t=0
  //   aspectRatio: "16:9",
  //   tags: ["web"], 
  //   externalUrl: "https://lanellya.de",
  // },
]

const availableFilters = ["all", "web", "ai", "visuals", "personal"]

// --- 2. MEDIA DISPLAY COMPONENT ---

/**
 * Handles the display logic for videos (Vimeo/YouTube/MP4) and images.
 * Uses useState to manage the cover image visibility for a smooth transition.
 */
const MediaDisplay = ({ item }: { item: PortfolioItem }) => {
  const [showCover, setShowCover] = useState(true)

  // Adjusted handleLoaded to use a timer for reliable cover hiding
  const handleLoaded = () => {
    // A small delay ensures the video player is fully rendered before removing the cover
    setTimeout(() => {
      setShowCover(false)
    }, 300)
  }

  if (item.type === "image") {
    // For images, we just display the image with proper aspect ratio handling
    return (
      <div className="w-full h-full overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.title}
          // The image will fill the container (which is 70% of the parent item row)
          className="object-cover w-full h-full"
        />
      </div>
    )
  }

  if (item.type === "video") {
    // For videos, manage the cover display
    return (
      <div className="relative w-full h-full">
        {/* Cover Image (fades out when video loads) */}
        {showCover && item.imageCoverUrl && (
          <img
            src={item.imageCoverUrl}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover z-10 rounded-lg"
            style={{ transition: "opacity 0.3s", opacity: showCover ? 1 : 0 }}
          />
        )}
        <div className="absolute inset-0 w-full h-full">
          {/* Video Players - Use unique keys to force re-render/player reset */}
          {item.videoType === "youtube" && (
            <iframe
              key={`Youtubeer-${item.videoId}`}
              className="w-full h-full absolute top-0 left-0"
              src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&mute=1&loop=1&playlist=${item.videoId}&controls=0`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ opacity: showCover ? 0 : 1, transition: "opacity 0.3s" }}
              onLoad={handleLoaded} // Use onLoad for iframe to detect load completion
            ></iframe>
          )}
          {item.videoType === "vimeo" && (
            <iframe
              key={`vimeo-player-${item.videoId}`}
              className="w-full h-full absolute top-0 left-0"
              // Ensure video is set to background/loop/autoplay for automatic silent playback
              src={`https://player.vimeo.com/video/${item.videoId}?background=1&autoplay=1&loop=1&byline=0&title=0`}
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{ opacity: showCover ? 0 : 1, transition: "opacity 0.3s" }}
              onLoad={handleLoaded} // Use onLoad for iframe to detect load completion
            ></iframe>
          )}
          {(!item.videoType || item.videoType === "mp4") && item.videoId && ( // Only render if videoId (URL) exists for mp4
            <video
              key={`mp4-player-${item.videoId || item.id}`}
              className="w-full h-full object-cover"
              src={item.videoId}
              loop
              muted
              playsInline
              autoPlay
              style={{ opacity: showCover ? 0 : 1, transition: "opacity 0.3s" }}
              onLoadedData={handleLoaded} // Use onLoadedData for video element
            />
          )}
        </div>
      </div>
    )
  }

  return null
}

// --- 3. MAIN PORTFOLIO COMPONENT ---

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all")

  // Filter the items based on the active tag
  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.tags.includes(activeFilter))

  return (
    <div className="w-full max-w-7xl mx-auto px-2 md:px-4 py-8 text-white">
      {/* Portfolio Header */}
      <h1
        className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white tracking-tighter mb-4`}
      >
        Personal Projects
      </h1>

      {/* Social Links Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
        <div className="flex flex-wrap gap-4 mt-6">
          <Link
            href="https://twitter.com/piotrmacai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white/90 transition-colors mt-1"
            aria-label="Twitter profile"
          >
            <Twitter size={20} />
          </Link>
          <Link
            href="https://linkedin.com/in/piotrmacai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white/90 transition-colors mt-1"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="https://github.com/piotrmacai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white/90 transition-colors mt-1"
            aria-label="GitHub profile"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://www.instagram.com/piotr.macai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white/90 transition-colors mt-1"
            aria-label="Instagram profile"
          >
            <Instagram size={20} />
          </Link>
          <Link
            href="https://behance.net/macaistudio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white/90 transition-colors"
            aria-label="Behance profile"
          >
            {/* Behance 'Be' text icon */}
            <span className="font-bold text-lg">Be</span>
          </Link>
        </div>
      </div>
      <div className="h-px bg-white/10 w-full mb-8" />

      {/* Main Content: Sidebar and Portfolio Items */}
      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar (Filters) - Sticky on Desktop */}
        <div className="w-full md:w-1/5 md:sticky md:top-28 md:h-screen md:overflow-y-auto pr-4 pb-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            {availableFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 border rounded-full text-sm transition-colors ${activeFilter === filter
                  ? "bg-white/10 text-white border-white/20"
                  : "bg-transparent text-white/50 border-transparent hover:bg-white/5"
                  }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column (Portfolio Grid) */}
        <div className="w-full md:w-4/5 md:pl-8">
          <div className="flex flex-col space-y-10">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row bg-black/20 rounded-xl overflow-hidden shadow-xl border border-white/5"
              >
                {/* Left Section: Title, Description, and Button */}
                <div className="md:w-[35%] w-full p-6 flex flex-col justify-center">
                  <h2 className={`text-3xl ${ppEditorialNewUltralightItalic.className} font-light italic text-white mb-2`}>
                    {item.title}
                  </h2>
                  <p className="text-sm text-white/70 mb-6">{item.description}</p>
                  <Link
                    href={`${item.externalUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 text-white border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors text-center w-full md:w-auto self-start"
                  >
                    View Details
                  </Link>
                </div>

                {/* Right Section: Media Display */}
                <div
                  className="md:w-[65%] w-full relative md:min-h-[300px] min-h-[250px] bg-black"
                >
                  <MediaDisplay item={item} />
                </div>
              </div>
            ))}
            {filteredItems.length === 0 && (
              <p className="text-white/50 text-center py-12">
                No projects found for the "{activeFilter}" category.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}