// Render mini-memesprint/meme.html to a 1024x1024 PNG with the local
// headless Chromium (same setup as the flight-game screenshots).
import { chromium } from "playwright-core";

const browser = await chromium.launch({
  executablePath:
    "/home/hatch/workspace/tools/playwright/browsers/chromium-1255/chrome-linux64/chrome",
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const page = await browser.newPage({
  viewport: { width: 1024, height: 1024 },
  deviceScaleFactor: 1,
});
page.on("pageerror", (e) => console.log("[pageerror]", e.message));
await page.goto(
  "file:///home/hatch/workspace/goals/bounty-make-fun/entries/mini-memesprint/meme.html",
  { waitUntil: "load" },
);
await page.waitForTimeout(600);
await page.screenshot({
  path: "/home/hatch/workspace/goals/bounty-make-fun/entries/mini-memesprint/entry.png",
  type: "png",
});
await browser.close();
console.log("meme rendered");
