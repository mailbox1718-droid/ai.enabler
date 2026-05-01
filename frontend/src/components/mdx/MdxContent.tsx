"use client";

import { useEffect, useState } from "react";
import {
  labMdxBySlug,
  moduleMdxBySlug,
  projectMdxBySlug,
} from "@/content/mdxRegistry";

type Kind = "module" | "lab" | "project";

export function MdxContent({ kind, slug }: { kind: Kind; slug: string }) {
  const [loaded, setLoaded] = useState<{
    slug: string;
    Comp: React.ComponentType | null;
  }>({ slug: "", Comp: null });

  useEffect(() => {
    const importer =
      kind === "module"
        ? moduleMdxBySlug[slug as keyof typeof moduleMdxBySlug]
        : kind === "lab"
          ? labMdxBySlug[slug as keyof typeof labMdxBySlug]
          : projectMdxBySlug[slug as keyof typeof projectMdxBySlug];

    if (!importer) return;

    let cancelled = false;
    importer().then((mod) => {
      if (!cancelled) setLoaded({ slug, Comp: mod.default });
    });
    return () => {
      cancelled = true;
    };
  }, [kind, slug]);

  if (loaded.slug !== slug || !loaded.Comp) return null;
  const Comp = loaded.Comp;
  return <Comp />;
}

