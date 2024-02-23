// @ts-check
const { test, expect } = require('@playwright/test')

test('ผู้ใช้งานทำการค้นหาคำว่าหวย และ ผลการค้นหาประมาณ 101,000,000 รายการ', async ({ page }) => {
  await test.step('Step 1 :: go to serch page', async () => {
    await page.goto('https://www.google.com/');
  // Expects page to have a heading with the name of Installation.
    await expect(page).toHaveTitle(/Google/);
});

  // Type into search box
  await test.step('Step 2 :: Type in to serch box', async () => {
  const seachField = await page.locator('#APjFqb');
    await seachField.fill('หวย');
  // await page.locator('#APjFqb').fill('หวย');
  // await page.locator('textarea[name=q]');
  // await page.getByLabel('ค้นหา', { exact: true }).fill('หวย');

    await seachField.press('Enter');
});
  // await page.getByRole('button', { name: 'ค้นหาด้วย Google' }).click();
  
  // Assert "ผลการค้นหาประมาณ 101,000,000 รายการ (0.36 วินาที)"
  // Assert test in id=result-stats

  // await expect(page.locator('#result-stats')).toHaveText(/ผลการค้นหาประมาณ/);
  // await expect(page.locator('#result-stats')).toHaveText(/รายการ/);
  // await expect(page.locator('#result-stats')).toHaveText(/วินาที/);

  // Assert with regular ผลการค้นหาประมาณ 101,000,000 รายการ (0.36 วินาที)
  await test.step('Step 3 :: Assert text in id=result-stats', async () => {
    await expect(page.locator('#result-stats'))
    .toHaveText(/ผลการค้นหาประมาณ (\d{1,3},\d{3},\d{3}) รายการ \(\d{1,2}\.\d{1,2} วินาที\)/);
  });
});
