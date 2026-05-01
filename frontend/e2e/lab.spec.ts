import { expect, test } from "@playwright/test";

test("complete a lab and see completion in labs list", async ({ page }) => {
  await page.goto("/labs");
  await page.getByRole("link", { name: /scaffold a next\.js app/i }).click();

  await page.getByRole("button", { name: /mark complete/i }).click();
  await expect(page.getByRole("button", { name: /completed/i })).toBeVisible();

  await page.getByRole("link", { name: "Practice" }).click();
  await expect(page).toHaveURL(/\/labs$/);

  await expect(page.getByText("Completed").first()).toBeVisible();
});

