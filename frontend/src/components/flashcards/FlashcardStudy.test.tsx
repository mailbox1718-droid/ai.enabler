import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FlashcardStudy } from "@/components/flashcards/FlashcardStudy";
import { TestProviders } from "@/test/TestProviders";

describe("FlashcardStudy", () => {
  it("marks a card as known and updates counts", async () => {
    const user = userEvent.setup();
    render(
      <TestProviders>
        <FlashcardStudy
          deckId="concepts"
          deckTitle="Concepts"
          cards={[
            { id: "1", deckId: "concepts", front: "Front 1", back: "Back 1" },
            { id: "2", deckId: "concepts", front: "Front 2", back: "Back 2" },
          ]}
        />
      </TestProviders>,
    );

    expect(screen.getByText(/0 known \/ 2/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /^known$/i }));

    expect(screen.getByText(/1 known \/ 2/i)).toBeInTheDocument();
  });
});

