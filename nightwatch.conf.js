const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');
module.exports = {
  silent: !process.env.NIGHTWATCH_VERBOSE,
  test_settings: {
    default: {
      webdriver: {
        server_path: chromedriver.path,
        start_process: true,
        port: 4444,
        // host: "172.17.0.1",
      },
desiredCapabilities: {
        browserName: "chrome",
        "chromeOptions": { "args": [ "--headless" ]   }
      },

      screenshots: {
        enabled: true,
        path: 'screenshots'
      }
    },
    chromeHeadless: {
      webdriver: {
        server_path: chromedriver.path,
        cli_args: ['--port=4444']
      },
      desiredCapabilities: {
        browserName: "chrome",
        "chromeOptions": {
          "args": [ "--headless" ]
          "binary": '/opt/google/chrome/chrome'
        }
      }
    },
      firefoxHeadless: {
        webdriver: {
          server_path: geckodriver.path
        },
        desiredCapabilities: {
          "browserName": "firefox",
          "acceptInsecureCerts": true,
          "alwaysMatch": {
            "moz:firefoxOptions": {
              "args": [ "-headless" ]
            }
          }

        }
      },
    firefox: {
      webdriver: {
        server_path: geckodriver.path,
      },
      desiredCapabilities: {
        browserName: "firefox",
        acceptInsecureCerts: true,
        'moz:firefoxOptions': {
          args: ["--headless"]
        }
      }
    },
    chrome: {
      webdriver: {
        server_path: chromedriver.path,
        cli_args: ['--port=4444']
      },
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          w3c: false
        }
      }
    }
  }
};
