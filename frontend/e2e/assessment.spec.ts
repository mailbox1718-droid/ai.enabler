import { expect, test } from "@playwright/test";

test("assessment shows immediate feedback on reveal", async ({ page }) => {
  await page.goto("/assessments/fundamentals-check");

  await page
    .getByText(
      /a button exists, clicking it increments a visible counter/i,
    )
    .click();
  await page.getByRole("button", { name: /reveal answer/i }).click();

  await expect(page.getByText(/correct|not quite/i)).toBeVisible();
  await expect(
    page.getByText(/specific and verifiable/i),
  ).toBeVisible();
});

