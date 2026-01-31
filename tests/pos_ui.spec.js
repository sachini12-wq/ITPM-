import { test, expect } from "@playwright/test";

const getSinglishInput = (page) =>
  page.getByPlaceholder("Input Your Singlish Text Here.");

const getSinhalaOutput = (page) =>
  page
    .locator("div.panel-title", { hasText: "Sinhala" })
    .locator("..")
    .locator("div")
    .filter({ hasNotText: "Sinhala" })
    .first();

test("Pos_UI_0001 - Real-time Sinhala output update", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const singlishInput = getSinglishInput(page);
  const sinhalaOutput = getSinhalaOutput(page);

  await singlishInput.type("mama gedhara");
  await expect(sinhalaOutput).toContainText("මම");

  await singlishInput.type(" yanavaa");
  await expect(sinhalaOutput).toContainText("යනවා");
});


test("Pos_UI_0002 - Real-time Sinhala output update", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");

  const singlishInput = getSinglishInput(page);
  const sinhalaOutput = getSinhalaOutput(page);

  await singlishInput.type("mata bath");
  await expect(sinhalaOutput).toContainText("මට");

  await singlishInput.type(" oonee");
  await expect(sinhalaOutput).toContainText("ඕනේ");
});
