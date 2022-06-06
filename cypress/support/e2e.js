// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
	return false
})
// Cypress.Cookies.defaults({
// 	preserve: ['session_id', 'remember_token'],
// })