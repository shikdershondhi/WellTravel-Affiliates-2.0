import 'cypress-iframe'
//==============invoice================

Cypress.Commands.add('agent_admin_invoice', () => {
	cy.get('.paymentsidebar__option-right > .radio > .radio__check').click().wait(3000)
	cy.get('.button--tertiary > :nth-child(2)').click().wait(3000)
})