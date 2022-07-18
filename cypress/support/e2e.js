import './commands'
import './affiliates/affiliates_commands'
import './travelapp/travelapp_ccv'
import './travelapp/travelapp_commands'
import './travelapp/flight_commands'
import './travelapp/hotel_commands'
import './travelapp/car_commands'
import './agent_admin/agent-admin_commands'
import './agent_admin/agent-admin_flight_commands'
import './agent_admin/agent-admin_hotel_commands'
import './agent_admin/agent-admin_car_commands'
import './agent_admin/agent_admin_ccv'
import './approval_process/approval_process_commands'
import './agent_admin/agent_admin_global_policy'


Cypress.on('uncaught:exception', (err, runnable) => {
	return false
})
Cypress.Cookies.defaults({
	preserve: ['session_id', 'remember_token'],
})
// Cypress.Cookies.defaults({
// 	preserve: ['AUTH_SESSION_ID', 'AUTH_SESSION_ID_LEGACY', 'KC_RESTART', 'KEYCLOAK_REMEMBER_ME','chat-server-session', 'io','_agent_session', 'locale', 'remember_token'],
// })