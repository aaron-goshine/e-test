const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');
module.exports = {
  'silent': !process.env.NIGHTWATCH_VERBOSE,
  'test_settings': {
    'default': {
      'webdriver': {
        'server_path': chromedriver.path,
        'start_process': true,
        'port': 4444,
      },
      'desiredCapabilities': {
        'browserName': 'chrome',
        'chromeOptions': {
          'args': [ '--headless' ]
        }
      }
    },
    'chromeHeadless_docker_setup': {
      'webdriver': {
        'server_path': '../chromedriver',
      },
      'desiredCapabilities': {
        'browserName': 'chrome',
        'acceptSslCerts': true,
        'acceptInsecureCerts': true,
        'chromeOptions': {
          'args': [
            '--headless' ,
            '--no-sandbox',
            '--disable-gpu',
            '--ignore-certificate-errors'
          ]
        }
      }
    },
    'chromeHeadless': {
      'webdriver': {
        'server_path': chromedriver.path,
      },
      'desiredCapabilities': {
        'browserName': 'chrome',
        'chromeOptions': {
          'args': [ '--headless' ],
        }
      }
    },
    'firefoxHeadless': {
      'webdriver': {
        'server_path': geckodriver.path
      },
      'desiredCapabilities': {
        'browserName': 'firefox',
        'acceptInsecureCerts': true,
        'alwaysMatch': {
          'moz:firefoxOptions': {
            'args': [ '-headless' ]
          }
        }

      }
    },
    'firefox': {
      'webdriver': {
        'server_path': geckodriver.path,
      },
      'desiredCapabilities': {
        'browserName': 'firefox',
        'acceptInsecureCerts': true,
        'moz:firefoxOptions': {
          'args': ['--headless']
        }
      }
    },
    'chrome': {
      'webdriver': {
        'server_path': chromedriver.path,
        'cli_args': ['--port=4444']
      },
      'desiredCapabilities': {
        'browserName': 'chrome',
        'goog:chromeOptions': {
          'w3c': false
        }
      }
    }
  }
};
