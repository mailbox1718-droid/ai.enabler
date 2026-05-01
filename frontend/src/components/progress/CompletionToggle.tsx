"use client";

import { CheckCircle2, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/state/progress";

export function CompletionToggle({
  kind,
  slug,
}: {
  kind: "module" | "lab" | "project";
  slug: string;
}) {
  const { state, toggleModule, toggleLab, toggleProject } = useProgress();

  const completed =
    kind === "module"
      ? !!state.completedModules[slug]
      : kind === "lab"
        ? !!state.completedLabs[slug]
        : !!state.completedProjects[slug];

  return (
    <Button
      variant={completed ? "secondary" : "default"}
      onClick={() => {
        if (kind === "module") toggleModule(slug);
        if (kind === "lab") toggleLab(slug);
        if (kind === "project") toggleProject(slug);
      }}
    >
      {completed ? (
        <>
          <CheckCircle2 className="mr-2 h-4 w-4" />
          Completed
        </>
      ) : (
        <>
          <Circle className="mr-2 h-4 w-4" />
          Mark complete
        </>
      )}
    </Button>
  );
}

