"use client";

import { ContentCard } from "@/components/ContentCard";
import { PageHeader } from "@/components/PageHeader";
import { labs, modules, projects } from "@/content";
import type { JourneyStage } from "@/content/types";
import { useProgress } from "@/state/progress";

const stageOrder: JourneyStage[] = [
  "fundamentals",
  "practical",
  "advanced",
  "capstone",
];

function stageTitle(stage: JourneyStage) {
  switch (stage) {
    case "fundamentals":
      return "Fundamentals";
    case "practical":
      return "Practical skills";
    case "advanced":
      return "Advanced usage";
    case "capstone":
      return "Capstone";
  }
}

export default function JourneyPage() {
  const { state } = useProgress();
  return (
    <div className="space-y-10">
      <PageHeader
        title="Learning journey"
        description="Progress from fundamentals to building real projects. No persistence: progress resets on refresh."
      />

      {stageOrder.map((stage) => {
        const stageModules = modules.filter((m) => m.stage === stage);
        const stageLabs = labs.filter((l) => l.stage === stage);
        const stageProjects = projects.filter((p) => p.stage === stage);

        if (
          stageModules.length === 0 &&
          stageLabs.length === 0 &&
          stageProjects.length === 0
        ) {
          return null;
        }

        return (
          <section key={stage} className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">
              {stageTitle(stage)}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {stageModules.map((m) => (
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
              {stageLabs.map((l) => (
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
              {stageProjects.map((p) => (
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
          </section>
        );
      })}
    </div>
  );
}

