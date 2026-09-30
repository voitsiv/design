const fs = require('fs');
const path = require('path');
const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const { page } = require('./lib');

(async () => {
  const names = process.argv.slice(2);
  const browser = await chromium.launch();
  const p = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  for (const n of names) {
    const html = path.join(__dirname, `${n}.html`);
    fs.writeFileSync(html, page(require(`./${n}`)));
    await p.goto('file://' + html);
    await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: path.join(__dirname, `${n}.png`) });
  }
  await browser.close();
})();
