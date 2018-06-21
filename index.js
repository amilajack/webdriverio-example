const webdriverio = require('webdriverio');
const assert = require('assert');

const options = {
  desiredCapabilities: {
    browserName: 'chrome'
  },
  host: '192.168.99.100' // docker host ip here
};

webdriverio
  .remote(options)
  .init()
  .url('https://example.com')
  // Assert title
  .getTitle()
  .then(title => assert.strictEqual(title, 'Example Domain'))
  // Assert h1 text
  .getText('h1')
  .then(text => assert.strictEqual(text, 'Example Domain'))
  // Click interaction
  .click('a')
  .getUrl()
  .then(url => assert.strictEqual(url, 'https://www.iana.org/domains/reserved'))
  .end()
  .catch(error => {
    throw new Error(error);
  });
