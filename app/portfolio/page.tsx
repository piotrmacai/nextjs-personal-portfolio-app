"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ppEditorialNewUltralightItalic, inter } from "../fonts" // Assuming these imports are correct
import { Youtube, Instagram, Twitter, Linkedin, Film, Github } from "lucide-react"

interface PortfolioItem {
  id: number
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

// NOTE: I am using a simplified version of your data for brevity.
// The actual portfolioItems array is very long, but the structure is the same.
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "AI Voice Agent",
    description: "AI Voice Agent trained on business built-in into website",
    type: "image",
    imageUrl: "/images/voicebotmacai.png",
    aspectRatio: "16:9",
    tags: ["web", "ai"],
    externalUrl: "https://ainsider.store",
  },
  {
    id: 0.2,
    title: "Video Website",
    description: "Modern Next.js website with video portfolio app",
    type: "video",
    videoType: "vimeo",
    videoId: "1133675483", //https://vimeo.com/1133675483?fl=ip&fe=ec
    aspectRatio: "16:9",
    tags: ["web", "ai", "vibe coding"],
    externalUrl: "https://ainsider.store",
  },

  {
    id: 0.3,
    title: "AI Chatbot Starter (Vercel AI SDK)",
    description: "Ready-to-use starter for custom AI apps built with Vercel AI SDK",
    type: "image",
    imageUrl: "/images/vercelchat.png",
    aspectRatio: "16:9",
    tags: ["visuals"],
    externalUrl: "https://behance.net/macaistudio",
  },
  {
    id: 3,
    title: "AI Agents Directory",
    description: "AI Directory with embeded AI Recommendation Agent",
    type: "image",
    imageUrl: "/images/ainsiderstore.png",
    aspectRatio: "16:9",
    tags: ["web", "ai", "personal"],
    externalUrl: "https://ainsider.store",
  },
  {
    id: 3.1,
    title: "AI Designer",
    description: "Gemini powered app for generating and editing stunning products photos",
    type: "image",
    imageUrl: "/images/AiProductDesigner.png",
    aspectRatio: "16:9",
    tags: ["web", "ai", "vibe coding"],
    externalUrl: "https://github.com/piotrmacai/Gemini-ProductPhotoStudio",
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
    id: 3.1,
    title: "Support and Lead Gen Agent",
    description: "Complete customer support AI Agent built in Voiceflow",
    type: "image",
    imageUrl: "/images/voiceflow.png",
    aspectRatio: "16:9",
    tags: ["web", "ai", "personal"],
    externalUrl: "https://ainsider.cloud",
  },
  {
    id: 4.9,
    title: "AI Image Editing App",
    description: "Nano Banana powered Image Generation and Editing App",
    type: "image",
    imageUrl: "/images/creativeai.png",
    aspectRatio: "16:9",
    tags: ["web", "ai", "vibe coding"],
    externalUrl: "https://github.com/piotrmacai/Gemini-Chatbot-App",
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
    externalUrl: "https://insdrstudio.vercel.app/",
  },
  {
    id: 5.1,
    title: "AI Chatbot App with multiple LLMs",
    description: "with Gemini models and n8n workflows",
    type: "image",
    imageUrl: "/images/geminin8n.png",
    aspectRatio: "16:9",
    tags: ["web", "ai", "vibe coding"],
    externalUrl: "https://github.com/piotrmacai/Gemini-Chatbot-App",
  },
  {
    id: 8,
    title: "Agents and Automations Templates",
    description: "Ready to use powerful set of automation templates.",
    type: "video",
    videoType: "vimeo",
    videoId: "1109736494",
    aspectRatio: "16:9",
    tags: ["ai", "personal"],
    externalUrl: "https://ainsider.store",
  },
  {
    id: 8.1,
    title: "Social Media Posts Creator",
    description: "AI powered social media image and videos social post creator",
    type: "image",
    imageUrl: "/images/GeminiSocialGenerator.png",
    aspectRatio: "16:9",
    tags: ["web", "ai", "vibe coding"],
    externalUrl: "https://github.com/piotrmacai/Gemini-SocialMediaDesigner",
  },
  {
    id: 5.15,
    title: "Rekrut Spark Website",
    description: "Business website for HR agency with CRM for job applications",
    type: "video",
    videoType: "vimeo",
    videoId: "1100387757", //https://vimeo.com/1100387757
    aspectRatio: "16:9",
    tags: ["web"],
    externalUrl: "https://rekrutspark.com",
  },
  {
    id: 8.5,
    title: "Recommendation and customer support AI Agent",
    description: "trained on company data, services and products",
    type: "image",
    imageUrl: "/images/ainsiderlink.png",
    aspectRatio: "16:9",
    tags: ["ai"],
    externalUrl: "https://ainsider.link",
  },
  {
    id: 5.4,
    title: "Ainsider AI Website",
    description: "A dynamic ad video showcasing our latest services campaign.",
    type: "video",
    videoType: "vimeo",
    // YouTube ID
    // videoId: "VilbxnCTwbI",
    videoId: "1085338341", //https://vimeo.com/1085338341
    aspectRatio: "16:9",
    imageCoverUrl: "/images/tools.png",
    tags: ["web", "personal"],
    externalUrl: "https://ainsider.co",
  },
  {
    id: 5.5,
    title: "AI Chatbot App with Vercel AI SDK",
    description: "Perfect as starter for own AI Apps. Built in Next.js with Vercel AI Gateway.",
    type: "image",
    imageUrl: "/images/vercelchat.png",
    aspectRatio: "16:9",
    tags: ["web", "ai"],
    externalUrl: "https://ainsiderchat.vercel.app/",
  },
  {
    id: 8.5,
    title: "AI and Automation Blog",
    description: "at polish language with AI and Automation tips and tricks",
    type: "image",
    imageUrl: "/images/blog-ainsider.png",
    aspectRatio: "16:9",
    tags: ["ai", "web"],
    externalUrl: "https://blog.ainsider.cloud",
  },
  {
    id: 6,
    title: "Visuals Showcase",
    description: "A dynamic ad video showcasing our latest services campaign.",
    type: "video",
    videoType: "vimeo",
    videoId: "1085351448", //https://vimeo.com/1085351448
    aspectRatio: "16:9",
    tags: ["visuals"],
    externalUrl: "https://vimeo.com/1085351448",
  }, {
    id: 7,
    title: "After-rave.eu",
    description: "Multilingual Ecommerce with Supplements created at Shopify",
    type: "video",
    videoType: "vimeo",
    // YouTube ID
    // videoId: "VilbxnCTwbI",
    videoId: "1082919322", //https://vimeo.com/1082919322
    aspectRatio: "16:9",
    tags: ["web"],
    externalUrl: "https://after-rave.eu",
  },
  {
    id: 7.5,
    title: "Fullstack Chatbot App",
    description: "working with any n8n workflow",
    type: "image",
    imageUrl: "/images/customchatbot.png",
    aspectRatio: "16:9",
    tags: ["ai", "web"],
    externalUrl: "https://github.com/piotrmacai/openwebui-n8n-app",
  },
  {
    id: 9,
    title: "Oskmachowski.pl",
    description: "Ultra-fast Business & well SEO-optimized Website with built-in AI Assistant",
    type: "video",
    videoType: "vimeo",
    // YouTube ID
    // videoId: "VilbxnCTwbI",
    videoId: "1121933690", //https://vimeo.com/1121933690
    aspectRatio: "16:9",
    tags: ["web"],
    externalUrl: "https://oskmachowski.pl",
  },
  {
    id: 9.4,
    title: "Voice Agent App with Vercel AI SDK",
    description: "Perfect as starter for own AI Apps. Built in Next.js with Vercel AI Gateway.",
    type: "image",
    imageUrl: "/images/elevenvercel.png",
    aspectRatio: "16:9",
    tags: ["web", "ai", "vibe coding"],
    externalUrl: "https://v0.app/chat/eleven-labs-agents-starter-xuyVdQFxPAE?ref=L4O3TN",
  },
  {
    id: 9.5,
    title: "Customized Personal AI Assistant at Telegram",
    description: "connected with your own platforms and data",
    type: "image",
    imageUrl: "/images/personalai.png",
    aspectRatio: "16:9",
    tags: ["ai"],
    externalUrl: "https://github.com/piotrmacai/n8n/tree/main/telegram-personal-agent",
  },
  {
    id: 10,
    title: "SlovlyStudio.com",
    description: "Ecommerce with Home made fashion created at Shopify",
    type: "video",
    videoType: "vimeo",
    // YouTube ID
    // videoId: "VilbxnCTwbI",
    videoId: "1088472830", //https://vimeo.com/1088472830
    aspectRatio: "16:9",
    tags: ["web"],
    externalUrl: "https://slovlystudio.com",
  },
  {
    id: 11,
    title: "SkinProjectClinic.pl",
    description: "Website for beauty clinic & brand",
    type: "video",
    videoType: "vimeo",
    // YouTube ID
    // videoId: "VilbxnCTwbI",
    videoId: "1088475265", //https://vimeo.com/1088475265
    aspectRatio: "16:9",
    tags: ["web"],
    externalUrl: "https://www.skinprojectclinic.pl/",
  },
  {
    id: 9.5,
    title: "AI Agent built-in into website",
    description: "with goal to be perfect customer support",
    type: "image",
    imageUrl: "/images/ainsiderbot.png",
    aspectRatio: "16:9",
    tags: ["ai", "web"],
    externalUrl: "https://ainsider.co",
  },
  //       {
  //   id: 12,
  //   title: "AI powered Business Dashboard",
  //   description: "Created in React.js with Google Gemini AI",
  //   type: "image",
  //   imageUrl: "/images/AiLocalSeo.png",
  //   aspectRatio: "16:9",
  //   tags: ["ai"],
  //   externalUrl: "https://ai.studio/apps/drive/1XayPfs4Sb0EQpLeUKm5mQRyw2KEdMdmQ",
  // },
  {
    id: 12.5,
    title: "Complete CRM for Business",
    description: "Highly personalized CRM for business with AI Assitant and automation workflows",
    type: "image",
    imageUrl: "/images/crmnotion.png",
    aspectRatio: "16:9",
    tags: ["web"],
    externalUrl: "https://ainsider.co/crm",
  },
  {
    id: 13,
    title: "Machtrans.pl",
    description: "Top SEO and ultra-fast Website in React.js for Transport Company",
    type: "image",
    imageUrl: "/images/machtrans.png",
    aspectRatio: "16:9",
    tags: ["web"],
    externalUrl: "https://machtrans.pl",
  },
  {
    id: 13.5,
    title: "Video Generation & Publishing Automation",
    description: "Complete AI system for generating marketing or ad video and publish it to social media",
    type: "image",
    imageUrl: "/images/videoautomation.jpg",
    aspectRatio: "16:9",
    tags: ["ai", "visuals"],
    externalUrl: "https://github.com/piotrmacai/n8n/tree/main/ai-video-automation",
  },
  {
    id: 14,
    title: "Landing Page for Business CRM",
    description: "Ultra fast landing page created in React.js",
    type: "video",
    videoType: "vimeo",
    // YouTube ID
    // videoId: "VilbxnCTwbI",
    videoId: "1121924337", //https://vimeo.com/1121924337
    aspectRatio: "16:9",
    tags: ["web", "vibe coding"],
    externalUrl: "https://ai.studio/apps/drive/1gj3DyNXi5-9fgxTmBWZ_OH9cvNEqRVBR",
  },
  {
    id: 15,
    title: "Pgr-elektroteam.pl",
    description: "Multilingual Ecommerce with Supplements created at Shopify",
    type: "video",
    videoType: "vimeo",
    // YouTube ID
    // videoId: "VilbxnCTwbI",
    videoId: "1085338795", //https://vimeo.com/1085338795?share=copy#t=0
    aspectRatio: "16:9",
    tags: ["web"],
    externalUrl: "https://pgr-elektroteam.pl/",
  },
  {
    id: 15.5,
    title: "Recommendation and customer support AI Agent",
    description: "with goal to find the best solutions for users",
    type: "image",
    imageUrl: "/images/ainsider-link.jpg",
    aspectRatio: "16:9",
    tags: ["ai"],
    externalUrl: "https://ainsider.link",
  },
  {
    id: 16,
    title: "AI powered Business Dashboard",
    description: "Created in React.js with Google Gemini AI",
    type: "image",
    imageUrl: "/images/AiLocalSeo.png",
    aspectRatio: "16:9",
    tags: ["ai", "web", "vibe coding"],
    externalUrl: "https://ai.studio/apps/drive/1XayPfs4Sb0EQpLeUKm5mQRyw2KEdMdmQ",
  }, {
    id: 16.5,
    title: "Wordpress blog post complete automation",
    description: "n8n workflow created posts with images on autopilot",
    type: "image",
    imageUrl: "/images/n8n-wordpress.png",
    aspectRatio: "16:9",
    tags: ["ai", "web"],
    externalUrl: "https://github.com/piotrmacai/n8n/tree/main/wordpress-full-blog-automation",
  },
  {
    id: 17,
    title: "Projects Showcase",
    description: "A short look into our company projects showcase.",
    type: "video",
    videoType: "vimeo",
    aspectRatio: "16:9",
    videoId: "1085350766",
    tags: ["web", "visuals"],
    externalUrl: "https://www.behance.net/macaistudio",
  },

  {
    id: 18,
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
  {
    id: 19,
    title: "Services Campaign",
    description: "A dynamic ad video showcasing our latest services campaign.",
    type: "video",
    videoType: "vimeo",
    // YouTube ID
    // videoId: "VilbxnCTwbI",
    videoId: "1085350527", //https://vimeo.com/1085350527
    aspectRatio: "16:9",
    tags: ["visuals"],
    externalUrl: "https://ainsider.co",
  },
  {
    id: 21,
    title: "After-rave.eu",
    description: "Multilingual Ecommerce with Supplements created at Shopify",
    type: "video",
    videoType: "vimeo",
    // YouTube ID
    // videoId: "VilbxnCTwbI",
    videoId: "1082919322", //https://vimeo.com/1082919322
    aspectRatio: "16:9",
    tags: ["web"],
    externalUrl: "https://after-rave.eu",
  },
  {
    id: 22,
    title: "Business Website with Catalog",
    description: "For Car Mechanic",
    type: "image",
    imageUrl: "/images/cora.png",
    aspectRatio: "16:9",
    tags: ["web"],
    externalUrl: "https://www.cora-goralczyk.pl/",
  },
  {
    id: 23,
    title: "AI Agents Showcase",
    description: "A Video ad showcase with Ainsider AI Agents Services.",
    type: "video",
    videoType: "vimeo",
    videoId: "1085351950", //https://vimeo.com/1085351950?share=copy#t=0
    aspectRatio: "16:9",
    tags: ["visuals", "ai"],
    externalUrl: "https://github.com/piotrmacai/",
  },
  {
    id: 24,
    title: "Lanellya.de",
    description: "Multilingual Ecommerce created at Shopify",
    type: "video",
    videoType: "vimeo",
    // YouTube ID
    // videoId: "VilbxnCTwbI",
    videoId: "1088477211", //https://vimeo.com/1088477211?share=copy#t=0
    aspectRatio: "16:9",
    tags: ["web"],
    externalUrl: "https://lanellya.de",
  },
  // {

  //   id: 6,

  //   title: "Short Design Ad",

  //   description: "A dynamic short ad video showcasing our latest designs.",

  //   videoType: "vimeo",

  //   videoId: "1072857610", //https://vimeo.com/1072857610

  //   aspectRatio: "16:9",

  //   tags: ["marketing"],

  //   externalUrl: "https://ainsider.co",

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
  // 
  // Example: To add a new AI portfolio item, include "ai" in the tags array:
  // {
  //   id: 25,
  //   title: "Your AI Project Title",
  //   description: "Description of your AI project",
  //   type: "image", // or "video"
  //   imageUrl: "/images/your-image.png",
  //   aspectRatio: "16:9",
  //   tags: ["ai"], // Include "ai" here to show in AI filter
  //   externalUrl: "https://your-url.com",
  // },
  // END OF ORIGINAL FULL ARRAY
]

