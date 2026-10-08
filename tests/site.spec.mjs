import { test, expect } from "@playwright/test";

const routes = [
  "/",
  "/book-a-reading-with-pooja",
  "/astrology",
  "/about",
  "/relationship-blueprint",
  "/book-a-reading",
  "/media",
  "/consultation-policies",
];
const viewports = [
  320, 360, 390, 430, 768, 820, 1024, 1280, 1440, 1920, 2560,
].map((width) => ({ width, height: width < 768 ? 844 : 900 }));
viewports.push({ width: 600, height: 900 }, { width: 844, height: 390 });

for (const viewport of viewports) {
  test(`all pages at ${viewport.width} × ${viewport.height}`, async ({
    page,
  }, testInfo) => {
    await page.setViewportSize(viewport);
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    for (const route of routes) {
      await page.goto(route);
      // Let Next's link prefetches settle before the next full-document navigation.
      await page.waitForLoadState("networkidle");
      await page.evaluate(() => document.fonts.ready);
      await expect(page.locator("h1")).toHaveCount(1);
      const layout = await page.evaluate(() => {
        const h1 = document.querySelector("h1");
        const range = document.createRange();
        range.selectNodeContents(h1);
        const rects = [...range.getClientRects()].filter(
          (r) => r.width > 1 && r.height > 1,
        );
        const outside = rects.some(
          (r) => r.left < -1 || r.right > innerWidth + 1,
        );
        const lineTops = [...new Set(rects.map((r) => Math.round(r.top / 10)))];
        return {
          overflow: document.documentElement.scrollWidth > innerWidth + 1,
          outside,
          lines: lineTops.length,
          bodySize: parseFloat(getComputedStyle(document.body).fontSize),
          h1Size: parseFloat(getComputedStyle(h1).fontSize),
          invisible: [...document.querySelectorAll("[data-reveal],h1")].some(
            (e) => +getComputedStyle(e).opacity < 0.7,
          ),
          broken: [...document.images]
            .filter((i) => i.complete && !i.naturalWidth)
            .map((i) => i.src),
          text: document.querySelector("main").innerText,
        };
      });
      expect.soft(layout.overflow, `${route} horizontal overflow`).toBe(false);
      expect.soft(layout.outside, `${route} clipped heading`).toBe(false);
      expect.soft(layout.lines, `${route} h1 lines`).toBeLessThanOrEqual(3);
      expect.soft(layout.bodySize).toBeGreaterThanOrEqual(15);
      expect.soft(layout.h1Size).toBeLessThanOrEqual(96);
      expect.soft(layout.invisible, `${route} hidden content`).toBe(false);
      expect.soft(layout.broken, `${route} images`).toEqual([]);
      expect.soft(layout.text).not.toMatch(/[₹$£€]\s*\d/);
      if (
        testInfo.project.name === "chromium" &&
        [390, 1440].includes(viewport.width)
      ) {
        await page.screenshot({
          path: `review/after-${route === "/" ? "home" : route.slice(1)}-${viewport.width}.png`,
          fullPage: true,
        });
      }
    }
    expect(errors).toEqual([]);
  });
}

test("navigation, keyboard, FAQ, booking destinations and motion cleanup", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  const triggerState = () =>
    page.evaluate(() => {
      let state = { count: -1, stale: -1 };
      const receive = (event) => {
        state = event.detail;
      };
      window.addEventListener("zenquest:motion-state", receive, { once: true });
      window.dispatchEvent(new Event("zenquest:inspect-motion"));
      window.removeEventListener("zenquest:motion-state", receive);
      return state;
    });
  await expect.poll(async () => (await triggerState()).count).toBe(3);
  const menu = page.getByRole("button", { name: "Consultations", exact: true });
  await menu.focus();
  await page.keyboard.press("Enter");
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(menu).toBeFocused();
  for (let i = 0; i < 5; i++) {
    const question = page.locator(`#question-${i}`);
    await question.click();
    await expect(question).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator(`#answer-${i}`)).toBeVisible();
    if (i > 0)
      await expect(page.locator(`#answer-${i - 1}`)).toHaveAttribute(
        "aria-hidden",
        "true",
      );
  }
  for (let i = 0; i < 3; i++) {
    await page
      .locator(".desktop-nav")
      .getByRole("link", { name: "About Pooja" })
      .click();
    await expect(page).toHaveURL(/\/about$/);
    await expect.poll(async () => (await triggerState()).count).toBe(0);
    await page
      .locator(".desktop-nav")
      .getByRole("link", { name: "Home", exact: true })
      .click();
    await expect(page).toHaveURL(/\/$/);
    await expect.poll(async () => (await triggerState()).stale).toBe(0);
    expect((await triggerState()).count).toBeLessThanOrEqual(3);
  }
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect.poll(async () => (await triggerState()).count).toBe(0);
  await expect(page.locator("h1")).toHaveCSS("transform", "none");
  await expect(page.locator(".button").first()).toHaveCSS(
    "transition-duration",
    "0s",
  );
  await page.emulateMedia({ reducedMotion: "no-preference" });
  expect((await triggerState()).stale).toBe(0);

  await page.setViewportSize({ width: 390, height: 844 });
  const toggle = page.getByRole("button", { name: "Open navigation" });
  await toggle.click();
  await expect(page.locator("#mobile-nav")).toBeVisible();
  await page
    .locator("#mobile-nav")
    .getByRole("link", { name: "Home", exact: true })
    .click();
  await expect(page.locator(".menu-toggle")).toHaveAttribute(
    "aria-expanded",
    "false",
  );
  await page.locator(".menu-toggle").click();
  await page.keyboard.press("Escape");
  await expect(page.locator(".menu-toggle")).toBeFocused();
  await page.locator(".menu-toggle").click();
  await page
    .locator("#mobile-nav")
    .getByRole("link", { name: "Astrology Consultations" })
    .click();
  await expect(page).toHaveURL(/\/astrology$/);
  await expect(page.locator(".menu-toggle")).toHaveAttribute(
    "aria-expanded",
    "false",
  );
  expect(
    (await page.locator(".menu-toggle").boundingBox()).width,
  ).toBeGreaterThanOrEqual(44);
  for (const route of [
    "/book-a-reading-with-pooja",
    "/astrology",
    "/relationship-blueprint",
  ]) {
    await page.goto(route);
    for (const link of await page.locator(".service-detail .button").all()) {
      const url = new URL(await link.getAttribute("href"));
      expect(url.hostname).toBe("wa.me");
      expect(url.pathname).toBe("/919650093836");
      expect(url.searchParams.get("text")).toContain("Pooja");
      await link.scrollIntoViewIfNeeded();
      // A real hit test ensures the persistent booking control doesn't cover it.
      expect(
        await link.evaluate((el) => {
          const r = el.getBoundingClientRect();
          return el.contains(
            document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2),
          );
        }),
      ).toBe(true);
    }
    await expect(
      page.locator('a[href="https://ig.me/m/zenquestbypooja"]'),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Visit the profile and tap Message." }),
    ).toHaveAttribute("href", "https://www.instagram.com/zenquestbypooja/");
  }
});

test("server content remains readable without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto("http://localhost:3001/");
  await expect(page.locator("h1")).toBeVisible();
  for (const group of await page.locator("[data-reveal]").all())
    await expect(group).toHaveCSS("opacity", "1");
  await expect(page.locator(".hero-actions .button")).toHaveAttribute(
    "href",
    /wa\.me\/919650093836/,
  );
  await context.close();
});
