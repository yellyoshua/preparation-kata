// @ts-check
const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    testDir: "./e2e",
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    webServer: {
        command: 'npm run dev',
        timeout: 120 * 1000,
        port: 3000,
        reuseExistingServer: !process.env.CI,
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
};

module.exports = config;