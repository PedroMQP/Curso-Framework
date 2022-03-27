const { I } = inject()

Given('Im logged in', async () => {
	I.amOnPage('')
	const amNotILoggedIn = await globalThis.tryTo(() =>
		I.see('Log in to ZeroBank')
	)

	if (amNotILoggedIn) {
		I.fillField('user_login', 'username')
		I.fillField('user_password', 'password')
		I.click('Sign in')
	}
})
