const puppeteer = require('puppeteer');
describe('Home Page', () => {
    it('Can go to the home page', async () => {
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.goto('http://www.puppeteer.fun/', {waitUntil: 'networkidle2'});
        await page.screenshot({path: './screenshots/homie.png'});
        let aTagsWithHomeHref = await page.$$('a[href="http://www.puppeteer.fun/"]');
        expect(aTagsWithHomeHref.length).to.eql(4);
        await browser.close();
    })
});
