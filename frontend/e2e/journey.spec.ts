import { expect, test } from "@playwright/test";

test("complete a module from detail page and see it in list", async ({
  page,
}) => {
  await page.goto("/");

  await page.getByRole("link", { name: /start the journey/i }).click();
  await expect(page).toHaveURL(/\/journey$/);

  await page
    .getByRole("link", { name: /ai coding agents: what they are/i })
    .click();

  await page.getByRole("button", { name: /mark complete/i }).click();
  await expect(page.getByRole("button", { name: /completed/i })).toBeVisible();

  await page.getByRole("link", { name: "Learn" }).click();
  await expect(page).toHaveURL(/\/modules$/);

  await expect(page.getByText("Completed").first()).toBeVisible();
});

