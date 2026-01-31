import { test, expect } from "@playwright/test";

test.describe("Negative UI Tests (Robustness & Error Handling)", () => {
  //  Neg_UI_0001 – Clear input should clear output
  test("Neg_UI_0001 - Clearing input clears Sinhala output", async ({
    page,
  }) => {
    await page.goto("https://www.swifttranslator.com/");

    const input = page.locator("#singlish");
    const output = page.locator("#sinhala");

    await input.fill("mama gedhara yanavaa");
    await expect(output).not.toBeEmpty();

    await input.fill("");
    await expect(output).toBeEmpty();
  });

  //  Neg_UI_0002 – Numbers-only input should not crash UI
  test("Neg_UI_0002 - Numbers-only input does not break UI", async ({
    page,
  }) => {
    await page.goto("https://www.swifttranslator.com/");

    await page.locator("#singlish").fill("1234567890");
    await expect(page.locator("#sinhala")).toBeVisible();
  });

});