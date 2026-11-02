import { openChromiumPage } from "../../src/browser/chromium.js";

const url = process.argv[2];

if (!url) {
    console.error("Usage: node examples/browser/chromium.js <url>");
    process.exit(1);
}

try {
    const { browser, page } = await openChromiumPage(url);

    console.log("URL:", page.url());
    console.log("Title:", await page.title());

    browser.on("disconnected", () => {
        console.log("Chromium closed.");
    });
} catch (error) {
    console.error(error.message);
    process.exitCode = 1;
}
