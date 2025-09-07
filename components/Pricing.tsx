// app/components/Pricing.tsx – English version

import Link from "next/link";

const pricingData = [
	{
		title: "Websites",
		options: [
			{ label: "Based on template", price: "from 1,099 PLN" },
			{ label: "with UX/UI design", price: "from 2,299 PLN" },
		],
		features: [
			"Modern, responsive design",
			"SEO optimized",
			"Fast loading (90+ Google PageSpeed)",
			"Any integrations with CRM and forms",
			"Google Analytics setup",
			"Mobile-first approach",
			"Hosting and domain configuration",
			"Email setup",
		],
	},
	{
		title: "Online Stores",
		options: [
			{ label: "Based on Woo/Shopify template", price: "from 2,299 PLN" },
			{ label: "Custom UX/UI design", price: "from 4,599 PLN" },
		],
		features: [
			"Internal inventory management or via integrations",
			"Any payment gateways",
			"Integrations with CRM systems",
			"Integrations with invoicing systems",
			"E-commerce automation systems",
			"Advanced SEO optimization",
			"Google Analytics and Search Console setup",
			"Responsive mobile-first design",
			"1 year technical support",
			"High-performance hosting setup",
			"Business email setup",
			"Marketing tools integration",
			"Shipping and tax configuration",
		],
	},
	{
		title: "Full-Stack Apps / Custom Projects",
		options: [
			{ label: "Custom UX/UI design", price: "from 4,599 PLN" },
		],
		features: [
			"Homepage and 5-10 subpages",
			"Content management system",
			"Advanced SEO optimization",
			"Fast loading (90+ Google PageSpeed)",
			"Any integrations with CRM and forms",
			"Google Analytics and Search Console setup",
			"Responsive mobile-first design",
			"1 year technical support",
			"Hosting and domain configuration",
			"Business email setup",
		],
	},
];

export default function Pricing() {
	return (
		<section className="px-4 py-20 max-w-7xl mx-auto">
			<div className="text-center mb-12">
				<h2 className="text-4xl font-semibold text-white mb-4">Pricing</h2>
				<p className="text-gray-300 max-w-xl mx-auto">
					Transparent and flexible prices tailored to your project needs. Choose
					what fits best or contact us for a custom quote.
				</p>
			</div>

			<div className="grid md:grid-cols-3 gap-8">
				{pricingData.map((item, index) => (
					<div
						key={index}
						className="bg-neutral-900 border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col justify-between backdrop-blur-sm"
					>
						<div>
							<h3 className="text-2xl font-semibold text-white mb-4">
								{item.title}
							</h3>
							<ul className="mb-4 space-y-2">
								{item.options.map((opt, i) => (
									<li key={i} className="text-gray-100">
										<span className="font-medium text-white">{opt.label}</span>
										: {opt.price}
									</li>
								))}
							</ul>
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
								Request a quote
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}