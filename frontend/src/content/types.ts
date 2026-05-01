export type JourneyStage = "fundamentals" | "practical" | "advanced" | "capstone";

export type Effort = "light" | "moderate" | "deep";

export type NavSection = "learn" | "practice" | "review" | "evaluate";

export type LearningUnitBase = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  stage: JourneyStage;
  effort: Effort;
  objectives: string[];
  outcomes: string[];
  nextSteps: Array<
    | { type: "module"; slug: string }
    | { type: "lab"; slug: string }
    | { type: "assessment"; slug: string }
    | { type: "project"; slug: string }
  >;
};

export type Module = LearningUnitBase & {
  kind: "module";
  relatedLabs: string[];
  mdx: () => Promise<{ default: React.ComponentType }>;
};

export type LabStep = {
  title: string;
  body: string;
};

export type Lab = LearningUnitBase & {
  kind: "lab";
  goal: string;
  preconditions: string[];
  successCriteria: string[];
  commonMistakes: string[];
  mdx: () => Promise<{ default: React.ComponentType }>;
};

export type ProjectChecklistItem = {
  id: string;
  label: string;
};

export type ProjectRubricRow = {
  criterion: string;
  whatGoodLooksLike: string;
};

export type Project = LearningUnitBase & {
  kind: "project";
  problemStatement: string;
  deliverables: string[];
  rubric: ProjectRubricRow[];
  checklist: ProjectChecklistItem[];
  mdx: () => Promise<{ default: React.ComponentType }>;
};

export type FlashcardDeck = {
  id: string;
  title: string;
  description: string;
};

export type Flashcard = {
  id: string;
  deckId: string;
  front: string;
  back: string;
  tags?: string[];
};

export type AssessmentQuestionOption = {
  id: string;
  label: string;
};

export type AssessmentQuestion = {
  id: string;
  prompt: string;
  options: AssessmentQuestionOption[];
  correctOptionId: string;
  explanation: string;
};

export type Assessment = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  stage: JourneyStage;
  questions: AssessmentQuestion[];
};

