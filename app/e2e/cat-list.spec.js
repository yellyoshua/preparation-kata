const { expect, test } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
});

test.describe("cat list", async () => {
    test("should show the cat list", async ({ page }) => {
        await page.goto("/cats");
        const catList = await page.waitForSelector('#pet-list');
        expect(catList).toBeTruthy();
    });
});