/**
 * Loyal Duck — Phase L2: Reconciled Pages Visual Screenshot Capture
 * 
 * Captures desktop (1280x800) and mobile (360x640) screenshots of:
 * - /business
 * - /pricing
 * - /start-business
 * - /contact
 * - /merchant-terms
 */

const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const ARTIFACTS_DIR = '/home/faaripi/.gemini/antigravity-ide/brain/140837ce-4130-4614-b2c4-40cfda8711aa';
const BASE_URL = process.env.TEST_URL || 'http://127.0.0.1:3009';

const PAGES = [
  { route: '/business', name: 'l2_business' },
  { route: '/pricing', name: 'l2_pricing' },
  { route: '/start-business', name: 'l2_start_business' },
  { route: '/contact', name: 'l2_contact' },
  { route: '/merchant-terms', name: 'l2_merchant_terms' },
];

const VIEWPORTS = [
  { name: 'desktop_1280', width: 1280, height: 800, isMobile: false },
  { name: 'mobile_360', width: 360, height: 640, isMobile: true },
];

async function run() {
  console.log('='.repeat(70));
  console.log('🦆 CAPTURING PHASE L2 RECONCILED PAGE SCREENSHOTS');
  console.log('='.repeat(70));

  const browser = await chromium.launch({
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    headless: true,
  });

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      isMobile: vp.isMobile,
      deviceScaleFactor: 2,
    });

    for (const p of PAGES) {
      const page = await context.newPage();
      const url = `${BASE_URL}${p.route}`;
      console.log(`Navigating to ${url} on ${vp.name}...`);
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.waitForTimeout(500);

      const shotPath = path.join(ARTIFACTS_DIR, `${p.name}_${vp.name}.png`);
      await page.screenshot({ path: shotPath, fullPage: false });
      console.log(`  📸 Saved screenshot: ${shotPath}`);
      await page.close();
    }
    await context.close();
  }

  await browser.close();
  console.log('\n🎉 ALL L2 SCREENSHOTS CAPTURED SUCCESSFULLY!');
}

run().catch((err) => {
  console.error('Screenshot capture failed:', err);
  process.exit(1);
});
