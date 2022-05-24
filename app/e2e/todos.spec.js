const { expect, test } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
});

test.describe("ToDo List", async () => {
    test("should show \"To Do Board\" title", async ({ page }) => {
        await page.goto("/todos");
        await expect(page.locator("text=To Do Board").first()).toBeVisible();
    });

    test("should show the fetch ToDos button", async ({ page}) => {
        await page.goto("/todos");
        await expect(page.locator("text=Fetch ToDos").first()).toBeVisible();
    });
});
