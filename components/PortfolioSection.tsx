"use client"

import { useState, useRef, useMemo } from "react"
import Link from "next/link"
import Image from "next/image" // Using Next/Image for better performance
import { Film } from "lucide-react"

// Assuming your font imports are structured similarly in the consuming page or global styles
// If you want to use them here, you'd need to pass them or import them if structure allows.
// For simplicity, we'll use default text classes.

interface PortfolioItem {
    id: number | string // Allow string for the id property as seen in the original code
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

// NOTE: This array is moved here so it can be exported and kept separate.
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
        videoId: "1133675483",
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
        id: 5.15,
        title: "Rekrut Spark Website",
        description: "Business website for HR agency with CRM for job applications",
        type: "video",
        videoType: "vimeo",
        videoId: "1100387757",
        aspectRatio: "16:9",
        tags: ["web"],
        externalUrl: "https://rekrutspark.com",
    },
    {
        id: 5.4,
        title: "Ainsider AI Website",
        description: "A dynamic ad video showcasing our latest services campaign.",
        type: "video",
        videoType: "vimeo",
        videoId: "1085338341",
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
    // ADD OTHER ITEMS FROM ORIGINAL ARRAY HERE...
    // For brevity, the rest of the original 30+ items are omitted but follow the same structure.
]

/**
 * Renders the image or video player for a portfolio item.
 * Uses a cover image for videos until the iframe/video element loads.
 */
const MediaDisplay = ({ item }: { item: PortfolioItem }) => {
    const [showCover, setShowCover] = useState(true)

    const handleLoaded = () => {
        // A small delay ensures the transition is visible
        setTimeout(() => setShowCover(false), 100)
    }

    if (item.type === "image") {
        return (
            <div className="w-full h-full relative">
                <Image
                    src={item.imageUrl || ""}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
            </div>
        )
    }

    if (item.type === "video") {
        return (
            <div className="relative w-full h-full">
                {/* Cover Image (Optional) */}
                {showCover && item.imageCoverUrl && (
                    <Image
                        src={item.imageCoverUrl}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 z-10 rounded-lg"
                        style={{ transition: "opacity 0.3s", opacity: showCover ? 1 : 0 }}
                    />
                )}

                <div className="absolute inset-0 w-full h-full">
                    {/* Video Players */}
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

    return <div className="flex items-center justify-center w-full h-full bg-gray-900 text-white/50"><Film size={24} className="mr-2" /> Missing Media</div>
}

// Define the type for the props this component will accept
interface PortfolioSectionProps {
    initialFilter?: string // Optional filter tag, defaults to all if not provided
    showFilters?: boolean // Optional prop to hide the filter buttons
    title?: string // Optional title for the section
}


/**
 * The main exported component that renders a filtered list of portfolio items.
 * @param initialFilter - The tag to filter items by (e.g., 'web', 'ai').
 * @param showFilters - Whether to display the filter buttons.
 * @param title - The title of the section.
 */
export default function PortfolioSection({
    initialFilter = "all",
    showFilters = false,
    title = "Selected Work",
}: PortfolioSectionProps) {
    // Use the initialFilter prop to set the starting state
    const [activeFilter, setActiveFilter] = useState(initialFilter.toLowerCase())

    const availableFilters = ["all", "web", "ai", "visuals", "personal", "vibe coding"]

    // Use useMemo to filter the items only when the activeFilter changes
    const filteredItems = useMemo(() => {
        return activeFilter === "all"
            ? portfolioItems
            : portfolioItems.filter((item) => item.tags.includes(activeFilter))
    }, [activeFilter])

    return (
        <div className="w-full max-w-7xl mx-auto px-2 md:px-4 py-8">
            {/* Dynamic Title */}
            <h1 className="text-4xl md:text-6xl font-light italic text-white/80 tracking-tighter mb-8">
                {title}
            </h1>

            <div className="flex flex-col md:flex-row">
                {/* Left Sidebar - Conditional Filter Buttons */}
                {showFilters && (
                    <div className="w-full md:w-1/5 pr-4 mb-8 md:mb-0">
                        <div className="flex flex-wrap gap-4">
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
                )}

                {/* Right Column - Portfolio Grid */}
                <div className={`w-full ${showFilters ? 'md:w-4/5' : 'md:w-full'}`}>
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
                                <div className="md:w-[70%] w-full relative md:min-h-[300px] min-h-[200px] aspect-video">
                                    <MediaDisplay item={item} />
                                </div>
                            </div>
                        ))}
                        {filteredItems.length === 0 && (
                            <p className="text-white/50 text-center py-10">No items found for the selected filter: "{activeFilter}".</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}