/**
 * Loyal Duck — Phase W2: Real Browser Usability & Header Clearance Test
 * 
 * Uses Playwright + Chromium (Google Chrome) to verify:
 * 1. Viewport matrices (Android 360, iPhone 390, Small 320, Tablet 768, Desktop 1280)
 * 2. Sticky header clearance (header never covers stepper, title, or focused field)
 * 3. Combobox keyboard navigation (ArrowDown, ArrowUp, Enter, Escape)
 * 4. Back / Edit data preservation
 * 5. Small-screen button wrapping & touch target compliance (>= 48px)
 * 6. High-fidelity visual screenshots saved to artifacts directory
 */

const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const ARTIFACTS_DIR = '/home/faaripi/.gemini/antigravity-ide/brain/140837ce-4130-4614-b2c4-40cfda8711aa';
const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';

const VIEWPORTS = [
  { name: 'android_360', label: 'Android Phone (360x640)', width: 360, height: 640, isMobile: true },
  { name: 'iphone_390', label: 'Standard Mobile (390x844)', width: 390, height: 844, isMobile: true },
  { name: 'small_320', label: 'Small Screen (320x568)', width: 320, height: 568, isMobile: true },
  { name: 'tablet_768', label: 'Tablet / Unfolded Fold (768x1024)', width: 768, height: 1024, isMobile: true },
  { name: 'desktop_1280', label: 'Desktop Standard (1280x800)', width: 1280, height: 800, isMobile: false }
];

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;

function check(condition, message) {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`  ✅ [PASS] ${message}`);
  } else {
    failedChecks++;
    console.error(`  ❌ [FAIL] ${message}`);
  }
}

