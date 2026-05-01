"use client";

import { ContentCard } from "@/components/ContentCard";
import { PageHeader } from "@/components/PageHeader";
import { labs } from "@/content";
import { useProgress } from "@/state/progress";

export default function LabsPage() {
  const { state } = useProgress();
  return (
    <div className="space-y-6">
      <PageHeader
        title="Labs"
        description="Guided, hands-on practice you can run locally."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {labs.map((l) => (
          <ContentCard
            key={l.id}
            title={l.title}
            summary={l.summary}
            href={`/labs/${l.slug}`}
            stage={l.stage}
            effort={l.effort}
            completed={!!state.completedLabs[l.slug]}
          />
        ))}
      </div>
    </div>
  );
}

