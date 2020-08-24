exports.basicLoadTest = async (url, done) => {
    try {
        await page.goto(url, { waitUntil: 'networkidle0' });
        await page.waitForSelector('header');
        await page.$('header');
        await page.evaluate(val => document.querySelector('header input').value = val, "iphone");
        await page.click('header input[type=submit]')
        await page.waitForNavigation();
        done()
    } catch (error) {
        done.fail(error)
    }
}

exports.pageLoadTestName = 'Page %s loads correctly';