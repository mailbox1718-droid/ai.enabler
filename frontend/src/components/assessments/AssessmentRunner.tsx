"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import type { Assessment } from "@/content/types";
import { cn } from "@/lib/utils";
import { useProgress } from "@/state/progress";

const EMPTY_ANSWERS: Record<
  string,
  {
    selectedOptionId?: string;
    revealed: boolean;
    correctOptionId: string;
  }
> = {};

export function AssessmentRunner({ assessment }: { assessment: Assessment }) {
  const [index, setIndex] = useState(0);
  const { state: progress, setAssessmentAnswer, revealAssessmentAnswer } =
    useProgress();
  const answers =
    progress.assessmentAnswersBySlug[assessment.slug] ?? EMPTY_ANSWERS;

  const q = assessment.questions[index];
  const qState = answers[q.id] ?? {
    revealed: false,
    correctOptionId: q.correctOptionId,
  };

  const score = useMemo(() => {
    let correct = 0;
    for (const question of assessment.questions) {
      const a = answers[question.id];
      if (a?.revealed && a.selectedOptionId === a.correctOptionId) {
        correct += 1;
      }
    }
    return { correct, total: assessment.questions.length };
  }, [answers, assessment.questions]);

  const isCorrect =
    qState.revealed && qState.selectedOptionId === q.correctOptionId;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <div>
          Question {index + 1} / {assessment.questions.length}
        </div>
        <div>
          Score (revealed only): {score.correct} / {score.total}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">{q.prompt}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <RadioGroup
            value={qState.selectedOptionId ?? ""}
            onValueChange={(value) => {
              setAssessmentAnswer(assessment.slug, q, value);
            }}
          >
            {q.options.map((opt) => {
              const selected = qState.selectedOptionId === opt.id;
              const correct = opt.id === q.correctOptionId;
              const show = qState.revealed;

              return (
                <label
                  key={opt.id}
                  className={cn(
                    "flex cursor-pointer items-start gap-3 rounded-md border p-3 transition-colors",
                    selected ? "bg-muted/40" : "hover:bg-muted/20",
                    show && selected && correct && "border-emerald-500/50",
                    show && selected && !correct && "border-red-500/50",
                  )}
                >
                  <RadioGroupItem value={opt.id} className="mt-0.5" />
                  <div className="text-sm">{opt.label}</div>
                </label>
              );
            })}
          </RadioGroup>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button
              onClick={() => {
                revealAssessmentAnswer(assessment.slug, q.id);
              }}
              disabled={!qState.selectedOptionId || qState.revealed}
            >
              Reveal answer
            </Button>
            <Button
              variant="secondary"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
            >
              Previous
            </Button>
            <Button
              variant="secondary"
              onClick={() =>
                setIndex((i) =>
                  Math.min(assessment.questions.length - 1, i + 1),
                )
              }
              disabled={index === assessment.questions.length - 1}
            >
              Next
            </Button>
          </div>

          {qState.revealed ? (
            <div className="space-y-2 rounded-md bg-muted/30 p-3 text-sm">
              <div
                className={cn(
                  "font-medium",
                  isCorrect ? "text-emerald-700" : "text-red-700",
                )}
              >
                {isCorrect ? "Correct" : "Not quite"}
              </div>
              <div className="text-muted-foreground">{q.explanation}</div>
            </div>
          ) : null}
        </CardContent>
      </Card>

      <Separator />

      <p className="text-xs text-muted-foreground">
        In this MVP, assessment attempts are session-only and reset on refresh.
      </p>
    </div>
  );
}

