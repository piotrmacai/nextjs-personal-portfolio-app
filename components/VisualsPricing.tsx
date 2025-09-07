// app/components/VisualsPricing.tsx – English version

import Link from "next/link";

const visualsData = [
  {
    title: "Branding & Social Media Content",
    options: [
      { label: "Logo & Brand Identity", price: "899 PLN" },
      { label: "Social Media Package", price: "699 PLN" }, 
    ],
    features: [
      "Custom logo and color palette design",
      "Typography and visual style",
      "Business cards and social media avatars",
      "Static templates for Instagram, LinkedIn, Facebook",
      "Stories, posts, highlights, banners",
      "Editable templates in Canva or Figma",
      "Content aligned with your brand voice",
      "3 rounds of revisions included",
    ],
  },
  {
    title: "Motion & Video Production",
    options: [
      { label: "Commercial / Educational Video", price: "from 899 PLN" },
      { label: "Social Media Video Ads", price: "from 229 PLN" },
    ],
    features: [
      "Motion and video projects",
      "Short vertical videos for Reels, TikTok, YouTube Shorts",
      "16:9 videos for websites and presentations",
      "Scripts and storyboards",
      "Voiceover and sound (optional)",
      "Photo animation",
      "Concept development",
    ],
  },
  {
    title: "UI/UX Projects",
    options: [
      { label: "Landing Page Design", price: "899 PLN" },
      { label: "Full UI Kit / Web App", price: "2,299 PLN" },
    ],
    features: [
      "Design system in Figma",
      "User flows and wireframes",
      "Responsive layouts for all devices",
      "Scalable, component-based design",
      "Clean, modern, minimalist aesthetics",
      "Handover with developer-ready files",
      "UX optimization based on goals",
      "UI consistency and accessibility standards",
    ],
  },
];

export default function VisualsPricing() {
  return (
    <section className="px-4 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-white mb-4">Visual & Design Pricing</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          High-impact design services that strengthen your brand, content, and digital experience.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {visualsData.map((item, index) => (
          <div
            key={index}
            className="bg-neutral-900 border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col justify-between backdrop-blur-sm"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
              <ul className="mb-4 space-y-2">
                {item.options.map((opt, i) => (
                  <li key={i} className="text-gray-100">
                    <span className="font-medium text-white">{opt.label}</span>: {opt.price}
                  </li>
                ))}
              </ul>
              <h4 className="font-semibold text-white mb-2 mt-4">Key features</h4>
              <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                {item.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block text-center w-full bg-white text-black py-2 px-4 rounded-xl font-medium hover:bg-gray-200 transition"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}