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

describe('admin set 3rd party: ',() => {
	beforeEach(() => {
		Cypress.Cookies.defaults({
			preserve: ['AUTH_SESSION_ID', 'AUTH_SESSION_ID_LEGACY', 'KC_RESTART', 'KEYCLOAK_REMEMBER_ME', 'chat-server-session', 'io', '_agent_session', 'locale', 'remember_token'],
		})
	})
	it('Go to setting part:',() => {
		cy.agent_admin_setting()
		cy.agent_admin_goto_bookingPage()
		cy.agent_admin_3rd_party_off()
		cy.agent_admin_3rd_party_enable_or_off_save_buuton()
		cy.agent_admin_setting()
		cy.agent_admin_goto_payment_setting()
		cy.agent_admin_inactive_payment_visa_paygate()
		//cy.agent_admin_inactive_payment_mastercard_paygate()
		cy.agent_admin_3rd_party_saveChange()
		cy.agent_admin_setting()
	})
})