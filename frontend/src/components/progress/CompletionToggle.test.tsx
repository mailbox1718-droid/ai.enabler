import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CompletionToggle } from "@/components/progress/CompletionToggle";
import { TestProviders } from "@/test/TestProviders";

describe("CompletionToggle", () => {
  it("toggles completed state for a module", async () => {
    const user = userEvent.setup();

    render(
      <TestProviders>
        <CompletionToggle kind="module" slug="core-workflow-plan-implement-verify" />
      </TestProviders>,
    );

    expect(
      screen.getByRole("button", { name: /mark complete/i }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button"));

    expect(screen.getByRole("button", { name: /completed/i })).toBeInTheDocument();
  });
});

