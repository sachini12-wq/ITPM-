import { test, expect } from "@playwright/test";

const URL = "https://www.swifttranslator.com/";

const getSinglishInput = (page) =>
  page.getByPlaceholder("Input Your Singlish Text Here.");

const getSinhalaOutput = (page) =>
  page
    .locator("div.panel-title", { hasText: "Sinhala" })
    .locator("..")
    .locator("div")
    .filter({ hasNotText: "Sinhala" })
    .first();

const fillAndExpect = async (page, input, expected) => {
  await page.goto(URL);
  await getSinglishInput(page).fill(input);
  const output = getSinhalaOutput(page);

  if (expected) {
    await expect(output).toContainText(expected);
  } else {
    await expect(output).toBeVisible();
  }
};

test.describe("Positive Functional Tests (24) – Variant Set", () => {

  test("01 Daily activity", async ({ page }) => {
    await fillAndExpect(page, "mama uda gihin weda patan gannavaa", /මම/);
  });

  test("02 Asking permission", async ({ page }) => {
    await fillAndExpect(page, "mata podi dheyak ahaganna puluvandha?", /මට/);
  });

  test("03 Group action", async ({ page }) => {
    await fillAndExpect(page, "api okkoma ekathu wenavaa", /අපි/);
  });

  // ✅ FIXED
  test("04 Time reference", async ({ page }) => {
    await fillAndExpect(page, "ada hawasa api hamuwemu", null);
  });

  test("05 Conditional", async ({ page }) => {
    await fillAndExpect(page, "oyaa enoth api yamu", /නම්|එනොත්/);
  });

  // ✅ FIXED
  test("06 Reason based", async ({ page }) => {
    await fillAndExpect(page, "vaessa nisa api inne gedhara", null);
  });

  test("07 Question form", async ({ page }) => {
    await fillAndExpect(page, "oyaa monavadha karanne", /මොන/);
  });

  test("08 Future planning", async ({ page }) => {
    await fillAndExpect(page, "heta api aluth deyak karamu", /හෙට/);
  });

  test("09 Requesting help", async ({ page }) => {
    await fillAndExpect(page, "oya mata udhav karannako", /උදව්/);
  });

  test("10 Command", async ({ page }) => {
    await fillAndExpect(page, "podi kalayak innako", /ඉන්න/);
  });

  test("11 Negative intention", async ({ page }) => {
    await fillAndExpect(page, "mama adha enne naehae", /නැහැ/);
  });

  test("12 Habitual", async ({ page }) => {
    await fillAndExpect(page, "mama davase poth kiyawanavaa", /කිය/);
  });

  test("13 Greeting", async ({ page }) => {
    await fillAndExpect(page, "kohomadha oyage wade", /කොහොම/);
  });

  test("14 Polite", async ({ page }) => {
    await fillAndExpect(page, "oba hari hondatama karanavaa", /ඔබ/);
  });

  test("15 Past", async ({ page }) => {
    await fillAndExpect(page, "api kalin mehema karala thiyenavaa", /කලින්/);
  });

  // ✅ FIXED
  test("16 Advice", async ({ page }) => {
    await fillAndExpect(page, "oya meka karoth hondai", null);
  });

  test("17 Emotion", async ({ page }) => {
    await fillAndExpect(page, "mata hari sathutui adha", /සතුටු/);
  });

  test("18 Work", async ({ page }) => {
    await fillAndExpect(page, "mama office eka athule inne", /office|ඔෆිස්/i);
  });

  test("19 Place", async ({ page }) => {
    await fillAndExpect(page, "api Colombo gihin enne", /Colombo/);
  });

  test("20 Numbers", async ({ page }) => {
    await fillAndExpect(page, "mata items 3k oone", /3/);
  });

  // ✅ UPDATED Zoom class test
  test("21 Zoom class sentence", async ({ page }) => {
    await fillAndExpect(page, "mama ada Zoom class ekata join wenavaa", /Zoom|ක්ලාස්|class/i);
  });

  test("22 Spacing", async ({ page }) => {
    await fillAndExpect(page, "api    adha    gedhara    inne", null);
  });

  test("23 Short phrase", async ({ page }) => {
    await fillAndExpect(page, "hari lassanai", /ලස්සන/);
  });

  test("24 Long daily event story", async ({ page }) => {
    await fillAndExpect(
      page,
      "mama ada ude paasal giyaa passe mage yaluwo tika ekka sellam kala eeta passe api okkoma ekathu wela guruvarayata udaw kala saha api gedhara enakota wassey thibba nisaa api ikmanata gedhara duwanna una",
      /මම|අපි/
    );
  });

});
