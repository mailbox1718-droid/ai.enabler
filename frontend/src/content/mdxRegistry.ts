export const moduleMdxBySlug = {
  "ai-coding-agents-101": () => import("./mdx/modules/ai-coding-agents-101.mdx"),
  "core-workflow-plan-implement-verify": () =>
    import("./mdx/modules/core-workflow-plan-implement-verify.mdx"),
  "cli-and-git-safety": () => import("./mdx/modules/cli-and-git-safety.mdx"),
} as const;

export const labMdxBySlug = {
  "scaffold-nextjs-app": () => import("./mdx/labs/scaffold-nextjs-app.mdx"),
  "add-component-and-test": () => import("./mdx/labs/add-component-and-test.mdx"),
} as const;

export const projectMdxBySlug = {
  "beginner-personal-knowledge-base": () =>
    import("./mdx/projects/beginner-personal-knowledge-base.mdx"),
} as const;

