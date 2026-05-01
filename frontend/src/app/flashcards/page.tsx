"use client";

import { ContentCard } from "@/components/ContentCard";
import { PageHeader } from "@/components/PageHeader";
import { flashcardDecks, flashcards } from "@/content";
import { useProgress } from "@/state/progress";

export default function FlashcardsPage() {
  const { state } = useProgress();
  const counts = new Map<string, number>();
  for (const card of flashcards) {
    counts.set(card.deckId, (counts.get(card.deckId) ?? 0) + 1);
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Flashcards"
        description="Quick repetition to reinforce concepts, commands, and common mistakes."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {flashcardDecks.map((d) => {
          const knownCount = Object.keys(state.knownFlashcardsByDeck[d.id] ?? {})
            .length;
          const total = counts.get(d.id) ?? 0;
          const completed = total > 0 && knownCount === total;
          return (
            <ContentCard
              key={d.id}
              title={`${d.title} (${knownCount}/${total})`}
              summary={d.description}
              href={`/flashcards/${d.id}`}
              completed={completed}
            />
          );
        })}
      </div>
    </div>
  );
}

