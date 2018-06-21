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
  .getTitle()
  .then(title => assert.strictEqual(title, 'Example Domain'))
  .end()
  .catch(error => {
    throw new Error(error);
  });
