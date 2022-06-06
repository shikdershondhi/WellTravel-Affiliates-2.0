
Cypress.Commands.add('login', (name, { cacheSession = true } = {}) => {
	const login = () => {
		cy.visit('')
		 cy.contains('Log in').click()
		cy.get(':nth-child(3) > .input > .input__field-holder > .input__field').type('ehatesham@welldev.io')
		cy.get(':nth-child(4) > .input > .input__field-holder > .input__field').type('asdasd123')
		cy.contains('Sign In').click()
	}
	if (cacheSession) {
		cy.session(name, login)
	} else {
		login()
	}
})