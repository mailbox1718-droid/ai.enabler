"use client";

import { createContext, useContext, useMemo, useReducer } from "react";
import type { AssessmentQuestion } from "@/content/types";

type ProgressState = {
  completedModules: Record<string, true>;
  completedLabs: Record<string, true>;
  completedProjects: Record<string, true>;
  knownFlashcardsByDeck: Record<string, Record<string, true>>;
  assessmentAnswersBySlug: Record<
    string,
    Record<
      string,
      {
        selectedOptionId?: string;
        revealed: boolean;
        correctOptionId: string;
      }
    >
  >;
};

type ProgressAction =
  | { type: "toggleModule"; slug: string }
  | { type: "toggleLab"; slug: string }
  | { type: "toggleProject"; slug: string }
  | { type: "setFlashcardKnown"; deckId: string; cardId: string; known: boolean }
  | {
      type: "setAssessmentAnswer";
      assessmentSlug: string;
      question: AssessmentQuestion;
      selectedOptionId: string;
    }
  | { type: "revealAssessmentAnswer"; assessmentSlug: string; questionId: string };

const initialState: ProgressState = {
  completedModules: {},
  completedLabs: {},
  completedProjects: {},
  knownFlashcardsByDeck: {},
  assessmentAnswersBySlug: {},
};

function toggle(
  map: Record<string, true>,
  key: string,
): Record<string, true> {
  const next = { ...map };
  if (next[key]) {
    delete next[key];
  } else {
    next[key] = true;
  }
  return next;
}

function reducer(state: ProgressState, action: ProgressAction): ProgressState {
  switch (action.type) {
    case "toggleModule":
      return {
        ...state,
        completedModules: toggle(state.completedModules, action.slug),
      };
    case "toggleLab":
      return {
        ...state,
        completedLabs: toggle(state.completedLabs, action.slug),
      };
    case "toggleProject":
      return {
        ...state,
        completedProjects: toggle(state.completedProjects, action.slug),
      };
    case "setFlashcardKnown": {
      const deck = state.knownFlashcardsByDeck[action.deckId] ?? {};
      const nextDeck = { ...deck };
      if (action.known) nextDeck[action.cardId] = true;
      else {
        delete nextDeck[action.cardId];
      }
      return {
        ...state,
        knownFlashcardsByDeck: {
          ...state.knownFlashcardsByDeck,
          [action.deckId]: nextDeck,
        },
      };
    }
    case "setAssessmentAnswer": {
      const currentAssessment = state.assessmentAnswersBySlug[action.assessmentSlug] ?? {};
      return {
        ...state,
        assessmentAnswersBySlug: {
          ...state.assessmentAnswersBySlug,
          [action.assessmentSlug]: {
            ...currentAssessment,
            [action.question.id]: {
              selectedOptionId: action.selectedOptionId,
              revealed: false,
              correctOptionId: action.question.correctOptionId,
            },
          },
        },
      };
    }
    case "revealAssessmentAnswer": {
      const currentAssessment = state.assessmentAnswersBySlug[action.assessmentSlug] ?? {};
      const current = currentAssessment[action.questionId];
      if (!current) return state;
      return {
        ...state,
        assessmentAnswersBySlug: {
          ...state.assessmentAnswersBySlug,
          [action.assessmentSlug]: {
            ...currentAssessment,
            [action.questionId]: {
              ...current,
              revealed: true,
            },
          },
        },
      };
    }
  }
}

type ProgressApi = {
  state: ProgressState;
  toggleModule(slug: string): void;
  toggleLab(slug: string): void;
  toggleProject(slug: string): void;
  setFlashcardKnown(deckId: string, cardId: string, known: boolean): void;
  setAssessmentAnswer(
    assessmentSlug: string,
    question: AssessmentQuestion,
    selectedOptionId: string,
  ): void;
  revealAssessmentAnswer(assessmentSlug: string, questionId: string): void;
};

const ProgressContext = createContext<ProgressApi | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const api = useMemo<ProgressApi>(
    () => ({
      state,
      toggleModule: (slug) => dispatch({ type: "toggleModule", slug }),
      toggleLab: (slug) => dispatch({ type: "toggleLab", slug }),
      toggleProject: (slug) => dispatch({ type: "toggleProject", slug }),
      setFlashcardKnown: (deckId, cardId, known) =>
        dispatch({ type: "setFlashcardKnown", deckId, cardId, known }),
      setAssessmentAnswer: (assessmentSlug, question, selectedOptionId) =>
        dispatch({
          type: "setAssessmentAnswer",
          assessmentSlug,
          question,
          selectedOptionId,
        }),
      revealAssessmentAnswer: (assessmentSlug, questionId) =>
        dispatch({ type: "revealAssessmentAnswer", assessmentSlug, questionId }),
    }),
    [state],
  );

  return (
    <ProgressContext.Provider value={api}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}

