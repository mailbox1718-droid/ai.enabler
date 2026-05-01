import { notFound } from "next/navigation";
import { getLab } from "@/content";
import { UnitPage } from "@/components/UnitPage";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CompletionToggle } from "@/components/progress/CompletionToggle";
import { MdxContent } from "@/components/mdx/MdxContent";

export default async function LabDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lab = getLab(slug);
  if (!lab) notFound();

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <CompletionToggle kind="lab" slug={lab.slug} />
      </div>
      <Alert>
        <AlertTitle>Run it locally</AlertTitle>
        <AlertDescription>
          Labs are designed to be executed in your environment. Follow the steps
          and use the success criteria to verify you’re done.
        </AlertDescription>
      </Alert>
      <UnitPage unit={lab} content={<MdxContent kind="lab" slug={lab.slug} />} />
    </div>
  );
}

