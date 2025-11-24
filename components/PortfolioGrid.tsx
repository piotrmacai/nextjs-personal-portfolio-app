"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Play } from "lucide-react"
import Link from "next/link"

export type ProjectType = "all" | "web" | "video" | "designs" | "ai"

export interface Project {
    id: number
    title: string
    description: string
    type: ProjectType
    image: string
    tags: string[]
    aspect?: "landscape" | "portrait"
    mediaType?: "image" | "video" | "vimeo"
    mediaSrc?: string
}

const projects: Project[] = [
    {
        id: 1,
        title: "Websites & Ecommerce",
        description: "Modern designs & development for websites and ecommerce",
        type: "web",
        image: "/modern-ecommerce-website.png",
        mediaType: "vimeo",
        mediaSrc: "1123336804",
        tags: ["Next.js", "Web", "UX/UI"],
    },
    {
        id: 2,
        title: "Video Business Website",
        description: "Modern motion website built in Next.js with video portfolio section",
        type: "web",
        image: "/placeholder.svg",
        mediaType: "vimeo",
        mediaSrc: "1133675483",
        tags: ["Web", "Design"],
    },
    {
        id: 3,
        title: "Ainsider.co Website",
        description: "Creative short AI generated ads for social media",
        type: "video",
        image: "/images/ainsider-mobile.png",
        aspect: "portrait",
        mediaType: "image",
        tags: ["Motion", "Video", "AI"],
    },
    {
        id: 4,
        title: "My Services",
        description: "Creative short AI generated ads for social media",
        type: "video",
        image: "/images/ainsider-mobile.png",
        aspect: "portrait",
        mediaType: "video",
        mediaSrc: "/videos/videotext.mp4",
        tags: ["Motion", "Video", "AI"],
    },

    {
        id: 5,
        title: "My Github",
        description: "Ready-to-use starter for custom AI apps built with Vercel AI SDK",
        type: "ai",
        image: "/images/vercelchat.png",
        mediaType: "video",
        mediaSrc: "/videos/githubvideo.mp4",
        tags: ["AI"],
    },
    {
        id: 6,
        title: "AI Automations & Agents Templates",
        description: "Ready-to-use powerful automation and agent templates",
        type: "ai",
        image: "/placeholder.svg",
        mediaType: "vimeo",
        mediaSrc: "1109736494",
        tags: ["AI"],
    },
    {
        id: 7,
        title: "UX UI Designs",
        description: "Modern UI/UX designs for web and mobile applications",
        type: "designs",
        image: "/design.jpg",
        mediaType: "image",
        tags: ["UX UI", "Design", "Visuals"],
    },
    {
        id: 8,
        title: "AI Agents Directory",
        description: "AI Directory with embedded AI Recommendation Agent",
        type: "web",
        image: "/images/ainsiderstore.png",
        mediaType: "image",
        tags: ["Web", "AI"],
    },
    {
        id: 4,
        title: "AI Voice Agents",
        description: "AI Voice Agent trained on business data and built into website",
        type: "web",
        image: "/images/voicebotmacai.png",
        mediaType: "image",
        tags: ["Web", "AI"],
    },
    // {
    //     id: 7,
    //     title: "Fullstack Chatbot with n8n",
    //     description: "Fullstack chatbot that works with any n8n workflow",
    //     type: "ai",
    //     image: "/images/customchatbot.png",
    //     mediaType: "image",
    //     tags: ["AI"],
    // },
    // {
    //     id: 8,
    //     title: "Customer Support AI Agent",
    //     description: "Recommendation & customer support AI agent trained on company data",
    //     type: "ai",
    //     image: "/images/ainsiderlink.png",
    //     mediaType: "image",
    //     tags: ["AI"],
    // },

    // {
    //     id: 12,
    //     title: "AI Chatbot App with multiple LLMs",
    //     description: "Chatbot powered by Gemini models and n8n workflows",
    //     type: "ai",
    //     image: "/images/geminin8n.png",
    //     mediaType: "image",
    //     tags: ["AI"],
    // },
    // {
    //     id: 13,
    //     title: "Personal Telegram AI Assistant",
    //     description: "Personal AI assistant connected to your data and platforms",
    //     type: "ai",
    //     image: "/images/personalai.png",
    //     mediaType: "image",
    //     tags: ["AI"],
    // },
    // {
    //     id: 14,
    //     title: "Video Generation & Publishing Automation",
    //     description: "Full AI system that generates marketing videos and publishes to social media",
    //     type: "ai",
    //     image: "/images/videoautomation.jpg",
    //     mediaType: "image",
    //     tags: ["AI"],
    // },
    //    {
    //         id: 1,
    //         title: "AI Image Editing App",
    //         description: "Nano Banana powered image generation and editing app",
    //         type: "ai",
    //         image: "/images/creativeai.png",
    //         mediaType: "image",
    //         tags: ["AI"],
    //     },
    // {
    //     id: 6,
    //     title: "SlovlyStudio.com",
    //     description: "Shopify ecommerce for handmade fashion",
    //     type: "web",
    //     image: "/placeholder.svg",
    //     mediaType: "vimeo",
    //     mediaSrc: "1088472830",
    //     tags: ["Web", "Ecommerce"],
    // },
    // {
    //     id: 7,
    //     title: "Editorial reel",
    //     description: "Editorial design for social media",
    //     type: "video",
    //     image: "/corporate-website-design.png",
    //     aspect: "portrait",
    //     mediaType: "video",
    //     mediaSrc: "/video/videoads2.mp4",
    //     tags: ["Video", "Social Media"],
    // },
    // {
    //     id: 14,
    //     title: "SkinProjectClinic.pl",
    //     description: "Beauty clinic & brand website",
    //     type: "web",
    //     image: "/placeholder.svg",
    //     mediaType: "vimeo",
    //     mediaSrc: "1088475265",
    //     tags: ["Web"],
    // },
    // {
    //     id: 6.1,
    //     title: "Visuals Showcase Reel",
    //     description: "Motion graphics and visual design showcase",
    //     type: "video",
    //     image: "/placeholder.svg",
    //     mediaType: "vimeo",
    //     mediaSrc: "1085351448",
    //     tags: ["Design", "Visuals"],
    // },
    // {
    //     id: 8,
    //     title: "AI Automations & Agents Templates",
    //     description: "Ready-to-use powerful automation and agent templates",
    //     type: "ai",
    //     image: "/placeholder.svg",
    //     mediaType: "vimeo",
    //     mediaSrc: "1109736494",
    //     tags: ["AI"],
    // },

    // {
    //     id: 30,
    //     title: "Voice Agent Starter (Vercel AI SDK)",
    //     description: "Voice agent starter built with Vercel AI SDK and ElevenLabs",
    //     type: "ai",
    //     image: "/images/elevenvercel.png",
    //     mediaType: "image",
    //     tags: ["AI"],
    // },
    // {
    //     id: 11,
    //     title: "Editorial Reel #2",
    //     description: "Creative short AI generated ads for social media",
    //     type: "video",
    //     image: "/product-demo-video.png",
    //     aspect: "portrait",
    //     mediaType: "video",
    //     mediaSrc: "/video/reels.mp4",
    //     tags: ["Video", "Social Media", "AI"],
    // },

    // {
    //     id: 12,
    //     title: "Promo Video for Logistic Company",
    //     description: "Video promoting a logistic company Machtrans.pl",
    //     type: "video",
    //     image: "/luxury-packaging-design.jpg", 
    //     mediaType: "vimeo",
    //     mediaSrc: "1133649674",
    //     tags: ["Web", "UX UI"],
    // },

    // {
    //     id: 22,
    //     title: "Oskmachowski.pl",
    //     description: "Ultra-fast, SEO-optimized business website with built-in AI assistant",
    //     type: "web",
    //     image: "/placeholder.svg",
    //     mediaType: "vimeo",
    //     mediaSrc: "1121933690",
    //     tags: ["Web"],
    // },
    // {
    //   id: 16,
    //   title: "Websites Showcase",
    //   description: "Video with mu websites and Landing pages showcase",
    //   type: "web",
    //   image: "/luxury-packaging-design.jpg", //https://vimeo.com/1123336988?fl=ip&fe=ec
    //   mediaType: "vimeo",
    //   mediaSrc: "1123336988",
    //   tags: ["Web", "UX UI"],
    // },
    // {
    //     id: 17,
    //     title: "Short Video for E-commerce",
    //     description: "Short reel video promoting bike ecommerce store",
    //     type: "video",
    //     aspect: "portrait",
    //     image: "/luxury-packaging-design.jpg", 
    //     mediaType: "vimeo",
    //     mediaSrc: "1135785662",
    //     tags: ["Web", "UX UI"],
    // },
    // {
    //   id: 17,
    //   title: "Designs & Visuals",
    //   description: "See my Visuals and UX/UI Designs at Behance",
    //   type: "designs",
    //   image: "/images/design.jpg",
    //   mediaType: "image",
    //   tags: ["Design", "Visuals"],
    // },
    // {
    //   id: 18,
    //   title: "Behance Portfolio Reel",
    //   description: "Dynamic reel showcasing my visual and design work",
    //   type: "designs",
    //   image: "/placeholder.svg",
    //   mediaType: "vimeo",
    //   mediaSrc: "1133683410",
    //   tags: ["Design", "Visuals"],
    // },

    // {
    //     id: 20,
    //     title: "Rekrut Spark Website",
    //     description: "Business website for HR agency with integrated job application CRM",
    //     type: "web",
    //     image: "/placeholder.svg",
    //     mediaType: "vimeo",
    //     mediaSrc: "1100387757",
    //     tags: ["Web"],
    // },

    // {
    //   id: 22,
    //   title: "Ainsider AI Website Ad",
    //   description: "Dynamic promotional video for Ainsider AI services",
    //   type: "video",
    //   image: "/images/tools.png",
    //   mediaType: "vimeo",
    //   mediaSrc: "1085338341",
    //   tags: ["Video", "AI"],
    // },

    // {
    //     id: 36,
    //     title: "Machtrans.pl",
    //     description: "Top SEO and ultra-fast React.js website for transport company",
    //     type: "web",
    //     image: "/images/machtrans.png",
    //     mediaType: "image",
    //     tags: ["Web"],
    // },
    // {
    //     id: 4,
    //     title: "Editorial reel",
    //     description: "Editorial design for social media",
    //     type: "video",
    //     image: "/corporate-website-design.png",
    //     aspect: "portrait",
    //     mediaType: "video",
    //     mediaSrc: "/video/videoads2.mp4",
    //     tags: ["Video", "Social Media"],
    // },
    //   {
    //   id: 5,
    //   title: "Visuals and Design ShowcaseSocial Media Campaign",
    //   description: "Horizontal video showcasing my portfolio of visuals",
    //   type: "designs",
    //   image: "/social-media-video-ad.png", //https://vimeo.com/1123336916?fl=ip&fe=ec
    //   mediaType: "vimeo",
    //   mediaSrc: "1123336916",
    //   tags: ["Design", "Visuals"],
    // },
    // {
    //   id: 6,
    //   title: "Editorial Reel #2",
    //   description: "Dynamic motion editorial video showcase",
    //   type: "designs",
    //   image: "/brand-identity-design.png",
    //   mediaType: "vimeo",
    //   mediaSrc: "1123336868", //https://vimeo.com/1123336868?fl=ip&fe=ec
    //   tags: ["Video", "Social Media"],
    // },
    // {
    //   id: 42,
    //   title: "Editorial Brand Reel",
    //   description: "Short video created with AI Video models ",
    //   type: "video",
    //   image: "/3d-product-animation.png",
    //   mediaType: "video",
    //   mediaSrc: "/video/video3.mp4",
    //   tags: ["Motion Graphics", "Video", "AI"],
    // },
    // {
    //   id: 34,
    //   title: "AI Customer Support Agent",
    //   description: "Website-embedded AI agent for perfect customer support",
    //   type: "web",
    //   image: "/images/ainsiderbot.png",
    //   mediaType: "image",
    //   tags: ["Web", "AI"],
    // },
    // {
    //     id: 35.5,
    //     title: "Logo for Machtrans Company",
    //     description: "Handcrafted logo for Machtrans Logistic & Transport Company",
    //     type: "designs",
    //     image: "/machtrans-logo.png",
    //     mediaType: "image",
    //     tags: ["UX UI", "Design", "Visuals"],
    // },

]

