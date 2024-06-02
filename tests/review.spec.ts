import { test, expect } from '@playwright/test';

test('should show "thank you for your review"', async ({ page }) => {
  await page.goto('/');
  await page.route('*/**/reviews', async (route) => {
    await route.fulfill({ json: {} });
  });

  const star1 = page.getByRole('radio', { name: '1 star: Bad' });
  await star1.click();

  const contentInput = page.getByPlaceholder('What made your experience');
  const titleInput = page.getByPlaceholder("What's important for people");
  const dateInput = page.getByPlaceholder(/mm\/dd\/yyyy/i);
  const submitButton = page.getByRole('button', { name: 'Submit review' });
  await contentInput.fill('this is a review');
  await titleInput.fill('this is a review');
  await dateInput.fill('2024-01-01');
  await submitButton.click();

  expect(page.getByText('Thanks for your review!')).toBeDefined();
});

test('should redirect if rating is above 4', async ({ page }) => {
  await page.goto('/');
  await page.route('*/**/reviews', async (route) => {
    await route.fulfill({ json: {} });
  });

  const star5 = page.getByRole('radio', { name: '5 stars: Excellent' });
  await star5.click();

  const contentInput = page.getByPlaceholder('What made your experience');
  const titleInput = page.getByPlaceholder("What's important for people");
  const dateInput = page.getByPlaceholder(/mm\/dd\/yyyy/i);
  const submitButton = page.getByRole('button', { name: 'Submit review' });
  await contentInput.fill('this is a review');
  await titleInput.fill('this is a review');
  await dateInput.fill('2024-01-01');
  await submitButton.click();

  await page.waitForURL(
    'https://www.trustpilot.com/evaluate/www.google.com?stars=5'
  );
  expect(page.url()).toBe(
    'https://www.trustpilot.com/evaluate/www.google.com?stars=5'
  );
});
