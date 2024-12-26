const {test, chromium, expect } = require('@playwright/test');

test('has title',async()=>{
const browser= await chromium.launch();
const page = await browser.newPage();
await page.goto('https://amazon.in/');

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

