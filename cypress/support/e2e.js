
import './commands'
import './ccv'

Cypress.on('uncaught:exception', (err, runnable) => {
	return false
})
Cypress.Cookies.defaults({
	preserve: ['session_id', 'remember_token'],
})