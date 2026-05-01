import { notFound } from "next/navigation";
import { getModule } from "@/content";
import { UnitPage } from "@/components/UnitPage";
import { CompletionToggle } from "@/components/progress/CompletionToggle";
import { MdxContent } from "@/components/mdx/MdxContent";

export default async function ModuleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mod = getModule(slug);
  if (!mod) notFound();

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <CompletionToggle kind="module" slug={mod.slug} />
      </div>
      <UnitPage unit={mod} content={<MdxContent kind="module" slug={mod.slug} />} />
    </div>
  );
}

