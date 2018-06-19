const webdriverio = require('webdriverio')

const options = {
  desiredCapabilities: {
    browserName: 'chrome'
  },
  // baseUrl: 'http://192.168.99.100:4444',
  host: '192.168.99.100',
    port: 4444,
}

const client = webdriverio.remote(options)

client
  .init()
  .url('https://google.com')
  .setValue('.gsfi', 'foobar')
  .click('input[type="submit"]')
  .click('h3.r')
  .getTitle()
  .end()
  .then(console.log)
  .catch(console.log)

// const {Builder, By, Key, until} = require('selenium-webdriver');

// async function example() {
//   let driver = await new Builder().forBrowser('firefox').build();
//   try {
//     await driver.get('http://www.google.com/ncr');
//     await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
//     await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//   }
//   catch (e) {
//     console.log(e)
//   } finally {
//     await driver.quit();
//   }
// };

// example().then(console.log)