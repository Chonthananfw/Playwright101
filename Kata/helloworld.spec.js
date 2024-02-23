// @ts-check
const { test, expect } = require('@playwright/test')

test('ตรวจสอบค่า', async ({ page }) => {
    await test.step('Step 1 :: go to web page', async () => {
      await page.goto('https://demo-frontend-reactjs.vercel.app/');
    });

    await test.step('Step 2 :: Assert text Call REST API และ helllo world!', async () => {
        await expect(page.getByTestId('message_text')).toHaveText('Call REST API');
        await expect(page.getByTestId('hello_text')).toHaveText('Hello World!');
    });

});