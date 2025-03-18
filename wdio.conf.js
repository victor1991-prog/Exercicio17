export const config = {
    // runer: 'local',
   //  path: '/', 
   //  host: '127.0.0.1',
    // port: 4723,
 
     user: 'oauth-victorviniciusmachado5-93739',
     key: 'f27db06b-f6cf-4831-b591-293a792ae106',
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
             'appium:app': 'storage:filename=ebacshop (2).aab', // The filename of the mobile app
             'appium:deviceName': 'Android GoogleAPI Emulator',
             'appium:platformVersion': '12.0',
             'appium:automationName': 'UiAutomator2',
             'appium:disableIdLocatorAutocompletion': true,
             'sauce:options': {
                build: 'appium-build-test-ebacshop17',
                name: '<EbacShopTeste>',
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
 