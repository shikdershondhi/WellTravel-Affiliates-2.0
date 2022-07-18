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

describe('admin Organisations part ',() => {
	beforeEach(() => {
		Cypress.Cookies.defaults({
			preserve: ['AUTH_SESSION_ID', 'AUTH_SESSION_ID_LEGACY', 'KC_RESTART', 'KEYCLOAK_REMEMBER_ME', 'chat-server-session', 'io', '_agent_session', 'locale', 'remember_token'],
		})
	})
	it('Organisations setting ',() => {
		cy.agent_admin_organisations()
		cy.agent_admin_organisations_search()
		cy.agent_admin_organisations_edit()
		cy.agent_admin_organisations_pre()
	})

})