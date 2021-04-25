/* global describe before test after */

describe('Casino user', function () {

  before(browser => browser.url('https://content1.qa.travcorpservices.com/umbraco'));

  test('Login page loaded', function (browser) {
    browser.waitForElementVisible('body')
      .assert.titleContains('Umbraco - content1.qa.travcorpservices.com')
      .assert.visible('input[name="username"]')
      .setValue('input[name="username"]', 'aaron.goshine@ttc.com')
      .assert.visible('input[name="password"]')
      .setValue('input[name="password"]', 'Y*WHG7nk;O')
      .assert.visible('button[type="submit"]')
      .click('button[type="submit"]')
      .assert.containsText('.title', 'Welcome to Umbraco')
      .assert.containsText('.intro-text', 'Welcome to Umbraco')


  });
  after(browser => browser.end());
});
