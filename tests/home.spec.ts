import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("landing page renders key sections", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", {
      name: "ZS Dolne Saliby",
    }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Otvorit sekciu" }).first()).toBeVisible();
});

test("landing page has no critical accessibility issues", async ({ page }) => {
  await page.goto("/");
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
