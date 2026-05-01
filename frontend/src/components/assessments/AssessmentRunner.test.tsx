import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AssessmentRunner } from "@/components/assessments/AssessmentRunner";
import { TestProviders } from "@/test/TestProviders";

describe("AssessmentRunner", () => {
  it("reveals feedback and updates score", async () => {
    const user = userEvent.setup();
    render(
      <TestProviders>
        <AssessmentRunner
          assessment={{
            id: "a1",
            slug: "demo",
            title: "Demo",
            summary: "Demo assessment",
            stage: "fundamentals",
            questions: [
              {
                id: "q1",
                prompt: "2 + 2 = ?",
                options: [
                  { id: "a", label: "3" },
                  { id: "b", label: "4" },
                ],
                correctOptionId: "b",
                explanation: "2 + 2 is 4.",
              },
            ],
          }}
        />
      </TestProviders>,
    );

    await user.click(screen.getByText("4"));
    await user.click(screen.getByRole("button", { name: /reveal answer/i }));

    expect(screen.getByText(/correct/i)).toBeInTheDocument();
    expect(screen.getByText(/score .* 1 \/ 1/i)).toBeInTheDocument();
  });
});

