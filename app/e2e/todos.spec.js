const { expect, test } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
});

test.describe("ToDo List", async () => {
    test("should show \"To Do Board\" title", async ({ page }) => {
        await expect(page.locator("text=To Do Board").first()).toBeVisible();
    });

    test("should show the fetch ToDos button", async ({ page}) => {
        await expect(page.locator("text=Fetch ToDos").first()).toBeVisible();
    });

    test("should press the fetch ToDos button and show loading page", async ({ page }) => {
        await page.click("text=Fetch ToDos");
        await expect(page.locator("text=Loading...").first()).toBeVisible();
    });
});