const availableFilters = ["all", "web", "ai", "visuals", "personal", "vibe coding"]

/**
 * NEW COMPONENT: Separated from PortfolioPage to use Hooks legally (useState, useRef)
 * and give React a stable component identity for media content, fixing the key error.
 */
const MediaDisplay = ({ item }: { item: PortfolioItem }) => {
  // ✅ Hooks are now called legally inside a functional component
  const [showCover, setShowCover] = useState(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  if (item.type === "image") {
    return (
      <div className="w-4/5 aspect-video overflow-hidden rounded-lg mx-auto">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="object-cover w-full h-full"
        />
      </div>
    )
  }

  if (item.type === "video") {
    // Hide cover after video/iframe loads
    const handleLoaded = () => {
      setShowCover(false)
    }

    return (
      <div className="relative w-full h-full">
        {showCover && item.imageCoverUrl && (
          <img
            src={item.imageCoverUrl}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover z-10 rounded-lg"
            style={{ transition: "opacity 0.3s", opacity: showCover ? 1 : 0 }}
          />
        )}
        <div className="absolute inset-0 w-full h-full">
          {/* Video below the cover image - Added a unique key for each player type to be safe */}
          {item.videoType === "youtube" && (
            <iframe
              key={`Youtubeer-${item.videoId}`}
              className="w-full h-full absolute top-0 left-0"
              src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1&mute=1&loop=1&playlist=${item.videoId}&controls=0`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ opacity: showCover ? 0 : 1, transition: "opacity 0.3s" }}
              onLoad={handleLoaded}
            ></iframe>
          )}
          {item.videoType === "vimeo" && (
            <iframe
              key={`vimeo-player-${item.videoId}`}
              className="w-full h-full absolute top-0 left-0"
              src={`https://player.vimeo.com/video/${item.videoId}?background=1&autoplay=1&loop=1&byline=0&title=0`}
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{ opacity: showCover ? 0 : 1, transition: "opacity 0.3s" }}
              onLoad={handleLoaded}
            ></iframe>
          )}
          {(!item.videoType || item.videoType === "mp4") && (
            <video
              key={`mp4-player-${item.videoId || item.id}`}
              className="w-full h-full object-cover"
              src={item.videoId}
              loop
              muted
              playsInline
              autoPlay
              style={{ opacity: showCover ? 0 : 1, transition: "opacity 0.3s" }}
              onLoadedData={handleLoaded}
            />
          )}
        </div>
      </div>
    )
  }

  return null
}


export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.tags.includes(activeFilter))


  return (
    <div className="w-full max-w-7xl mx-auto px-2 md:px-4 py-8 mt-20 md:mt-20 sm:mt-4">

      <h1
        className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter`}
      >
        Portfolio
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
      </div>
      <div className="h-px bg-white/10 w-full mb-8" />


      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar - 20% width on desktop, sticky */}
        <div className="w-full md:w-1/5 md:sticky md:top-0 md:h-screen md:overflow-y-auto pr-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            {availableFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 border rounded-full text-sm transition-colors ${activeFilter === filter
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
                // This key is correct and crucial for the map loop
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
                  {/* 🔥 Replaced renderMedia(item) with the new MediaDisplay component */}
                  <MediaDisplay item={item} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}