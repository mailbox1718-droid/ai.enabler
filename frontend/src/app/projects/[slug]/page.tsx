import { notFound } from "next/navigation";
import { getProject } from "@/content";
import { UnitPage } from "@/components/UnitPage";
import { CompletionToggle } from "@/components/progress/CompletionToggle";
import { MdxContent } from "@/components/mdx/MdxContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="space-y-8">
      <div className="flex justify-end">
        <CompletionToggle kind="project" slug={project.slug} />
      </div>
      <UnitPage
        unit={project}
        content={<MdxContent kind="project" slug={project.slug} />}
      />

      <Separator />

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Deliverables</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <ul className="list-disc pl-5">
              {project.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Completion checklist</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {project.checklist.map((c) => (
              <label
                key={c.id}
                className="flex cursor-not-allowed items-center gap-3 text-muted-foreground"
              >
                <Checkbox disabled />
                <span>{c.label}</span>
              </label>
            ))}
            <p className="text-xs text-muted-foreground">
              Checkmarks are disabled in the MVP because there is no persistence.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Rubric</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 text-sm">
          {project.rubric.map((r) => (
            <div key={r.criterion} className="space-y-1">
              <div className="font-medium">{r.criterion}</div>
              <div className="text-muted-foreground">{r.whatGoodLooksLike}</div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

