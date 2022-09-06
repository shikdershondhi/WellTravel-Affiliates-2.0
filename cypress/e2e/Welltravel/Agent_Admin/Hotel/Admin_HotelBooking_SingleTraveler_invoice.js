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
				cy.agent_admin_hotel_selection()
			} else {
				cy.agent_admin_hotel_selection()
			}
		})
	})
})

describe('admin hotel Book flow',() =>
{
	beforeEach(()=>{
		Cypress.Cookies.defaults({
			preserve: ['AUTH_SESSION_ID', 'AUTH_SESSION_ID_LEGACY', 'KC_RESTART', 'KEYCLOAK_REMEMBER_ME','chat-server-session', 'io','_agent_session', 'locale', 'remember_token'],
		})
	})
	it('admin hotel Search box', () => {
		//cy.agent_admin_hotel_select_room()
		//cy.agent_admin_hotel_select_travelers()
		cy.agent_admin_hotel_location()
		cy.agent_admin_hotel_checkin()
		cy.agent_admin_hotel_checkout()
		//cy.agent_admin_hotel_Channels_amadeus()
		cy.agent_admin_hotel_search()
	})
	it('admin hotel result page', () => {
		cy.agent_admin_hotel_select_room()
	})
	it('admin cart', () => {
		cy.agent_admin_Your_Cart()
		cy.agent_admin_hotel_Travelers_Information_booking()
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