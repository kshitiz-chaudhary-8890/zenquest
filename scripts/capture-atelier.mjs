import { chromium } from "@playwright/test";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const OUT = "review/concepts";
mkdirSync(OUT, { recursive: true });

const pages = [
  ["atelier-ii", "/design-concepts/atelier-ii"],
  ["atelier-iii", "/design-concepts/atelier-iii"],
];

const viewports = [
  { name: "1440", width: 1440, height: 900 },
  { name: "390", width: 390, height: 844 },
];

const browser = await chromium.launch();

for (const viewport of viewports) {
  const context = await browser.newContext({
    viewport: { width: viewport.width, height: viewport.height },
    deviceScaleFactor: 1,
  });
  for (const [name, path] of pages) {
    const page = await context.newPage();
    await page.goto(`${BASE}${path}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(1600);
    await page.evaluate(async () => {
      const step = window.innerHeight * 0.7;
      for (let y = 0; y <= document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(900);
    await page.screenshot({ path: `${OUT}/${name}-${viewport.name}.png`, fullPage: true });
    console.log(`captured ${name} @${viewport.name}`);
    await page.close();
  }
  await context.close();
}

await browser.close();
console.log("done");
