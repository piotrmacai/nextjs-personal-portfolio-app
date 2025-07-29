// app/components/VisualsPricing.tsx – wersja polska

import Link from "next/link";

const visualsData = [
  {
    title: "Branding & Treści Social Media",
    options: [
      { label: "Logo & Identyfikacja Marki", price: "899 zł" },
      { label: "Pakiet Social Media", price: "699 zł" }, 
    ],
    features: [
      "Indywidualny projekt logo i palety kolorów",
      "Typografia i visual",
      "Wizytówki i awatary w social media",
      "Statyczne szablony dla Instagram, LinkedIn, Facebook",
      "Stories, posty, wyróżnienia, banery",
      "Edytowalne szablony w Canva lub Figma",
      "Treści zgodne z głosem Twojej marki",
      "3 rundy poprawek w cenie",
    ],
  },
  {
    title: "Motion & Produkcja Wideo",
    options: [
      { label: "Film Reklamowy / Edukacyjny", price: "od 899 zł" },
      { label: "Reklamy Wideo Social Media", price: "od 229 zł" },
    ],
    features: [
      "Projekty motion i video",
      "Krótkie wideo pionowe dla Reels, TikTok, YouTube Shorts",
      "Wideo 16:9 dla stron i prezentacji",
      "Scenariusze i storyboard",
      "Lektor i dźwięk (opcjonalnie)",
      "Animacja zdjęć",
      "Rozwój koncepcji",
    ],
  },
  {
    title: "Projekty UI/UX",
    options: [
      { label: "Projekt Landing Page", price: "899 zł" },
      { label: "Pełny UI Kit / Aplikacja Webowa", price: "2 299 zł" },
    ],
    features: [
      "System projektowy w Figma",
      "Scieżki użytkownika i wireframes",
      "Układy responsywne na wszystkie urządzenia",
      "Projekt skalowalny, oparty na komponentach",
      "Estetyka czysta, nowoczesna i minimalistyczna",
      "Przekazanie projektu z plikami gotowymi dla dewelopera",
      "Optymalizacja UX oparta o cele",
      "Spójność UI i standardy dostępności",
    ],
  },
];

export default function VisualsPricing() {
  return (
    <section className="px-4 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-white mb-4">Cennik Wizualizacji & Designu</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Usługi designu o wysokim impakcie, które wzmacniają Twoją markę, treści i doświadczenie cyfrowe.
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
                Wycena
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}