
import './commands'
import './ccv'
import './agent-admin_commands'
import './travelapp_commands'
import './affiliates_commands'

Cypress.on('uncaught:exception', (err, runnable) => {
	return false
})
Cypress.Cookies.defaults({
	preserve: ['session_id', 'remember_token'],
})