"use client";

import { ContentCard } from "@/components/ContentCard";
import { PageHeader } from "@/components/PageHeader";
import { modules } from "@/content";
import { useProgress } from "@/state/progress";

export default function ModulesPage() {
  const { state } = useProgress();
  return (
    <div className="space-y-6">
      <PageHeader
        title="Modules"
        description="Concepts and mental models. Each module links to practice and next steps."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {modules.map((m) => (
          <ContentCard
            key={m.id}
            title={m.title}
            summary={m.summary}
            href={`/modules/${m.slug}`}
            stage={m.stage}
            effort={m.effort}
            completed={!!state.completedModules[m.slug]}
          />
        ))}
      </div>
    </div>
  );
}

