import { chromium } from "playwright";

export async function openChromiumPage(
    url,
    { launchOptions = {}, gotoOptions = {} } = {},
) {
    const browser = await chromium.launch({
        headless: false,
        ...launchOptions,
    });

    try {
        const page = await browser.newPage();

        await page.goto(url, {
            waitUntil: "networkidle",
            ...gotoOptions,
        });

        return { browser, page };
    } catch (error) {
        await browser.close();
        throw error;
    }
}