export default function PortfolioGrid() {
    const [activeFilter, setActiveFilter] = useState<ProjectType>("all")

    const filteredProjects = (
        activeFilter === "all"
            ? projects
            : activeFilter === "ai"
                ? projects.filter((project) =>
                    project.tags.some((t) => t.toLowerCase() === "ai" || t.toLowerCase().includes("ai"))
                )
                : projects.filter((project) => project.type === activeFilter)
    )
        .slice()
        .sort((a, b) => a.id - b.id)

    // Distribute items into 3 columns to keep chronological left-to-right order per row
    const masonryColumns: Project[][] = [[], [], []]
    filteredProjects.forEach((project, index) => {
        masonryColumns[index % 3].push(project)
    })

    const filters: { label: string; value: ProjectType }[] = [
        { label: "All", value: "all" },
        { label: "Web", value: "web" },
        { label: "Video", value: "video" },
        { label: "Designs", value: "designs" },
        { label: "Ai", value: "ai" },
    ]

    return (
        <div className="bg-transparent text-white">
            {/* Hero Section */}
            <section className="container mx-auto px-4 pt-32 pb-16">
                <div className="text-center">
                    <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                        <span className="text-white bg-clip-text text-transparent">
                            Portfolio
                        </span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-neutral-400">Explore my creative work and projects</p>
                </div>

                {/* Filter Buttons */}
                {/* <div className="mt-12 flex flex-wrap justify-center gap-3">
                    {filters.map((filter) => (
                        <Button
                            key={filter.value}
                            onClick={() => setActiveFilter(filter.value)}
                            variant={activeFilter === filter.value ? "default" : "outline"}
                            className={
                                activeFilter === filter.value
                                    ? "bg-white text-black hover:bg-lime-400"
                                    : "border-white/20 bg-white/5 text-white backdrop-blur-xl hover:bg-white/10"
                            }
                        >
                            {filter.label}
                        </Button>
                    ))}
                </div> */}
            </section>

            {/* Portfolio Grid */}
            <section className="container mx-auto px-4 pb-20">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {masonryColumns.map((column, colIndex) => (
                        <div key={colIndex} className="flex flex-col gap-6">
                            {column.map((project) => (
                                <Card
                                    key={project.id}
                                    className="group liquid-glass overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-lime-300/50"
                                >
                                    <div className={`relative ${project.aspect === "portrait" ? "aspect-[9/16]" : "aspect-video"} overflow-hidden`}>
                                        {project.mediaType === "vimeo" && project.mediaSrc ? (
                                            <iframe
                                                src={`https://player.vimeo.com/video/${/\d+/.test(project.mediaSrc) ? project.mediaSrc : (project.mediaSrc.match(/(\d+)/)?.[1] ?? "")}?autoplay=1&muted=1&playsinline=1&autopause=0&background=1`}
                                                className="absolute inset-0 h-full w-full"
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowFullScreen
                                                title={project.title}
                                            />
                                        ) : project.mediaType === "video" && project.mediaSrc ? (
                                            <video
                                                className="absolute inset-0 h-full w-full object-cover"
                                                src={project.mediaSrc}
                                                controls
                                                muted
                                                autoPlay
                                                loop
                                                playsInline
                                            />
                                        ) : (
                                            <>
                                                <Image
                                                    src={project.image || "/placeholder.svg"}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                {project.type === "video" && (
                                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lime-300/90 backdrop-blur-sm">
                                                            <Play className="h-6 w-6 fill-black text-black" />
                                                        </div>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                        <Badge className="absolute top-3 right-3 bg-black/60 text-white backdrop-blur-sm">
                                            {project.type}
                                        </Badge>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
                                        <p className="mb-4 text-sm text-neutral-400">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <Badge key={tag} variant="outline" className="border-white/20 bg-white/5 text-neutral-300">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="py-20 text-center">
                    <p className="text-xl text-neutral-400">See My Full Portfolio</p>
                    <Link href="/portfolio" className="mt-4 inline-flex items-center rounded-full bg-white/5 px-6 py-2 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/10">
                        View Portfolio
                    </Link>
                </div>

                {filteredProjects.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="text-xl text-neutral-400">No projects found in this category</p>
                    </div>
                )}
            </section>
        </div>
    )
}
