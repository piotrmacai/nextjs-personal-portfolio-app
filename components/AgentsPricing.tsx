// app/components/AgentsPricing.tsx – wersja polska

import Link from "next/link";

const agentsData = [
  {
    title: "Agenty Wsparcia Klienta & Generowania Leadów",
    options: [
      { label: "Agent Tekstowy", price: "już od 7 zł" },
      { label: "Agent Głosowy", price: "już od 999 zł" },
    ],
    features: [
      "Automatyczne odpowiedzi na zapytania klientów",
      "Integracja z czatem na stronie i social media",
      "Podstawowe przetwarzanie języka naturalnego",
      "Kwalifikacja i segmentacja leadów",
      "Konfiguracja w chmurze",
      "Podstawowa analityka i raportowanie",
      "Integracja z CRM (np. HubSpot, Salesforce)",
      "3 miesiące wsparcia technicznego",
    ],
  },
  {
    title: "Agenty eCommerce & Systemy Rekomendacji",
    options: [
      { label: "Agent Tekstowy", price: "już od 999 zł" },
      { label: "Agent Głosowy", price: "już od 1499 zł" },
    ],
    features: [
      "Spersonalizowane rekomendacje produktów",
      "Automatyzacja czatu sprzedażowego",
      "Integracja z platformami eCommerce (np. Shopify, WooCommerce)",
      "Analiza zachowań klientów",
      "Obsługa wielu języków",
      "Zaawansowana analityka sprzedaży",
      "Konfiguracja w chmurze",
      "6 miesięcy wsparcia technicznego",
      "Szkolenie dla zespołu w cenie",
    ],
  },
  {
    title: "Agenty Generowania Treści",
    options: [
      { label: "Agent Tekstowy", price: "już od 499 zł" },
    ],
    features: [
      "Automatyczne tworzenie postów i artykułów",
      "Optymalizacja SEO treści",
      "Generowanie treści wielojęzycznych",
      "Integracja z CMS (np. WordPress)",
      "Harmonogramy publikacji treści",
      "Podstawowa analityka treści",
      "Konfiguracja w chmurze",
      "3 miesiące wsparcia technicznego",
    ],
  },
];

export default function AgentsPricing() {
  return (
    <section className="px-4 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-white mb-4">Szczegóły Agentów AI & Systemów Automatyzacji</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Elastyczne i skalowalne pakiety Agentów AI & Systemów Automatyzacji dla sprzedaży, wsparcia i marketingu.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {agentsData.map((item, index) => (
          <div
            key={index}
            className="bg-neutral-900 border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col justify-between backdrop-blur-sm"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
              {/* <ul className="mb-4 space-y-2">
                {item.options.map((opt, i) => (
                  <li key={i} className="text-gray-100">
                    <span className="font-medium text-white">{opt.label}</span>: {opt.price}
                  </li>
                ))}
              </ul> */}
              <h4 className="font-semibold text-white mb-2 mt-4">Kluczowe funkcje</h4>
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
                Poproś o wycenę
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}