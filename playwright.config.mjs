import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 240_000,
  expect: { timeout: 10_000 },
  workers: 3,
  retries: 0,
  reporter: [["list"], ["json", { outputFile: "review/browser-results.json" }]],
  use: {
    baseURL: process.env.TEST_URL || "http://localhost:3001",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  projects: ["chromium", "firefox", "webkit"].map((browserName) => ({
    name: browserName,
    use: { browserName },
  })),
});
