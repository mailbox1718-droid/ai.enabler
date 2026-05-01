"use client";

import { ProgressProvider } from "@/state/progress";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ProgressProvider>{children}</ProgressProvider>;
}

