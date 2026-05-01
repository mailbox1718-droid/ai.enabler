import type {
  Assessment,
  Flashcard,
  FlashcardDeck,
  Lab,
  Module,
  Project,
} from "./types";

export const modules: Module[] = [
  {
    kind: "module",
    id: "m_agents_101",
    slug: "ai-coding-agents-101",
    title: "AI coding agents: what they are and when to use them",
    summary:
      "A practical mental model for what an AI coding agent does, what it does not do, and how to collaborate effectively.",
    stage: "fundamentals",
    effort: "light",
    objectives: [
      "Explain what an AI coding agent is in plain language",
      "Know the difference between chat help and agentic execution",
      "Recognize tasks that are a good fit vs a poor fit",
    ],
    outcomes: [
      "You can describe an effective agent workflow to a colleague",
      "You can pick the right task granularity for best results",
    ],
    relatedLabs: ["scaffold-nextjs-app"],
    nextSteps: [
      { type: "module", slug: "core-workflow-plan-implement-verify" },
      { type: "lab", slug: "scaffold-nextjs-app" },
      { type: "assessment", slug: "fundamentals-check" },
    ],
    mdx: () => import("./mdx/modules/ai-coding-agents-101.mdx"),
  },
  {
    kind: "module",
    id: "m_workflow",
    slug: "core-workflow-plan-implement-verify",
    title: "Core workflow: plan → implement → verify",
    summary:
      "A repeatable loop for getting correct results: define success, execute small steps, verify with tests and reality checks.",
    stage: "fundamentals",
    effort: "moderate",
    objectives: [
      "Write crisp requirements and success criteria",
      "Break work into small, testable steps",
      "Use verification to catch errors early",
    ],
    outcomes: [
      "You can steer an agent without micromanaging",
      "You can diagnose failure modes (scope, ambiguity, missing checks)",
    ],
    relatedLabs: ["add-component-and-test"],
    nextSteps: [
      { type: "lab", slug: "add-component-and-test" },
      { type: "module", slug: "cli-and-git-safety" },
      { type: "assessment", slug: "fundamentals-check" },
    ],
    mdx: () => import("./mdx/modules/core-workflow-plan-implement-verify.mdx"),
  },
  {
    kind: "module",
    id: "m_cli_git",
    slug: "cli-and-git-safety",
    title: "Using CLI + git safely with an agent",
    summary:
      "A beginner-safe set of habits for running commands, understanding output, and avoiding destructive git operations.",
    stage: "practical",
    effort: "moderate",
    objectives: [
      "Understand the idea of a working tree vs commits",
      "Run safe read-only commands to inspect state",
      "Know common footguns and how to avoid them",
    ],
    outcomes: [
      "You can review changes before committing",
      "You can recover from common mistakes (without panic)",
    ],
    relatedLabs: ["scaffold-nextjs-app", "add-component-and-test"],
    nextSteps: [
      { type: "project", slug: "beginner-personal-knowledge-base" },
      { type: "assessment", slug: "fundamentals-check" },
    ],
    mdx: () => import("./mdx/modules/cli-and-git-safety.mdx"),
  },
];

