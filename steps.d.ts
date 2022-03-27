/* eslint-disable */
/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js')
type loginPage = typeof import('./pages/loginPage')

declare namespace CodeceptJS {
	interface SupportObject {
		I: I
		current: any
		loginPage: loginPage
	}
	interface Methods extends Playwright {}
	interface I extends ReturnType<steps_file> {}
	namespace Translation {
		interface Actions {}
	}
}
