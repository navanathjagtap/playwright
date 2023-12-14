import { chromium, Browser, BrowserContext, Page } from 'playwright';



describe('Learn playwright', () => {
  test('Login into playwright', async () => {
    // Launch a new browser
    // const browser: Browser = await chromium.launch();
    const browser: Browser = await chromium.launch({ headless: false });

    // Create a new browser context
    const context: BrowserContext = await browser.newContext();

    // const context: BrowserContext = await browser.newContext({
    //     recordVideo:{
    //         dir:"video/"
    //     }
    // });


    // Create a new page within the context
    const page: Page = await context.newPage();

    // Navigate to the specified URL
    await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('//input[@type="submit"]').press('Enter');
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('a').filter({ hasText: '2' }).click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('asdf');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('sdf');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('234');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();

//     // Add your test logic here...

//     // Close the browser
    await browser.close();


  });
});

