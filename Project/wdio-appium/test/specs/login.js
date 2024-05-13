import { driver, $, expect } from '@wdio/globals'

describe('FITUR LOGIN', function () {
	it('sebagai user saya ingin membuka halaman login', async function () {
		// selector pakai accessibility id
		await $('~View menu').click()

		// selector pakai xpath dengan elemen utama tidak memiliki id unique
		// pilih elemen bapak terdekat yang memiliki id unique
		// pilih anak dari bapak tersebut dengan menggunakan order selector dari xpath []
		// await $('//android.view.ViewGroup[@resource-id="com.saucelabs.mydemoapp.android:id/header"]/android.widget.ImageView[2]').click()

		await driver.pause(500)

		// scroll ke bawah
		await driver
			.action('pointer')
			.move({ y: 850, x: 250 })
			.down()
			.pause(100)
			.move({ y: 500, x: 250, duration: 200 })
			.up()
			.perform()

		// pilih berdasarkan text nya pakai UiSelector
		// await $(`android=new UiSelector().text("Log In")`).click()

		// pilih berdasarkan text nya pakai XPath
		await $('//*[@text="Log In"]').click()

		const loginPageTitle = await $('id=com.saucelabs.mydemoapp.android:id/loginTV')
		await expect(loginPageTitle).toHaveText('Login')
	})

	it('login menggunakan username dan password yang valid', async function () {
		await $('id=com.saucelabs.mydemoapp.android:id/nameET').setValue('bod@example.com')
		await $('id=com.saucelabs.mydemoapp.android:id/passwordET').setValue('10203040')
		await $('id=com.saucelabs.mydemoapp.android:id/loginBtn').click()

		const productPageTitle = await $('id=com.saucelabs.mydemoapp.android:id/productTV')
		await expect(productPageTitle).toHaveText('Products')
	})
	
})
describe.only('menambahkan product ke keranjang', function(){
	it('memilih produk Sauce Labs Onesie', async function(){
		await driver
			.action('pointer')
			.move({ y: 1300, x: 250 })
			.down()
			.pause(100)
			.move({ y: 600, x: 250, duration: 200 })
			.up()
			.perform()
		await $('~Sauce Labs Onesie').click()
		const productOnesie = await $('//*[@text="Sauce Labs Onesie"]')
		await expect(productOnesie).toHaveText('Sauce Labs Onesie')
		await driver.pause(2000)
	})	

	it('memberi rating pada produk sauce labs onesie', async function(){
		await $('id=com.saucelabs.mydemoapp.android:id/start1IV').click()
		const reviewMessage = await $('id=com.saucelabs.mydemoapp.android:id/sortTV')
		await expect(reviewMessage).toHaveText('Thank you for submitting your review!')
		await browser.pause(2000)
		await $('~Closes review dialog').click()
	})

	it('memilih warna, dan menambahkan produk kekeranjang', async function(){
		await driver
			.action('pointer')
			.move({ y: 800, x: 250 })
			.down()
			.pause(100)
			.move({ y: 500, x: 250, duration: 200 })
			.up()
			.perform()
		await $('~Gray color').click()
		await $('~Increase item quantity').click()
		await $('~Tap to add product to cart').click()
		await $('id=com.saucelabs.mydemoapp.android:id/cartIV').click()
		const cartPageTitle = await $('id=com.saucelabs.mydemoapp.android:id/productTV')
		await expect(cartPageTitle).toHaveText('My Cart')

		const totalItems = await $('id=com.saucelabs.mydemoapp.android:id/itemsTV')
		await expect(totalItems).toHaveText('2 Items')
		
		const colorProduct = await $('~Displays color of selected product')
		await expect(colorProduct).toBeDisplayed('true')
		await driver.pause(2000)

		
	})

	it('checkout produk sauce labs onesie', async function(){
		await $('~Confirms products for checkout').click()
		const pageTitle = await $('id=com.saucelabs.mydemoapp.android:id/loginTV')
		await expect(pageTitle).toHaveText('Login')
		
		await $('id=com.saucelabs.mydemoapp.android:id/nameET').setValue('bod@example.com')
		await $('id=com.saucelabs.mydemoapp.android:id/passwordET').setValue('10203040')
		await $('id=com.saucelabs.mydemoapp.android:id/loginBtn').click()

		const pageCheckoutTitle = await $('id=com.saucelabs.mydemoapp.android:id/checkoutTitleTV')
		await expect(pageCheckoutTitle).toHaveText('Checkout')

		await $('id=com.saucelabs.mydemoapp.android:id/fullNameET').setValue('Rifqi Arkan')
		await $('id=com.saucelabs.mydemoapp.android:id/address1ET').setValue('Bojong Megah')
		await $('id=com.saucelabs.mydemoapp.android:id/address2ET').setValue('Narogong')
		await $('id=com.saucelabs.mydemoapp.android:id/cityET').setValue('Bekasi')
		await $('id=com.saucelabs.mydemoapp.android:id/stateET').setValue('Jawa Barat')
		await $('id=com.saucelabs.mydemoapp.android:id/zipET').setValue('17116')
		await $('id=com.saucelabs.mydemoapp.android:id/countryET').setValue('Indonesia')
		await $('~Saves user info for checkout').click()
	})
		
		// const cartReviewProduct = await $('//android.view.ViewGroup[@resource-id="com.saucelabs.mydemoapp.android:id/rattingV"]/android.widget.LinearLayout')
		// await expect(cartReviewProduct).toBe('id=com.saucelabs.mydemoapp.android:id/start1IV')
		// } catch (error) {
		// 	console.error('Ada kesalahan:', error)
		// }
		

})

