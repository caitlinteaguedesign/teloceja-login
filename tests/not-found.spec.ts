import { test, expect } from '@playwright/test';

test('should navigate to a not found page', async ({ page }) => {
  // Start from the index page
  await page.goto('/');
  // Go to a page that doesn't exist
  await page.goto('/not-a-page');
  // The page should contain an h1 with "Not Found"
  await expect(page.locator('h1')).toContainText('Not Found');
});

test('should recover from a not-found error and find a link home', async ({
  page,
}) => {
  // Start from a page that doesn't exist
  await page.goto('/not-a-page');
  // Find an element with the text 'Return Home' and click on it
  await page.click('text=Return Home');
  // The new URL should be "/"
  await expect(page).toHaveURL('/');
});
