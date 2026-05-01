"use client";

import { ContentCard } from "@/components/ContentCard";
import { PageHeader } from "@/components/PageHeader";
import { assessments } from "@/content";
import { useProgress } from "@/state/progress";

export default function AssessmentsPage() {
  const { state } = useProgress();
  return (
    <div className="space-y-6">
      <PageHeader
        title="Assessments"
        description="On-demand knowledge checks with immediate feedback."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {assessments.map((a) => {
          const answers = state.assessmentAnswersBySlug[a.slug] ?? {};
          const revealedCount = Object.values(answers).filter((x) => x.revealed)
            .length;
          const completed =
            a.questions.length > 0 && revealedCount === a.questions.length;
          return (
            <ContentCard
              key={a.id}
              title={a.title}
              summary={a.summary}
              href={`/assessments/${a.slug}`}
              stage={a.stage}
              completed={completed}
            />
          );
        })}
      </div>
    </div>
  );
}