export const labs: Lab[] = [
  {
    kind: "lab",
    id: "l_scaffold",
    slug: "scaffold-nextjs-app",
    title: "Lab: scaffold a Next.js app and run it",
    summary:
      "Create a Next.js app, run the dev server, and confirm you can edit a page and see the change.",
    stage: "fundamentals",
    effort: "light",
    goal: "Get a working Next.js dev environment and confirm the edit → refresh loop.",
    preconditions: ["Node.js installed", "A code editor (Cursor/VS Code)"],
    successCriteria: [
      "You can run `npm run dev` successfully",
      "You can edit a page and see the update in the browser",
    ],
    commonMistakes: [
      "Running commands in the wrong directory",
      "Using an incompatible Node version",
      "Forgetting to install dependencies first (`npm i`)",
    ],
    objectives: ["Build confidence running the toolchain locally"],
    outcomes: ["You can start and iterate on a Next.js app"],
    nextSteps: [
      { type: "lab", slug: "add-component-and-test" },
      { type: "module", slug: "core-workflow-plan-implement-verify" },
    ],
    mdx: () => import("./mdx/labs/scaffold-nextjs-app.mdx"),
  },
  {
    kind: "lab",
    id: "l_component_test",
    slug: "add-component-and-test",
    title: "Lab: add a UI component and write a unit test",
    summary:
      "Create a small component, render it on a page, and write a unit test that proves it works.",
    stage: "practical",
    effort: "moderate",
    goal: "Practice the plan → implement → verify loop with a real test.",
    preconditions: ["A Next.js app that runs locally"],
    successCriteria: [
      "Component renders on the page",
      "`npm test` passes",
      "A failing change breaks the test (so you trust it)",
    ],
    commonMistakes: [
      "Testing implementation details instead of behavior",
      "Forgetting to import `@testing-library/jest-dom` matchers",
    ],
    objectives: ["Learn how tests keep you honest"],
    outcomes: ["You can add a component and prove it works"],
    nextSteps: [
      { type: "module", slug: "cli-and-git-safety" },
      { type: "assessment", slug: "fundamentals-check" },
      { type: "project", slug: "beginner-personal-knowledge-base" },
    ],
    mdx: () => import("./mdx/labs/add-component-and-test.mdx"),
  },
];

export const projects: Project[] = [
  {
    kind: "project",
    id: "p_kb",
    slug: "beginner-personal-knowledge-base",
    title: "Beginner project: personal knowledge base (client-only)",
    summary:
      "Build a small knowledge base site with Markdown/MDX pages, navigation, and simple client-only search.",
    stage: "practical",
    effort: "deep",
    problemStatement:
      "You want a small site to store and browse notes (concepts, commands, and mistakes). It should be easy to add more pages over time.",
    deliverables: [
      "A Next.js app with at least 5 content pages",
      "Navigation that separates Learn / Practice / Review / Evaluate",
      "A client-side search (title + summary) across pages",
    ],
    rubric: [
      {
        criterion: "Clarity",
        whatGoodLooksLike:
          "A beginner can find content quickly and understand the structure without explanation.",
      },
      {
        criterion: "Correctness",
        whatGoodLooksLike:
          "Links work, pages render reliably, and search results match content.",
      },
      {
        criterion: "Maintainability",
        whatGoodLooksLike:
          "Adding a new page is obvious and does not require rewriting code.",
      },
    ],
    checklist: [
      { id: "nav", label: "Add top-level navigation" },
      { id: "content", label: "Add at least 5 content pages" },
      { id: "search", label: "Implement client-side search" },
      { id: "testing", label: "Add at least 1 unit test and 1 E2E test" },
    ],
    objectives: ["Apply everything you learned in a realistic mini-product"],
    outcomes: ["A working, extendable, content-driven app"],
    nextSteps: [{ type: "assessment", slug: "fundamentals-check" }],
    mdx: () => import("./mdx/projects/beginner-personal-knowledge-base.mdx"),
  },
];

export const flashcardDecks: FlashcardDeck[] = [
  {
    id: "concepts",
    title: "Concepts",
    description: "Definitions and mental models you’ll reuse constantly.",
  },
  {
    id: "commands",
    title: "Commands",
    description: "Common CLI commands and what they do.",
  },
  {
    id: "mistakes",
    title: "Common mistakes",
    description: "The errors beginners make—and how to avoid them.",
  },
];

