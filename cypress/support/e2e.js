import './commands'
import './travelapp/travelapp_ccv'
import './travelapp/travelapp_commands'
import './travelapp/flight_commands'
import './travelapp/hotel_commands'
import './travelapp/car_commands'
import './agent_admin/agent-admin_commands'
import './affiliates/affiliates_commands'

Cypress.on('uncaught:exception', (err, runnable) => {
	return false
})
Cypress.Cookies.defaults({
	preserve: ['session_id', 'remember_token'],
})
