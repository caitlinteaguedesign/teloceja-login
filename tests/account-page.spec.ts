import { test, expect } from '@playwright/test';

test('should see login form if on account page without session', async ({
  page,
}) => {
  // Start from the index page
  await page.goto('/');
  // Go to account
  await page.goto('/account');
  // The page should contain a p with "Please login..."
  await expect(page.locator('p')).toContainText(/Please login/);
});
