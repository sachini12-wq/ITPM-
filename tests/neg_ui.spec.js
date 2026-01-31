import { test, expect } from "@playwright/test";

test.describe("Negative UI Tests (Robustness & Error Handling) - Fixed", () => {

  // Neg_UI_0001 – Clear input should clear output
  test("Neg_UI_0001 - Clearing input clears Sinhala output", async ({ page }) => {
    await page.goto("https://www.swifttranslator.com/");

    const input = page.getByPlaceholder("Input Your Singlish Text Here.");
    const output = page
      .locator("div.panel-title", { hasText: "Sinhala" })
      .locator("..")
      .locator("div")
      .filter({ hasNotText: "Sinhala" })
      .first();

    await input.fill("mama gedhara yanavaa");
    await expect(output).not.toBeEmpty();

    await input.fill("");
    // Wait a tiny bit to let the UI update
    await expect(output).toHaveText("");
  });

  // Neg_UI_0002 – Numbers-only input should not crash UI
  test("Neg_UI_0002 - Numbers-only input does not break UI", async ({ page }) => {
    await page.goto("https://www.swifttranslator.com/");

    const input = page.getByPlaceholder("Input Your Singlish Text Here.");
    const output = page
      .locator("div.panel-title", { hasText: "Sinhala" })
      .locator("..")
      .locator("div")
      .filter({ hasNotText: "Sinhala" })
      .first();

    await input.fill("1234567890");
    // Ensure output panel is visible and empty or has a default message
    await expect(output).toBeVisible();
  });

});
