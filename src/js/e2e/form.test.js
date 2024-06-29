import puppeteer from 'puppeteer';
jest.setTimeout(30000);

describe('auth-form validator', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('if form submited loader display block, if email and password true should set cookie', async () => {

    await page.goto('http://localhost:8080');

    await page.waitForSelector('.form');

    const form = await page.$('#auth-form');
    const email = await form.$('.form__input--email');
    const password = await form.$('.password');
    const submit = await form.$('.form__button');

    await email.type('hr@samedia.ru');
    await password.type('q10O57H25O82E40y95D12a85U96A4U34');

    await submit.click();

    await page.waitForSelector('.form__loader');
    await page.waitForSelector('.success');
    await page.cookies('http://localhost:8080/');
  });

  afterEach(async () => {
    await browser.close();
  })
});