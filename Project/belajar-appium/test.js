import { remote } from "webdriverio";

const capabilities = {
	platformName: 'Android',
	'appium:automationName': 'UiAutomator2',
	'appium:deviceName': '48dfc111',
	'appium:appPackage': 'com.android.settings',
	'appium:appActivity': '.Settings',
}

const wdOpts = {
	hostname: 'localhost',
	port: 4723,
	logLevel: 'info',
	capabilities,
}

async function runTest() {
	const driver = await remote(wdOpts)
	try {
		const bluetoothItem = await driver.$('//*[@text="Bluetooth"]');
		// const bluetoothMode = await driver.$('//*[@text="Off"]')
		// await expect(bluetoothMode).getText('Off')
		await bluetoothItem.click()
		

		// const bluetoothTitle = await driver.$('id=android:id/title')
		// expect(bluetoothTitle).getText('Bluetooth')
		const bluetoothOpt = await driver.$('id=com.coloros.wirelesssettings:id/switchWidget');
		await bluetoothOpt.click()

		// const bluetoothOn = await driver.$('//*[@text="On"]')
		// expect(bluetoothOn).getText('On')

	} finally {
		await driver.pause(1000);
		await driver.deleteSession();
	}
}

runTest().catch(console.error)