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
				cy.agent_admin_car_selection()
			} else {
				cy.agent_admin_car_selection()
			}
		})
	})
})

describe('admin car Book flow',() =>
{
	beforeEach(()=>{
		Cypress.Cookies.defaults({
			preserve: ['AUTH_SESSION_ID', 'AUTH_SESSION_ID_LEGACY', 'KC_RESTART', 'KEYCLOAK_REMEMBER_ME','chat-server-session', 'io','_agent_session', 'locale', 'remember_token'],
		})
	})
	it.skip('admin car Search box by location', () => {
		cy.agent_admin_car_Search_by_location()
		cy.agent_admin_car_Pick_up_location()
		cy.agent_admin_car_driver_age()
		cy.agent_admin_car_Pick_up_date()
		//cy.agent_admin_car_Channels_amadeus()
		cy.agent_admin_car_search()
	})
	it('admin car Search box by airport', () => {
		cy.agent_admin_car_Search_by_airport()
		cy.agent_admin_car_Pick_up_airport()
		cy.agent_admin_car_driver_age()
		cy.agent_admin_car_Pick_up_date()
		cy.agent_admin_car_Channels_amadeus()
		cy.agent_admin_car_search()
	})
	it('admin car result page', () => {
		cy.agent_admin_car_result_page()
	})
	it('admin cart', () => {
		cy.agent_admin_Your_Cart()
		cy.agent_admin_car_Travelers_Information_booking()
		cy.agent_admin_invoice()
	})
	it('admin should take order ', ()=> {
		cy.agent_admin_Review_book_continue_to_order()
		cy.agent_admin_order_page()
		cy.agent_admin_back_to_landingpage()
	})

})