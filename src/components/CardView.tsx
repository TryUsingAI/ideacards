import React from "react";

export type CardV1 = {
  id: string;
  category: string;
  title: string;
  clarifyingQuestion?: string;
  definition: string;
  concept_framing: string;
  core_explanation: string;
  why_it_matters: string;
  escape_hatches: {
    read_full_article_url: string;
    related_but_different: string;
    common_misconception: string;
  };
  source: { type: "wikipedia"; url: string };
};

export function CardView({ card, onNext }: { card: CardV1; onNext: () => void }) {
  return (
    <article className="w-full rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/15 dark:bg-black">
      <h1 className="text-2xl font-semibold leading-8 tracking-tight text-zinc-950 dark:text-zinc-50">
        {card.title}
      </h1>

      {card.clarifyingQuestion && (
        <p className="mt-4 text-base leading-7 text-zinc-900 dark:text-zinc-100">
          {card.clarifyingQuestion}
        </p>
      )}

      <section className="mt-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
          Definition
        </h2>
        <p className="mt-2 text-base leading-7 text-zinc-900 dark:text-zinc-100">
          {card.definition}
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
          Concept Framing
        </h2>
        <p className="mt-2 text-base leading-7 text-zinc-900 dark:text-zinc-100">
          {card.concept_framing}
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
          Core Explanation
        </h2>
        <p className="mt-2 whitespace-pre-line text-base leading-7 text-zinc-900 dark:text-zinc-100">
          {card.core_explanation}
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
          Why It Matters / Why It’s Debated
        </h2>
        <p className="mt-2 text-base leading-7 text-zinc-900 dark:text-zinc-100">
          {card.why_it_matters}
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-600 dark:text-zinc-400">
          Escape Hatches
        </h2>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-900 dark:text-zinc-100">
          <li>
            <span className="font-semibold">Read the full article:</span>{" "}
            <a
              href={card.escape_hatches.read_full_article_url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 text-zinc-950 dark:text-zinc-50"
            >
              {card.escape_hatches.read_full_article_url}
            </a>
          </li>
          <li>
            <span className="font-semibold">Related but different:</span>{" "}
            {card.escape_hatches.related_but_different}
          </li>
          <li>
            <span className="font-semibold">Common misconception:</span>{" "}
            {card.escape_hatches.common_misconception}
          </li>
        </ul>
      </section>

      <div className="mt-8">
        <button
          type="button"
          className="inline-flex h-10 items-center justify-center rounded-xl bg-zinc-950 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
          onClick={onNext}
        >
          Next Card →
        </button>
      </div>
    </article>
  );
}

