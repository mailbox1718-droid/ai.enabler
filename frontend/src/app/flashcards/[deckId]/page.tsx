import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { FlashcardStudy } from "@/components/flashcards/FlashcardStudy";
import { flashcardDecks, flashcards } from "@/content";

export default async function FlashcardDeckPage({
  params,
}: {
  params: Promise<{ deckId: string }>;
}) {
  const { deckId } = await params;
  const deck = flashcardDecks.find((d) => d.id === deckId);
  if (!deck) notFound();

  const cards = flashcards.filter((c) => c.deckId === deck.id);

  return (
    <div className="space-y-6">
      <PageHeader title={deck.title} description={deck.description} />
      <FlashcardStudy deckId={deck.id} deckTitle={deck.title} cards={cards} />
    </div>
  );
}