export const flashcards: Flashcard[] = [
  {
    id: "c1",
    deckId: "concepts",
    front: "What is an AI coding agent?",
    back: "A tool that can read, modify, and run code based on goals you provide, often doing multi-step work instead of single answers.",
    tags: ["basics"],
  },
  {
    id: "c2",
    deckId: "concepts",
    front: "What’s the difference between a prompt and a requirement?",
    back: "A prompt is a request. A requirement is a constraint that must be true for success (often testable).",
    tags: ["workflow"],
  },
  {
    id: "c3",
    deckId: "concepts",
    front: "What is “success criteria”?",
    back: "A short checklist that defines what “done” means (for the user), ideally verifiable by tests or clear steps.",
    tags: ["workflow"],
  },
  {
    id: "c4",
    deckId: "concepts",
    front: "What does “small, testable steps” mean?",
    back: "Change one thing at a time so failures are easy to diagnose and rollback is simple.",
    tags: ["workflow"],
  },
  {
    id: "c5",
    deckId: "concepts",
    front: "What is an “implementation detail” in testing?",
    back: "Something about how code works internally, not what the user observes. Prefer testing observable behavior.",
    tags: ["testing"],
  },
  {
    id: "cmd1",
    deckId: "commands",
    front: "What does `npm i` do?",
    back: "Installs dependencies listed in package.json into node_modules.",
    tags: ["npm"],
  },
  {
    id: "cmd2",
    deckId: "commands",
    front: "What does `npm run dev` do (in Next.js)?",
    back: "Starts the development server so you can view the app locally and see changes live.",
    tags: ["nextjs"],
  },
  {
    id: "cmd3",
    deckId: "commands",
    front: "What does `git status` tell you?",
    back: "Which files are changed, staged, untracked, and which branch you’re on.",
    tags: ["git"],
  },
  {
    id: "cmd4",
    deckId: "commands",
    front: "What does `git diff` show?",
    back: "The exact line-by-line changes between your working tree and the last commit (or staged changes, depending on flags).",
    tags: ["git"],
  },
  {
    id: "cmd5",
    deckId: "commands",
    front: "What does `git log --oneline` show?",
    back: "A compact history of commits (one line per commit).",
    tags: ["git"],
  },
  {
    id: "m1",
    deckId: "mistakes",
    front: "Mistake: asking for “build the whole app” in one prompt.",
    back: "Fix: provide scope, success criteria, and let the agent execute in small steps with verification.",
    tags: ["prompting"],
  },
  {
    id: "m2",
    deckId: "mistakes",
    front: "Mistake: not verifying changes.",
    back: "Fix: run unit tests, lint, and a basic manual check after each meaningful change.",
    tags: ["workflow"],
  },
  {
    id: "m3",
    deckId: "mistakes",
    front: "Mistake: committing without reviewing diffs.",
    back: "Fix: check `git status` and `git diff` first so you know what you’re saving forever.",
    tags: ["git"],
  },
  {
    id: "m4",
    deckId: "mistakes",
    front: "Mistake: running commands in the wrong folder.",
    back: "Fix: check your current directory (`pwd`) and look for the correct `package.json` before running npm commands.",
    tags: ["cli"],
  },
  // extra cards to reach ~20 total
  {
    id: "c6",
    deckId: "concepts",
    front: "What is “scope creep”?",
    back: "When a task keeps expanding beyond the original goal, making it harder to finish and verify.",
  },
  {
    id: "c7",
    deckId: "concepts",
    front: "What is “acceptance testing”?",
    back: "A check that the feature works for the user’s goal (often end-to-end, not just unit tests).",
  },
  {
    id: "cmd6",
    deckId: "commands",
    front: "What does `npm run build` do (in Next.js)?",
    back: "Creates an optimized production build of your app.",
  },
  {
    id: "cmd7",
    deckId: "commands",
    front: "What does `npm run lint` do?",
    back: "Runs ESLint to catch common bugs and style issues.",
  },
  {
    id: "m5",
    deckId: "mistakes",
    front: "Mistake: copy/pasting commands you don’t understand.",
    back: "Fix: ask “what will this command change?” and prefer read-only inspection commands first.",
  },
  {
    id: "m6",
    deckId: "mistakes",
    front: "Mistake: using forceful git commands casually.",
    back: "Fix: avoid `--force`, `reset --hard`, and rewriting history unless you know exactly why and what you’ll lose.",
  },
];

