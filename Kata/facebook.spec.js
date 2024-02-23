// @ts-check
const { test, expect } = require('@playwright/test')

test('เข้าสู่ระบบ Facebook และ โพสต์ สวัสดี Playwright', async ({ page }) => {
    await test.step('Step 1 :: go to facebook page', async () => {
        await page.goto('https://www.facebook.com/');
    });

    await test.step('Step 2 :: login facebook', async () => {
        await page.getByTestId('royal_email').fill('ชื่อผู้ใช้งาน');
        await page.getByTestId('royal_pass').fill('รหัสผ่าน');
        await page.getByTestId('royal_login_button').press('Enter');
    });

    await test.step('Step 3 :: post hello from playwright', async () => {
        await page.getByRole('button', { name: 'คุณคิดอะไรอยู่' }).click();
        await page.getByLabel('คุณคิดอะไรอยู่').fill('Hello From Playwright');
        await page.getByLabel('โพสต์', { exact: true }).click();
        await expect(page.getByText('Hello From Playwright')).toBeVisible();
    });

});