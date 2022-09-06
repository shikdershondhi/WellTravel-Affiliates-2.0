import 'cypress-iframe'
//==============invoice================

Cypress.Commands.add('agent_admin_invoice', () => {
	cy.get(':nth-child(2) > .paymentsidebar__option-right > .radio > .radio__check').click().wait(3000)
})

Cypress.Commands.add('agent_admin_Add_Payment_Later', () => {
	cy.get(':nth-child(1) > .paymentsidebar__option-right > .radio > .radio__check').click().wait(3000)
})

Cypress.Commands.add('agent_admin_next_step_four', () => {
	cy.get('.button--tertiary > :nth-child(2)').click().wait(3000)
})