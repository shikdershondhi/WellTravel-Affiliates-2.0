describe('visit admin URL', () => {
	it('should redirect to the correct page', () => {
		cy.visit_agent_admin()
	})
	beforeEach(()=>{
		Cypress.Cookies.defaults({
			preserve: ['AUTH_SESSION_ID', 'AUTH_SESSION_ID_LEGACY', 'KC_RESTART', 'KEYCLOAK_REMEMBER_ME','chat-server-session', 'io','_agent_session', 'locale', 'remember_token'],
		})
	})
	it('should admin login', () => {
		cy.get('.login-pf-page').then(($body) => {
			if ($body.text().includes('Sign In')) {
				cy.agent_admin_login()
			} else {
				cy.agent_admin_flight_selection()
			}
		})
	})
})

describe('admin flight Book flow',() =>
{
	beforeEach(()=>{
		Cypress.Cookies.defaults({
			preserve: ['AUTH_SESSION_ID', 'AUTH_SESSION_ID_LEGACY', 'KC_RESTART', 'KEYCLOAK_REMEMBER_ME','chat-server-session', 'io','_agent_session', 'locale', 'remember_token'],
		})
	})
	it('admin flight Search box', () => {
		cy.agent_admin_flight_select_multicity_trip()
		cy.agent_admin_flight_select_travelers()
		cy.agent_admin_flight_trip_one()
		cy.agent_admin_flight_trip_two()
		cy.agent_admin_flight_trip_three()
		cy.agent_admin_flight_Channels_amadeus()
		cy.agent_admin_flight_search()
	})
	it('admin flight result page', () => {
		cy.agent_admin_flight_single_flight_type_three()
		cy.agent_admin_flight_continue_to_cart()
	})
	it('admin cart', () => {
		cy.agent_admin_Your_Cart()
		cy.agent_admin_flight_Travelers_Information_booking()
		cy.agent_admin_invoice()
		cy.agent_admin_Redemption_Vouchers()
		cy.agent_admin_next_step_four()
	})
	it('admin should take order ', ()=> {
		cy.agent_admin_Review_book_continue_to_order()
		cy.agent_admin_order_page()
		cy.agent_admin_back_to_landingpage()
	})

})