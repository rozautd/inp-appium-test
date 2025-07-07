export const config: WebdriverIO.Config = {
    runner: 'local',
    specs: ['./tests/**/*.e2e.ts'],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:platformVersion': process.env.PLATFORM_VERSION,
        'appium:deviceName': process.env.DEVICE_NAME,
        'appium:automationName': 'UiAutomator2',
        'appium:app': process.env.APP_PATH,
        'appium:appPackage': 'com.swaglabsmobileapp',
        'appium:appActivity': 'com.swaglabsmobileapp.SplashActivity',
        'appium:newCommandTimeout': 15,
    }],
    logLevel: 'info',
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    services: ['appium'],
    waitforTimeout: 20000,
    connectionRetryTimeout: 120000,
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function (test, context, { error }) {
        if (error) {
            await browser.takeScreenshot();
        }
    },
};