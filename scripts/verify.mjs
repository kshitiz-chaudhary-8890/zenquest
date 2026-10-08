import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
const origin = process.env.PREVIEW_URL || "http://localhost:3000";
const routes = [
  "/",
  "/about",
  "/astrology",
  "/book-a-reading-with-pooja",
  "/book-a-reading",
  "/relationship-blueprint",
  "/media",
  "/consultation-policies",
];
for (const route of routes) {
  const response = await fetch(origin + route);
  assert.equal(response.status, 200, route);
  const html = await response.text();
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] || "";
  assert.ok(main.length > 200, `${route}: content`);
  assert.equal(
    (main.match(/<h1\b/g) || []).length,
    1,
    `${route}: one primary heading`,
  );
  assert.ok(!/(?:USD\s*\d|₹\s*\d|\$\s*\d)/.test(main), `${route}: no prices`);
  assert.ok(
    !/href="[^"]*(?:crystal|tarotscope|advisors|checkout|shipping)/i.test(html),
    `${route}: no retired links`,
  );
  assert.ok(
    /name="robots" content="noindex, nofollow"/.test(html),
    `${route}: private preview metadata`,
  );
  const wa = [...main.matchAll(/href="(https:\/\/wa\.me\/[^\"]+)"/g)].map(
    (m) => new URL(m[1].replaceAll("&amp;", "&")),
  );
  for (const url of wa) {
    assert.equal(url.pathname, "/919650093836");
    assert.ok(url.searchParams.get("text")?.startsWith("Hello"));
  }
  if (route === "/book-a-reading-with-pooja")
    assert.equal((main.match(/class="service-detail"/g) || []).length, 5);
  if (route === "/astrology")
    assert.equal((main.match(/class="service-detail"/g) || []).length, 4);
  if (route === "/relationship-blueprint") {
    assert.ok(!main.includes("<iframe"));
    assert.equal((main.match(/class="service-detail"/g) || []).length, 3);
    assert.ok(main.includes("4 × 60 minutes"));
    assert.ok(!html.includes("/blueprint/frontend.css"));
  }
  console.log(`PASS ${route}`);
}
const blueprint = JSON.parse(
  readFileSync("src/lib/blueprint.json", "utf8"),
).html;
assert.ok(
  !/USD|<script|<iframe|src="https?:/i.test(blueprint),
  "Blueprint is local and sanitized",
);
assert.ok(
  !readdirSync("public", { recursive: true }).some((f) => f.endsWith(".pdf")),
  "No public PDFs",
);
console.log(
  "PASS Blueprint isolation, public PDF exclusion and service counts",
);
