import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="Learn to build real projects with an AI coding agent"
        description="A guided journey that combines concepts, hands-on labs, flashcards, assessments, and projects."
      >
        <Badge variant="secondary">MVP (no persistence)</Badge>
      </PageHeader>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link href="/journey">Start the journey</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/modules">Browse modules</Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Learn</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Clear, beginner-friendly modules with examples and next steps.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Practice</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Guided labs you can run in your own environment, with success
            criteria.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Prove it</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Flashcards and assessments to reinforce—and projects that look like
            real work.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
