// app/components/AgentsPricing.tsx – English version

import Link from "next/link";

const agentsData = [
	{
		title: "Customer Support & Lead Generation Agents",
		options: [
			{ label: "Text Agent", price: "from 7 PLN" },
			{ label: "Voice Agent", price: "from 999 PLN" },
		],
		features: [
			"Automatic responses to customer inquiries",
			"Integration with website chat and social media",
			"Basic natural language processing",
			"Lead qualification and segmentation",
			"Cloud configuration",
			"Basic analytics and reporting",
			"CRM integration (e.g., HubSpot, Salesforce)",
			"3 months technical support",
		],
	},
	{
		title: "eCommerce Agents & Recommendation Systems",
		options: [
			{ label: "Text Agent", price: "from 999 PLN" },
			{ label: "Voice Agent", price: "from 1,499 PLN" },
		],
		features: [
			"Personalized product recommendations",
			"Automated sales chat",
			"Integration with eCommerce platforms (e.g., Shopify, WooCommerce)",
			"Customer behavior analysis",
			"Multi-language support",
			"Advanced sales analytics",
			"Cloud configuration",
			"6 months technical support",
			"Team training included",
		],
	},
	{
		title: "Content Generation Agents",
		options: [{ label: "Text Agent", price: "from 499 PLN" }],
		features: [
			"Automatic creation of posts and articles",
			"SEO content optimization",
			"Multilingual content generation",
			"Integration with CMS (e.g., WordPress)",
			"Content publishing schedules",
			"Basic content analytics",
			"Cloud configuration",
			"3 months technical support",
		],
	},
];

export default function AgentsPricing() {
	return (
		<section className="px-4 py-20 max-w-7xl mx-auto">
			<div className="text-center mb-12">
				<h2 className="text-4xl font-semibold text-white mb-4">
					AI Agents & Automation Systems Details
				</h2>
				<p className="text-gray-300 max-w-xl mx-auto">
					Flexible and scalable packages of AI Agents & Automation Systems for
					sales, support, and marketing.
				</p>
			</div>

			<div className="grid md:grid-cols-3 gap-8">
				{agentsData.map((item, index) => (
					<div
						key={index}
						className="bg-neutral-900 border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col justify-between backdrop-blur-sm"
					>
						<div>
							<h3 className="text-2xl font-semibold text-white mb-4">
								{item.title}
							</h3>
							{/* <ul className="mb-4 space-y-2">
                {item.options.map((opt, i) => (
                  <li key={i} className="text-gray-100">
                    <span className="font-medium text-white">{opt.label}</span>: {opt.price}
                  </li>
                ))}
              </ul> */}
							<h4 className="font-semibold text-white mb-2 mt-4">
								Key features
							</h4>
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
								Request a Quote
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}