import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Effort, JourneyStage } from "@/content/types";

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

export function ContentCard({
  title,
  summary,
  href,
  stage,
  effort,
  completed,
  className,
}: {
  title: string;
  summary: string;
  href: string;
  stage?: JourneyStage;
  effort?: Effort;
  completed?: boolean;
  className?: string;
}) {
  return (
    <Card className={cn("transition-shadow hover:shadow-sm", className)}>
      <CardHeader>
        <CardTitle className="text-base">
          <Link href={href} className="hover:underline">
            {title}
          </Link>
        </CardTitle>
        <div className="flex flex-wrap gap-2">
          {stage ? <Badge variant="secondary">{stageLabel(stage)}</Badge> : null}
          {effort ? (
            <Badge variant="outline">{effortLabel(effort)}</Badge>
          ) : null}
          {completed ? (
            <Badge className="gap-1" variant="secondary">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Completed
            </Badge>
          ) : null}
        </div>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        {summary}
      </CardContent>
    </Card>
  );
}

