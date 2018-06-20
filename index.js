const webdriverio = require('webdriverio')
const assert = require('assert')

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
  .url('https://example.com')
  // .waitForExist('h1')
  // .getText('h1')
  .getTitle()
  .end()
  .then(result => assert.strictEqual(result.value, 'Example Domain'))
  .catch(console.log)