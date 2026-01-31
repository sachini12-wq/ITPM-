# Singlish to Sinhala – Playwright Automation

## Project Description
This project automates functional and UI testing for the Singlish to Sinhala
transliteration system available at https://www.swifttranslator.com/

## Technologies
- Playwright
- JavaScript
- Chromium browser

## Setup Instructions
1. Install Node.js
2. Clone the repository
4. Install Playwright browsers:
   npx playwright install

## Run Tests
- Run all tests:
   (npx playwright test)
- Open Playwright UI:
- run test ui:
    (npx playwright test pos_fun.spec.js)
    (npx playwright test neg_fun.spec.js)
    (npx playwright test pos_ui.spec.js)
    (npx playwright test neg_ui.spec.js)
- View HTML report:
    (npx playwright test --reporter=html)
 - npm run report
     (npx playwright test pos_fun.spec.js  --reporter=list)
     (npx playwright test neg_fun.spec.js  --reporter=list)
-Run in headed mode (Debugging)
     (npx playwright test --headed)

## Test Coverage
- Positive functional tests
- Negative functional tests
- UI real-time output update test
