const {test, chromium, expect } = require('@playwright/test');

test('launching the application URL',async()=>{
const browser= await chromium.launch({
    headless: false

});

});
const context = await browser.newcontext();
const page = await context.newPage();
const URL = 'https://www.youtube.com/';
await page.goto (URL);
await expect(page).tohaveURL(URL);
await expect(page).tohaveTitle('youtube');
await page.goto ('https://www.facebook.com/login/');
 await page.goback();
await page.goforward();
await expect(page).tohaveURL('https://www.facebook.com/login/');
await page.waitfortimeout(5000);
const page2 = await context.newPage();
await page2.goto('https://www.flipkart.com/');
await page.waitfortimeout(5000);
await browser.close();

