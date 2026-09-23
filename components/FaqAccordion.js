"use client";

import { useMemo, useState } from "react";
import { faqCategories } from "@/lib/data";

export default function FaqAccordion() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openKey, setOpenKey] = useState(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return faqCategories
      .filter((cat) => activeCategory === "all" || activeCategory === cat.id)
      .map((cat) => ({
        ...cat,
        questions: cat.questions.filter(
          (item) =>
            !q || item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.questions.length > 0);
  }, [query, activeCategory]);

  return (
    <div data-faq-root>
      <div className="mx-auto mb-12 max-w-xl">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search questions..."
          className="w-full rounded-full border border-border bg-card px-6 py-4 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="mb-11 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => setActiveCategory("all")}
          className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
            activeCategory === "all"
              ? "border-primary bg-primary text-white"
              : "border-border bg-card hover:bg-primary hover:text-white hover:border-primary"
          }`}
        >
          All Topics
        </button>
        {faqCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
              activeCategory === cat.id
                ? "border-primary bg-primary text-white"
                : "border-border bg-card hover:bg-primary hover:text-white hover:border-primary"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-8 text-center text-text-soft">
          No matching questions — try a different search term.
        </p>
      )}

      <div className="mx-auto max-w-3xl">
        {filtered.map((cat) => (
          <div key={cat.id} className="mb-11">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-primary-dark">
              {cat.label}
            </h3>
            {cat.questions.map((item) => {
              const key = `${cat.id}-${item.q}`;
              const isOpen = openKey === key;
              return (
                <div
                  key={key}
                  className="mb-3 overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <button
                    onClick={() => setOpenKey(isOpen ? null : key)}
                    className="flex w-full items-center justify-between gap-4 px-5.5 py-4.5 text-left font-semibold"
                  >
                    <span>{item.q}</span>
                    <span
                      className={`flex h-5.5 w-5.5 flex-shrink-0 items-center justify-center rounded-full border border-border text-sm transition ${
                        isOpen ? "rotate-45 border-accent bg-accent text-primary" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      className={`px-5.5 pb-5 text-sm ${
                        item.placeholder ? "italic text-orange-600" : "text-text-soft"
                      }`}
                    >
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
