import { ProgressProvider } from "@/state/progress";

export function TestProviders({ children }: { children: React.ReactNode }) {
  return <ProgressProvider>{children}</ProgressProvider>;
}

