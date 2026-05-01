"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Flashcard } from "@/content/types";
import { cn } from "@/lib/utils";
import { useProgress } from "@/state/progress";

export function FlashcardStudy({
  deckId,
  deckTitle,
  cards,
}: {
  deckId: string;
  deckTitle: string;
  cards: Flashcard[];
}) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const { state, setFlashcardKnown } = useProgress();
  const knownMap = state.knownFlashcardsByDeck[deckId] ?? {};

  const current = cards[index];
  const knownCount = Object.keys(knownMap).length;

  const progress = useMemo(() => {
    if (cards.length === 0) return { label: "0 / 0", pct: 0 };
    const pct = Math.round((knownCount / cards.length) * 100);
    return { label: `${knownCount} known / ${cards.length}`, pct };
  }, [cards.length, knownCount]);

  if (!current) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{deckTitle}</CardTitle>
        </CardHeader>
        <CardContent>No cards found.</CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-lg font-semibold">{deckTitle}</div>
          <div className="text-sm text-muted-foreground">{progress.label}</div>
        </div>
        <div className="text-sm text-muted-foreground">
          Card {index + 1} / {cards.length}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setFlipped((v) => !v)}
        className={cn(
          "w-full rounded-lg border bg-card p-6 text-left shadow-sm transition-colors hover:bg-muted/30",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        )}
        aria-label="Flip flashcard"
      >
        <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {flipped ? "Back" : "Front"}
        </div>
        <div className="mt-3 text-base leading-7">
          {flipped ? current.back : current.front}
        </div>
      </button>

      <div className="flex flex-col gap-2 sm:flex-row">
        <Button
          variant="outline"
          onClick={() => {
            setFlashcardKnown(deckId, current.id, false);
            setFlipped(false);
            setIndex((i) => (i + 1) % cards.length);
          }}
        >
          Unknown
        </Button>
        <Button
          onClick={() => {
            setFlashcardKnown(deckId, current.id, true);
            setFlipped(false);
            setIndex((i) => (i + 1) % cards.length);
          }}
        >
          Known
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setFlipped(false);
            setIndex((i) => (i + 1) % cards.length);
          }}
        >
          Next
        </Button>
      </div>

      <p className="text-xs text-muted-foreground">
        In this MVP, flashcard progress is session-only and resets on refresh.
      </p>
    </div>
  );
}

