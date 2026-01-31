import { test, expect } from "@playwright/test";

test.describe("Negative Functional Tests (10) - Robustness", () => {

   test("Neg_Fun_0011 - Random gibberish", async ({ page }) => {
    await page.goto("https://www.swifttranslator.com/");
    await page.locator("#singlish").fill("asdlkjasdlk123!!");
    await expect(page.locator("#sinhala")).toBeVisible();
  });

  test("Neg_Fun_0012 - Excessive punctuation", async ({ page }) => {
    await page.goto("https://www.swifttranslator.com/");
    await page.locator("#singlish").fill("???!!!,,,;;");
    await expect(page.locator("#sinhala")).toBeVisible();
  });

  test("Neg_Fun_0013 - Mixed language + numbers", async ({ page }) => {
    await page.goto("https://www.swifttranslator.com/");
    await page.locator("#singlish").fill("mama 123 going home");
    await expect(page.locator("#sinhala")).toBeVisible();
  });

  test("Neg_Fun_0014 - Single letter", async ({ page }) => {
    await page.goto("https://www.swifttranslator.com/");
    await page.locator("#singlish").fill("a");
    await expect(page.locator("#sinhala")).toBeVisible();
  });

  test("Neg_Fun_0015 - Very long single word", async ({ page }) => {
    await page.goto("https://www.swifttranslator.com/");
    await page.locator("#singlish").fill("a".repeat(500));
    await expect(page.locator("#sinhala")).toBeVisible();
  });

  test("Neg_Fun_0016 - Only symbols", async ({ page }) => {
    await page.goto("https://www.swifttranslator.com/");
    await page.locator("#singlish").fill("@#$%^&*()_+");
    await expect(page.locator("#sinhala")).toBeVisible();
  });

  test("Neg_Fun_0017 - Repeated letters", async ({ page }) => {
    await page.goto("https://www.swifttranslator.com/");
    await page.locator("#singlish").fill("aaaaa bbbbb ccccc");
    await expect(page.locator("#sinhala")).toBeVisible();
  });

  test("Neg_Fun_0018 - Random keyboard mash", async ({ page }) => {
    await page.goto("https://www.swifttranslator.com/");
    await page.locator("#singlish").fill("qwertyuiopasdfghjkl");
    await expect(page.locator("#sinhala")).toBeVisible();
  });

  test("Neg_Fun_0019 - Mixed case gibberish", async ({ page }) => {
    await page.goto("https://www.swifttranslator.com/");
    await page.locator("#singlish").fill("AsDkJlQwErT");
    await expect(page.locator("#sinhala")).toBeVisible();
  });

  test("Neg_Fun_0020 - Empty lines / newlines", async ({ page }) => {
    await page.goto("https://www.swifttranslator.com/");
    await page.locator("#singlish").fill("\n\n\n");
    await expect(page.locator("#sinhala")).toBeVisible();
  });
});
