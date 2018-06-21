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


webdriverio
  .remote(options)
  .init()
  .url('https://example.com')
  .getTitle()
  .then(title => assert.strictEqual(title, 'Example Domain'))
  .end()
  .catch(console.log)