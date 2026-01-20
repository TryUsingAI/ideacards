"use client";

import { useEffect, useMemo, useState } from "react";
import { CardView, type CardV1 } from "@/components/CardView";

type DeckV1 = {
  deck_version: string;
  schema_version: number;
  prompt_version: string;
  generated_at: string;
  categories: string[];
  cards: CardV1[];
};

function pickRandomCardId(pool: CardV1[], currentId: string | null) {
  if (pool.length === 0) return null;
  if (pool.length === 1) return pool[0].id;

  const first = pool[Math.floor(Math.random() * pool.length)];
  if (first.id !== currentId) return first.id;

  const second = pool[Math.floor(Math.random() * pool.length)];
  return second.id;
}

export default function Home() {
  const [deck, setDeck] = useState<DeckV1 | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading"
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentCardId, setCurrentCardId] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadDeck() {
      try {
        const res = await fetch("/decks/v1.json", { cache: "default" });
        if (!res.ok) throw new Error(`Failed to fetch deck: ${res.status}`);
        const data = (await res.json()) as DeckV1;
        if (cancelled) return;
        setDeck(data);
        setStatus("ready");
      } catch {
        if (cancelled) return;
        setStatus("error");
      }
    }

    loadDeck();
    return () => {
      cancelled = true;
    };
  }, []);

  const categories = deck?.categories ?? [];
  const allCards = deck?.cards ?? [];

  const filteredCards = useMemo(() => {
    if (selectedCategory === "All") return allCards;
    return allCards.filter((c) => c.category === selectedCategory);
  }, [allCards, selectedCategory]);

  useEffect(() => {
    if (!deck) return;

    setCurrentCardId((prev) => {
      if (filteredCards.length === 0) return null;
      if (filteredCards.length === 1) return filteredCards[0].id;
      if (prev && filteredCards.some((c) => c.id === prev)) return prev;
      return pickRandomCardId(filteredCards, null);
    });
  }, [deck, filteredCards]);

  const currentCard =
    filteredCards.find((c) => c.id === currentCardId) ??
    (filteredCards[0] ?? null);

  const handleNextCard = () => {
    setCurrentCardId((prev) => pickRandomCardId(filteredCards, prev));
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-950 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto w-full max-w-3xl px-6 py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">IdeaCards</h1>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Static deck prototype
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Category
              <select
                className="mt-2 block w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-zinc-950 shadow-sm outline-none focus:ring-2 focus:ring-zinc-300 dark:border-white/15 dark:bg-black dark:text-zinc-50 dark:focus:ring-zinc-700 sm:mt-0 sm:ml-3 sm:w-64"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                disabled={status !== "ready"}
              >
                <option value="All">All</option>
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="button"
              className="inline-flex h-10 items-center justify-center rounded-xl bg-zinc-950 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
              disabled={status !== "ready" || filteredCards.length === 0}
              onClick={handleNextCard}
            >
              Next card
            </button>
          </div>
        </div>

        <div className="mt-8">
          {status === "loading" ? (
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Loading deck…
            </p>
          ) : status === "error" ? (
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Failed to load the deck at /decks/v1.json.
            </p>
          ) : filteredCards.length === 0 ? (
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              No cards in this category.
            </p>
          ) : currentCard ? (
            <CardView card={currentCard} onNext={handleNextCard} />
          ) : (
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              No card selected.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
