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
		await bluetoothItem.click()
		
		const bluetoothOpt = await driver.$('id=com.coloros.wirelesssettings:id/switchWidget');
		await bluetoothOpt.click()

	} finally {
		await driver.pause(1000);
		await driver.deleteSession();
	}
}

runTest().catch(console.error)