export const assessments: Assessment[] = [
  {
    id: "a_fundamentals",
    slug: "fundamentals-check",
    title: "Assessment: fundamentals knowledge check",
    summary:
      "A quick check that you understand the core workflow and safe habits.",
    stage: "fundamentals",
    questions: [
      {
        id: "q1",
        prompt: "Which is the best example of success criteria?",
        options: [
          { id: "a", label: "Make the UI nicer." },
          {
            id: "b",
            label: "A button exists, clicking it increments a visible counter, and a unit test proves it.",
          },
          { id: "c", label: "Refactor the code." },
        ],
        correctOptionId: "b",
        explanation:
          "It is specific and verifiable by behavior (and ideally tests).",
      },
      {
        id: "q2",
        prompt: "What’s a good reason to split work into small steps?",
        options: [
          { id: "a", label: "So you write more files." },
          { id: "b", label: "So failures are easier to diagnose and verify." },
          { id: "c", label: "So the agent uses more tokens." },
        ],
        correctOptionId: "b",
        explanation:
          "Small steps reduce ambiguity and make verification faster and clearer.",
      },
      {
        id: "q3",
        prompt: "Which git command is read-only and helps you inspect changes?",
        options: [
          { id: "a", label: "git status" },
          { id: "b", label: "git commit" },
          { id: "c", label: "git push" },
        ],
        correctOptionId: "a",
        explanation:
          "`git status` tells you what changed without modifying anything.",
      },
      {
        id: "q4",
        prompt:
          "In testing, what should you prefer (most of the time) over implementation details?",
        options: [
          { id: "a", label: "Observable behavior" },
          { id: "b", label: "Exact internal function calls" },
          { id: "c", label: "Private variable names" },
        ],
        correctOptionId: "a",
        explanation:
          "Behavior-based tests are more resilient to refactors while still catching regressions.",
      },
      {
        id: "q5",
        prompt: "Which is a poor task for an agent without extra context?",
        options: [
          { id: "a", label: "Add a new page with a simple layout and tests." },
          {
            id: "b",
            label: "Fix “it’s broken” with no error message, repro steps, or expected behavior.",
          },
          { id: "c", label: "Rename a component across the codebase." },
        ],
        correctOptionId: "b",
        explanation:
          "Without a repro or expected behavior, the agent can’t reliably verify a fix.",
      },
      {
        id: "q6",
        prompt: "What does “no persistence” mean in this MVP?",
        options: [
          { id: "a", label: "No database, no login, and progress resets on refresh." },
          { id: "b", label: "The app cannot have any content files." },
          { id: "c", label: "The app must be offline-only." },
        ],
        correctOptionId: "a",
        explanation:
          "We can still ship static content, but we don’t store user state across sessions.",
      },
      {
        id: "q7",
        prompt:
          "You ran a command and got a confusing error. What’s the best next step?",
        options: [
          { id: "a", label: "Run random commands until it works." },
          { id: "b", label: "Copy/paste the error and explain what you expected to happen." },
          { id: "c", label: "Ignore it and continue." },
        ],
        correctOptionId: "b",
        explanation:
          "Good debugging starts with evidence: the exact error and the expected behavior.",
      },
      {
        id: "q8",
        prompt: "Which practice reduces accidental destructive git operations?",
        options: [
          { id: "a", label: "Use `--force` often so things go through." },
          { id: "b", label: "Inspect with `git status` and `git diff` before committing." },
          { id: "c", label: "Avoid git completely." },
        ],
        correctOptionId: "b",
        explanation:
          "Inspection commands help you understand what will be saved before you act.",
      },
      {
        id: "q9",
        prompt:
          "What is the best description of an AI agent’s role in a coding workflow?",
        options: [
          { id: "a", label: "A replacement for understanding your code." },
          { id: "b", label: "A collaborator that executes tasks under your guidance and constraints." },
          { id: "c", label: "A compiler." },
        ],
        correctOptionId: "b",
        explanation:
          "You still own the goals and verification; the agent accelerates execution.",
      },
      {
        id: "q10",
        prompt:
          "What should you do if verification shows a feature doesn’t work as expected?",
        options: [
          { id: "a", label: "Ship it anyway." },
          { id: "b", label: "Reduce scope and fix the smallest failing piece first." },
          { id: "c", label: "Delete the tests." },
        ],
        correctOptionId: "b",
        explanation:
          "Fixing the smallest failing piece preserves momentum and keeps changes understandable.",
      },
    ],
  },
];

export function getModule(slug: string) {
  return modules.find((m) => m.slug === slug);
}

export function getLab(slug: string) {
  return labs.find((l) => l.slug === slug);
}

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAssessment(slug: string) {
  return assessments.find((a) => a.slug === slug);
}

