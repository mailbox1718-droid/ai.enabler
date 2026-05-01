"use client";

import { ContentCard } from "@/components/ContentCard";
import { PageHeader } from "@/components/PageHeader";
import { projects } from "@/content";
import { useProgress } from "@/state/progress";

export default function ProjectsPage() {
  const { state } = useProgress();
  return (
    <div className="space-y-6">
      <PageHeader
        title="Projects"
        description="Progressive projects with deliverables, rubrics, and completion checklists."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <ContentCard
            key={p.id}
            title={p.title}
            summary={p.summary}
            href={`/projects/${p.slug}`}
            stage={p.stage}
            effort={p.effort}
            completed={!!state.completedProjects[p.slug]}
          />
        ))}
      </div>
    </div>
  );
}

