import { test, expect } from '@playwright/test';

test('repo detail loads data from API', async ({ page }) => {
  await page.goto('/');
  const firstCard = page.getByTestId('repo-card').first();
  await expect(firstCard).toBeVisible();
  const repoName = await firstCard.locator('h6').textContent();
  await firstCard.click();
  const detailTitle = page.getByTestId('repo-detail-title');
  await expect(detailTitle).toBeVisible();
  await expect(detailTitle).toHaveText(repoName?.trim() || '');
  await expect(page.getByText('Languages')).toBeVisible();
}); 