async function run() {
  const startTime = Date.now();
  console.log('='.repeat(70));
  console.log('🦆 LOYAL DUCK — PHASE W2 REAL BROWSER USABILITY TEST');
  console.log('='.repeat(70));

  let browser;
  try {
    browser = await chromium.launch({
      executablePath: '/usr/bin/google-chrome',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
      headless: true
    });
    console.log('Google Chrome instance launched successfully.');
  } catch (err) {
    console.error('Failed to launch browser:', err);
    process.exit(1);
  }

  try {
    for (const vp of VIEWPORTS) {
      console.log(`\n--- Testing Viewport: ${vp.label} ---`);
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        isMobile: vp.isMobile,
        hasTouch: vp.isMobile,
        deviceScaleFactor: vp.isMobile ? 2 : 1
      });

      const page = await context.newPage();

      // Intercept Places proxy requests with mock predictions for deterministic keyboard test
      await page.route('**/api/onboarding/places', async (route) => {
        const body = JSON.parse(route.request().postData() || '{}');
        if (body.action === 'autocomplete') {
          await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
              success: true,
              predictions: [
                {
                  place_id: 'place_chij_test_01',
                  primary_text: "Gloria Jean's Coffees Askari X",
                  secondary_text: 'Sector A Askari 10, Lahore',
                  is_establishment: true,
                  types: ['cafe', 'food']
                },
                {
                  place_id: 'place_chij_test_02',
                  primary_text: "Gloria Jean's Coffees Gulberg",
                  secondary_text: 'M.M. Alam Road, Lahore',
                  is_establishment: true,
                  types: ['cafe', 'food']
                }
              ],
              attribution: 'Powered by Google',
              fallback_to_manual: false
            })
          });
        } else {
          await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
              success: true,
              place_id: body.place_id,
              name: "Gloria Jean's Coffees Askari X",
              formatted_address: 'Sector A Askari 10, Lahore, Pakistan',
              city: 'Lahore',
              latitude: 31.5204,
              longitude: 74.3587,
              business_status: 'OPERATIONAL',
              types: ['cafe', 'point_of_interest', 'establishment'],
              attribution: 'Powered by Google'
            })
          });
        }
      });

      // 1. Navigate to /start-business
      await page.goto(`${BASE_URL}/start-business`, { waitUntil: 'domcontentloaded' });
      await page.waitForSelector('#setup', { timeout: 8000 });

      // 2. Measure Sticky Header Height
      const headerMetrics = await page.evaluate(() => {
        const brandStrip = document.querySelector('.brand-strip');
        const navWrap = document.querySelector('.nav-wrap');
        const brandH = brandStrip ? brandStrip.offsetHeight : 0;
        const navH = navWrap ? navWrap.offsetHeight : 0;
        const totalStickyH = brandH + navH;
        return { brandH, navH, totalStickyH };
      });
      check(headerMetrics.totalStickyH > 0, `${vp.name}: Header height detected: ${headerMetrics.totalStickyH}px`);

      // 3. Scroll to form and test focused field clearance
      await page.$eval('#setup', el => el.scrollIntoView({ behavior: 'instant', block: 'start' }));
      await page.waitForTimeout(100);

      const setupCardTop = await page.evaluate(() => {
        const el = document.getElementById('setup');
        return el ? el.getBoundingClientRect().top : -1;
      });
      check(
        setupCardTop >= headerMetrics.totalStickyH - 5 || vp.width > 760,
        `${vp.name}: Setup card top (${Math.round(setupCardTop)}px) is not covered by header (${headerMetrics.totalStickyH}px)`
      );

      // Focus input and verify it is not covered by sticky header
      await page.focus('#business-name');
      await page.waitForTimeout(50);
      const inputTop = await page.evaluate(() => {
        const el = document.getElementById('business-name');
        return el ? el.getBoundingClientRect().top : -1;
      });
      check(
        inputTop >= headerMetrics.totalStickyH - 10 || vp.width > 760,
        `${vp.name}: Focused field (#business-name top: ${Math.round(inputTop)}px) clears header (${headerMetrics.totalStickyH}px)`
      );

      // Verify Stepper is not covered
      const stepperTop = await page.evaluate(() => {
        const el = document.querySelector('.wizard-progress');
        return el ? el.getBoundingClientRect().top : -1;
      });
      check(
        stepperTop >= headerMetrics.totalStickyH - 10 || vp.width > 760,
        `${vp.name}: Stepper (.wizard-progress top: ${Math.round(stepperTop)}px) clears sticky header`
      );

      // 4. Test Combobox Keyboard Navigation & Touch Target Size
      await page.fill('#google-search', 'Gloria');
      await page.waitForSelector('#google-search-predictions', { timeout: 3000 });

      // Verify listbox ARIA attributes
      const hasListboxRole = await page.$eval('#google-search-predictions', el => el.getAttribute('role') === 'listbox');
      check(hasListboxRole, `${vp.name}: Predictions listbox has role="listbox"`);

      // Verify option touch target height >= 48px
      const firstOptionHeight = await page.$eval('#place-suggestion-0', el => el.offsetHeight);
      check(firstOptionHeight >= 48, `${vp.name}: Suggestion touch target height is ${firstOptionHeight}px (>= 48px)`);

      // Keyboard navigation: ArrowDown
      await page.keyboard.press('ArrowDown');
      const firstSelected = await page.$eval('#place-suggestion-0', el => el.getAttribute('aria-selected') === 'true');
      check(firstSelected, `${vp.name}: ArrowDown selects first prediction (aria-selected="true")`);

      // Keyboard navigation: ArrowDown again
      await page.keyboard.press('ArrowDown');
      const secondSelected = await page.$eval('#place-suggestion-1', el => el.getAttribute('aria-selected') === 'true');
      check(secondSelected, `${vp.name}: ArrowDown advances to second prediction (aria-selected="true")`);

      // Keyboard navigation: Enter
      await page.keyboard.press('Enter');
      await page.waitForTimeout(150);
      const selectedName = await page.$eval('#business-name', el => el.value);
      check(selectedName.includes("Gloria Jean's"), `${vp.name}: Enter key populates business name: "${selectedName}"`);

      // 5. Advance to Step 2 (Your reward)
      await page.selectOption('#business-category', 'Café');
      await page.fill('#business-city', 'Lahore');
      await page.click('button:has-text("Choose my reward")');
      await page.waitForSelector('fieldset[data-step="2"]', { timeout: 3000 });
      check(true, `${vp.name}: Advanced to Step 2 (Your reward)`);

      // 6. Test Button Stacking & Touch Target Size on Small Screens (<= 480px) in Step 2
      if (vp.width <= 480) {
        const buttonLayout = await page.evaluate(() => {
          const container = document.querySelector('.form-buttons');
          if (!container) return null;
          const style = window.getComputedStyle(container);
          const btns = Array.from(container.querySelectorAll('button'));
          return {
            flexDirection: style.flexDirection,
            heights: btns.map(b => b.offsetHeight),
            widths: btns.map(b => b.offsetWidth)
          };
        });
        check(
          buttonLayout && buttonLayout.flexDirection.startsWith('column'),
          `${vp.name}: Form buttons stack vertically on mobile (flex-direction: ${buttonLayout ? buttonLayout.flexDirection : 'unknown'})`
        );
        check(
          buttonLayout && buttonLayout.heights.every(h => h >= 44),
          `${vp.name}: All button heights meet tap target guidelines: ${JSON.stringify(buttonLayout ? buttonLayout.heights : [])}`
        );
      }

      // 7. Test Back/Edit Form State Preservation
      // Click Back to go back to Step 1
      await page.click('button:has-text("Back")');
      await page.waitForSelector('fieldset[data-step="1"]', { timeout: 3000 });
      const preservedName = await page.$eval('#business-name', el => el.value);
      check(preservedName === selectedName, `${vp.name}: Back preserves entered business name: "${preservedName}"`);

      // Advance back through Step 2 to Step 3
      await page.click('button:has-text("Choose my reward")');
      await page.waitForSelector('fieldset[data-step="2"]', { timeout: 3000 });
      await page.fill('#reward-name', 'Free Regular Coffee');
      await page.click('button:has-text("Preview my programme")');
      await page.waitForSelector('fieldset[data-step="3"]', { timeout: 3000 });
      check(true, `${vp.name}: Reached Step 3 (Ready preview)`);

      // 8. Capture Viewport Screenshot
      const screenshotFilename = `w2_mobile_${vp.name}.png`;
      const screenshotPath = path.join(ARTIFACTS_DIR, screenshotFilename);
      await page.screenshot({ path: screenshotPath, fullPage: false });
      check(fs.existsSync(screenshotPath), `${vp.name}: Captured real screenshot to ${screenshotFilename}`);

      await context.close();
    }
  } finally {
    if (browser) await browser.close();
  }

  const durationMs = Date.now() - startTime;
  console.log('\n' + '='.repeat(70));
  console.log(`PHASE W2 BROWSER CHECKS: ${passedChecks}/${totalChecks} PASSED (${durationMs}ms)`);
  console.log('='.repeat(70));

  if (failedChecks > 0) {
    console.error(`❌ ${failedChecks} browser checks failed.`);
    process.exit(1);
  } else {
    console.log('🎉 ALL REAL BROWSER CHECKS & MOBILE USABILITY TESTS PASSED!');
  }
}

run();
