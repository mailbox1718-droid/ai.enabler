import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Effort, JourneyStage, LearningUnitBase } from "@/content/types";

function stageLabel(stage: JourneyStage) {
  switch (stage) {
    case "fundamentals":
      return "Fundamentals";
    case "practical":
      return "Practical";
    case "advanced":
      return "Advanced";
    case "capstone":
      return "Capstone";
  }
}

function effortLabel(effort: Effort) {
  switch (effort) {
    case "light":
      return "Light effort";
    case "moderate":
      return "Moderate effort";
    case "deep":
      return "Deep effort";
  }
}

function nextHref(
  step: LearningUnitBase["nextSteps"][number],
): string | null {
  switch (step.type) {
    case "module":
      return `/modules/${step.slug}`;
    case "lab":
      return `/labs/${step.slug}`;
    case "assessment":
      return `/assessments/${step.slug}`;
    case "project":
      return `/projects/${step.slug}`;
    default:
      return null;
  }
}

export function UnitPage({
  unit,
  content,
}: {
  unit: LearningUnitBase & { stage: JourneyStage; effort: Effort };
  content: React.ReactNode;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
      <article className="space-y-6">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">{unit.title}</h1>
          <p className="text-muted-foreground">{unit.summary}</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{stageLabel(unit.stage)}</Badge>
            <Badge variant="outline">{effortLabel(unit.effort)}</Badge>
          </div>
        </header>

        <Separator />

        <div className="prose prose-zinc max-w-none dark:prose-invert">
          {content}
        </div>
      </article>

      <aside className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Objectives</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <ul className="list-disc pl-5 text-muted-foreground">
              {unit.objectives.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Expected outcomes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <ul className="list-disc pl-5 text-muted-foreground">
              {unit.outcomes.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {unit.nextSteps.length ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Next steps</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <ul className="list-disc pl-5">
                {unit.nextSteps.map((s) => {
                  const href = nextHref(s);
                  return (
                    <li key={`${s.type}:${s.slug}`}>
                      {href ? (
                        <Link href={href} className="hover:underline">
                          {s.type}: {s.slug}
                        </Link>
                      ) : (
                        `${s.type}: ${s.slug}`
                      )}
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        ) : null}
      </aside>
    </div>
  );
}

