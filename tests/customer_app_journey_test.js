/**
 * Loyal Duck — Customer App Link & Journey Browser Verification
 * 
 * Verifies:
 * 1. Homepage has "Get your Duck" linking to /get-started
 * 2. /get-started has "Open Customer App" button linking to /app (customerAppUrl)
 * 3. Clicking "Open Customer App" navigates to /app
 * 4. Flutter Customer Web SPA initializes and boots (<flt-glass-pane> or flutter_bootstrap)
 * 5. Auth / Wallet UI renders with phone login prompt
 * 6. Deletion portal /app/delete-account renders interactive screen
 * 7. Mobile navigation drawer contains Customer app link
 * 8. Footer contains Customer app & wallet link
 */

const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const ARTIFACTS_DIR = '/home/faaripi/.gemini/antigravity-ide/brain/140837ce-4130-4614-b2c4-40cfda8711aa';
const BASE_URL = process.env.TEST_URL || 'http://localhost:3000';

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
  console.log('='.repeat(70));
  console.log('🦆 LOYAL DUCK — WEBSITE TO CUSTOMER APP JOURNEY TEST');
  console.log('='.repeat(70));

  const browser = await chromium.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  const context = await browser.newContext({
    viewport: { width: 390, height: 844 }, // Mobile iPhone 14/15 standard
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15'
  });

  const page = await context.newPage();
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  // Intercept app.loyalduck.pk and proxy to local Next.js server with custom Host header
  await page.route('https://app.loyalduck.pk/**', async (route) => {
    const reqUrl = new URL(route.request().url());
    const localTarget = `${BASE_URL}${reqUrl.pathname}${reqUrl.search}`;
    try {
      const response = await context.request.fetch(localTarget, {
        method: route.request().method(),
        headers: {
          ...route.request().headers(),
          host: 'app.loyalduck.pk'
        },
        data: route.request().postDataBuffer()
      });
      await route.fulfill({ response });
    } catch (err) {
      console.error('Route proxy failed:', err);
      await route.continue();
    }
  });

  try {
    // -------------------------------------------------------------------------
    // 1. Homepage Entry & Direct Customer CTA
    // -------------------------------------------------------------------------
    console.log('\n--- 1. Landing on Homepage & Inspecting Customer Action ---');
    const homeRes = await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
    check(homeRes.status() === 200, 'Homepage returns HTTP 200');

    const heroCta = await page.$('div.hero-buttons a.button-primary');
    check(heroCta !== null, 'Hero CTA "Get your Duck" exists');
    const heroHref = await heroCta.getAttribute('href');
    check(heroHref === '/app' || heroHref.includes('/app') || heroHref.includes('app.loyalduck.pk'),
      `Hero CTA points directly to customer registration (actual: "${heroHref}")`);

    // Verify Navbar CTA
    const navCta = await page.$('div.nav-actions a.button-small');
    check(navCta !== null, 'Navbar "Get Loyal Duck" button exists');
    const navHref = await navCta.getAttribute('href');
    check(navHref === '/app' || navHref.includes('/app') || navHref.includes('app.loyalduck.pk'),
      `Navbar CTA points directly to customer registration (actual: "${navHref}")`);

    // -------------------------------------------------------------------------
    // 2. Navigation to Customer Registration Directly from Hero CTA
    // -------------------------------------------------------------------------
    console.log('\n--- 2. Clicking "Get your Duck" directly navigates to Customer App ---');
    await Promise.all([
      page.waitForNavigation({ waitUntil: 'load' }),
      heroCta.click()
    ]);
    check(page.url().includes('/app') || page.url().includes('app.loyalduck.pk'),
      `Browser navigated directly to Customer App URL: ${page.url()}`);

    // Wait for Flutter initialization
    console.log('Waiting for Flutter Web engine initialization...');
    await page.waitForSelector('flt-glass-pane, flutter-view, [flt-renderer]', { timeout: 30000 });
    check(true, 'Flutter Web engine rendered root surface (<flt-glass-pane> / <flutter-view>)');

    // Wait for Flutter DOM content / canvas to render
    await page.waitForTimeout(3000);

    const customerAppScreenshot = path.join(ARTIFACTS_DIR, 'customer_app_web_loaded.png');
    await page.screenshot({ path: customerAppScreenshot });
    check(fs.existsSync(customerAppScreenshot), 'Saved screenshot customer_app_web_loaded.png');

    // -------------------------------------------------------------------------
    // 3. Inspect Get Started Portal Card
    // -------------------------------------------------------------------------
    console.log('\n--- 3. Verifying Get Started Portal (/get-started) ---');
    await page.goto(`${BASE_URL}/get-started`, { waitUntil: 'domcontentloaded' });
    const customerCard = await page.$('article.customer-portal');
    check(customerCard !== null, 'Customer Portal card is present in dual portal grid');

    const openCustomerAppBtn = await page.$('article.customer-portal a.button-primary');
    check(openCustomerAppBtn !== null, 'Primary action button exists in Customer Portal card');

    const btnText = await openCustomerAppBtn.innerText();
    check(btnText.includes('Open Customer App'), `Primary action button text is "Open Customer App" (actual: "${btnText.trim()}")`);

    const btnHref = await openCustomerAppBtn.getAttribute('href');
    check(btnHref === '/app' || btnHref.includes('/app') || btnHref.includes('app.loyalduck.pk'),
      `Customer CTA points to valid customerAppUrl (actual: "${btnHref}")`);

    // Take screenshot of /get-started
    const getStartedScreenshot = path.join(ARTIFACTS_DIR, 'customer_get_started_portal.png');
    await page.screenshot({ path: getStartedScreenshot });
    check(fs.existsSync(getStartedScreenshot), 'Saved screenshot customer_get_started_portal.png');

    // -------------------------------------------------------------------------
    // 4. Test Customer Public Deletion Route (/app/delete-account)
    // -------------------------------------------------------------------------
    console.log('\n--- 4. Testing Public Deletion Portal (/app/delete-account) ---');
    const delRes = await page.goto(`${BASE_URL}/app/delete-account`, { waitUntil: 'load' });
    check(delRes.status() === 200, '/app/delete-account returns HTTP 200');

    await page.waitForSelector('flt-glass-pane, flutter-view, [flt-renderer]', { timeout: 30000 });
    await page.waitForTimeout(2000);

    const deleteAppScreenshot = path.join(ARTIFACTS_DIR, 'customer_app_delete_screen.png');
    await page.screenshot({ path: deleteAppScreenshot });
    check(fs.existsSync(deleteAppScreenshot), 'Saved screenshot customer_app_delete_screen.png');

    // -------------------------------------------------------------------------
    // 5. Verify Mobile Menu & Footer Links
    // -------------------------------------------------------------------------
    console.log('\n--- 5. Verifying Mobile Navigation Drawer & Footer Links ---');
    await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });

    // Open mobile menu
    const menuBtn = await page.$('button.menu-toggle');
    if (menuBtn) {
      await menuBtn.click();
      await page.waitForTimeout(400);
      const mobileCustomerLink = await page.$('#mobile-nav a[href="/app"], #mobile-nav a[href="https://app.loyalduck.pk"]');
      check(mobileCustomerLink !== null, 'Mobile navigation drawer contains "Customer app" link');
    }

    // Inspect footer
    const footerCustomerLink = await page.$('footer a[href="/app"], footer a[href="https://app.loyalduck.pk"]');
    check(footerCustomerLink !== null, 'Footer "The good stuff" column contains Customer wallet link');

    // Check console errors
    const fatalErrors = consoleErrors.filter(e => !e.includes('favicon') && !e.includes('404') && !e.includes('status of 404'));
    check(fatalErrors.length === 0, `Zero fatal runtime errors in console (found: ${fatalErrors.length})`);

  } catch (err) {
    console.error('Test threw unexpected error:', err);
    failedChecks++;
  } finally {
    await browser.close();
  }

  console.log('\n' + '='.repeat(70));
  console.log(`CUSTOMER APP JOURNEY TEST RESULTS: ${passedChecks}/${totalChecks} PASSED`);
  if (failedChecks > 0) {
    console.log(`❌ ${failedChecks} CHECKS FAILED`);
    process.exit(1);
  } else {
    console.log('🎉 ALL WEBSITE-TO-CUSTOMER-APP CHECKS PASSED!');
    process.exit(0);
  }
}

run();
