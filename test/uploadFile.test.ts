import { chromium, Browser, BrowserContext, Page } from 'playwright';



describe('Learn upload file', () => {
  test('Login into playwright', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();
  
    await page.goto('https://the-internet.herokuapp.com/upload');
  
    await page.waitForSelector("#drag-drop-upload"); // Wait for the element to be present
    await page.click("#drag-drop-upload");
  
    page.on("filechooser", async (filechooser) => {
      await filechooser.setFiles("absolute/path/to/images/cloud.png");
      console.log("Uploaded cloud.png successfully");
      await page.waitForTimeout(1000);
    });
  
    // Additional steps or assertions can be added here
  
    await browser.close();
  }, 60000); // 60 seconds timeout
  
  
});

