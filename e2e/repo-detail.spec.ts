import { test, expect } from '@playwright/test';

test('can navigate to repo detail from list', async ({ page }) => {
  await page.goto('/');
  const firstCard = page.getByTestId('repo-card').first();
  await expect(firstCard).toBeVisible();
  await firstCard.click();
  await expect(page.getByTestId('page-title')).toBeVisible();
}); 
