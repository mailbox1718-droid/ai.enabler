import { notFound } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import { assessments } from "@/content";
import { AssessmentRunner } from "@/components/assessments/AssessmentRunner";

export default async function AssessmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const assessment = assessments.find((a) => a.slug === slug);
  if (!assessment) notFound();

  return (
    <div className="space-y-6">
      <PageHeader title={assessment.title} description={assessment.summary} />
      <AssessmentRunner assessment={assessment} />
    </div>
  );
}

