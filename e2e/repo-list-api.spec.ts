import { test, expect } from '@playwright/test';

test('repo list loads data from API', async ({ page }) => {
  await page.goto('/');
  const cards = page.getByTestId('repo-card');
  await expect(cards.first()).toBeVisible();
  await expect(cards.nth(1)).toBeVisible();
  const firstRepoName = await cards.first().locator('h6').textContent();
  expect(firstRepoName?.length).toBeGreaterThan(0);
});
