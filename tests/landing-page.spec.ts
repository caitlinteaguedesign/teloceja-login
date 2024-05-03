import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  // Start from the index page
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Teloceja/);
});

test('should navigate to the about page', async ({ page }) => {
  // Start from the index page
  await page.goto('/');
  // Find an element with the text 'About' and click on it
  await page.click('text=About');
  // The new URL should be "/about"
  await expect(page).toHaveURL('/about');
});
