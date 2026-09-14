import { test, expect } from '@playwright/test';

test('loads the MoonBit engine and twelve-level catalogue', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#engine-status')).toHaveText('MOONBIT ENGINE · READY', { timeout: 15_000 });
  await expect(page.locator('.level-option')).toHaveCount(12);
  await expect(page.locator('#board .edge-hit')).not.toHaveCount(0);
  await expect(page.locator('#board .edge-hit').first()).toHaveAttribute('tabindex', '0');
});

test('analyzes and solves an imported puzzle', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /SOLVE/ }).click();
  await page.getByRole('button', { name: '分析' }).click();
  await expect(page.locator('#solve-result')).toContainText('唯一解');
  await page.getByRole('button', { name: '完整求解' }).click();
  await expect(page.locator('#solve-result')).toContainText('已找到唯一解');
  await expect(page.locator('#load-solution-button')).toBeEnabled();
});

test('generates validates and opens an authored puzzle', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /CREATE/ }).click();
  await page.getByRole('button', { name: '生成唯一谜题' }).click();
  await expect(page.locator('#editor-result')).toContainText('唯一解：是');
  await expect(page.locator('#play-created-button')).toBeEnabled();
  await page.locator('#editor-board').focus();
  await page.keyboard.press('ArrowRight');
  await expect(page.locator('#editor-board')).toHaveAttribute('aria-label', /第 1 行第 2 列/);
});
