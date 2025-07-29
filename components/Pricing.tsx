// app/components/Pricing.tsx – wersja polska

import Link from "next/link";

const pricingData = [
  {
    title: "Strony WWW",
    options: [
      { label: "Na podstawie szablonu", price: "od 1 099 zł" },
      { label: "z projektem UX/UI", price: "od 2 299 zł" },
    ],
    features: [
      "Nowoczesny, responsywny design",
      "Zoptymalizowany SEO",
      "Szybkie ładowanie (90+ Google PageSpeed)",
      "Dowolne integracje z CRM i formularzami",
      "Konfiguracja Google Analytics",
      "Podejście mobile-first",
      "Konfiguracja hostingu i domeny",
      "Konfiguracja e-mail",
    ],
  },
  {
    title: "Sklepy Internetowe",
    options: [
      { label: "Oparty na szablonie Woo/Shopify", price: "od 2 299 zł" },
      { label: "Niestandardowy projekt UX/UI", price: "od 4 599 zł" },
    ],
    features: [
      "Wewnętrzne zarządzanie magazynem lub przez integracje",
      "Dowolne bramki płatności",
      "Integracje z systemami CRM",
      "Integracje z systemami fakturowania",
      "Systemy automatyzacji e-commerce",
      "Zaawansowana optymalizacja SEO",
      "Konfiguracja Google Analytics i Search Console",
      "Responsywny design mobile-first",
      "1 rok wsparcia technicznego",
      "Konfiguracja wysokowydajnego hostingu",
      "Konfiguracja e-mail firmowego",
      "Integracja narzędzi marketingowych",
      "Konfiguracja dostaw i podatków",
    ],
  },
  {
    title: "Aplikacje Full-Stack / Projekty Niestandardowe",
    options: [
      { label: "Niestandardowy projekt UX/UI", price: "od 4 599 zł" },
    ],
    features: [
      "Strona główna i 5-10 podstron",
      "System zarządzania treścią",
      "Zaawansowana optymalizacja SEO",
      "Szybkie ładowanie (90+ Google PageSpeed)",
      "Dowolne integracje z CRM i formularzami",
      "Konfiguracja Google Analytics i Search Console",
      "Responsywny design mobile-first",
      "1 rok wsparcia technicznego",
      "Konfiguracja hostingu i domeny",
      "Konfiguracja e-mail firmowego",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="px-4 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-white mb-4">Cennik</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Przejrzyste i elastyczne ceny dopasowane do potrzeb Twojego projektu. Wybierz to, co najlepiej pasuje lub skontaktuj się po indywidualną wycenę.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {pricingData.map((item, index) => (
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