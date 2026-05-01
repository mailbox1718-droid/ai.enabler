import Link from "next/link";
import { NavLink } from "@/components/nav/NavLink";
import { Separator } from "@/components/ui/separator";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-4 px-4">
          <Link href="/" className="font-semibold tracking-tight">
            AI Enabler
          </Link>
          <Separator orientation="vertical" className="h-6" />
          <nav className="flex items-center gap-1">
            <NavLink href="/modules">Learn</NavLink>
            <NavLink href="/labs">Practice</NavLink>
            <NavLink href="/flashcards">Review</NavLink>
            <NavLink href="/assessments">Evaluate</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/journey">Journey</NavLink>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
      <footer className="border-t py-10">
        <div className="mx-auto max-w-5xl px-4 text-sm text-muted-foreground">
          No persistence. Progress resets on refresh.
        </div>
      </footer>
    </div>
  );
}

