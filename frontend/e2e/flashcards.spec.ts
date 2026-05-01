import { expect, test } from "@playwright/test";

test("mark flashcard known and see progress in decks list", async ({ page }) => {
  await page.goto("/flashcards");
  await page.getByRole("link", { name: /concepts/i }).click();

  await page.getByRole("button", { name: /^known$/i }).click();

  await page.getByRole("link", { name: "Review" }).click();
  await expect(page).toHaveURL(/\/flashcards$/);
  await expect(page.getByText(/concepts \(1\/\d+\)/i)).toBeVisible();
});

