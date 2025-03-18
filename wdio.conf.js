export const config = {
    // runer: 'local',
   //  path: '/', 
   //  host: '127.0.0.1',
    // port: 4723,
 
     user: 'oauth-arq.felipefer-fd93f',
     key: '2a97dd57-1a60-4361-9907-6a28a47ae227',
     hostname: 'ondemand.us-west-1.saucelabs.com',
     port: 443,
     baseUrl: 'wd/hub',
    
    specs: [
         './test/specs/**/*.js'
         
     ],
     maxInstances: 1,
     capabilities: [
         
         /*{
         platformName: 'Android',
         'appium:deviceName': 'Ebac',
         'appium:platformVersion': '15.0',
         'appium:automationName': 'UiAutomator2',
         'appium:app': `${process.cwd()}/app/ebacshop.apks`,
         'appium:appWaitActivity': '.MainActivity',
         'appium:disableIdLocatorAutocompletion': true
     }*/
         {
             platformName: 'Android',
             'appium:app': 'storage:filename=ebacshop (3).aab', // The filename of the mobile app
             'appium:deviceName': 'Android GoogleAPI Emulator',
             'appium:platformVersion': '12.0',
             'appium:automationName': 'UiAutomator2',
             'appium:disableIdLocatorAutocompletion': true,
             'sauce:options': {
                build: 'appium-build-test-ebacshop17',
                name: '<EbacShopTeste17>',
                deviceOrientation: 'PORTRAIT',
              },
         }
     ],
 
     logLevel: 'info',
     waitforTimeout: 10000,
     connectionRetryTimeout: 120000,
     connectionRetryCount: 3,
     framework: 'mocha',
     reporters: ['spec',
         ['allure',{
         outputDir: 'allure-results',
         disableWebdriverStepsReporting: true,
         disableWebdriverScreenshotsReporting: true,
     }]
 ],
     mochaOpts: {
         ui: 'bdd',
         timeout: 60000
     },
 }
 