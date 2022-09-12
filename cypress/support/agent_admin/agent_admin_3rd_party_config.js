Cypress.Commands.add('agent_admin_goto_bookingPage', () => {
	cy.get(':nth-child(11) > span').click().wait(2000)
})

Cypress.Commands.add('agent_admin_goto_payment_setting', () => {
	cy.get(':nth-child(14) > span').click().wait(2000)
})
//===========================paygate=============================
Cypress.Commands.add('agent_admin_active_payment_visa_paygate', () => {
	cy.get(':nth-child(1) > .card--v2__wrapper > :nth-child(1) > .card__body-section > :nth-child(2) > :nth-child(2) > .radio > .radio__check').click().wait(2000)
})

Cypress.Commands.add('agent_admin_active_payment_mastercard_paygate', () => {
	cy.get(':nth-child(2) > .card--v2__wrapper > :nth-child(1) > .card__body-section > :nth-child(2) > :nth-child(2) > .radio > .radio__check').click().wait(2000)
})

Cypress.Commands.add('agent_admin_inactive_payment_visa_paygate', () => {
	cy.get(':nth-child(1) > .card--v2__wrapper > :nth-child(1) > .card__body-section > :nth-child(2) > :nth-child(1) > .radio > .radio__check').click().wait(2000)
})

Cypress.Commands.add('agent_admin_inactive_payment_mastercard_paygate', () => {
	cy.get(':nth-child(2) > .card--v2__wrapper > :nth-child(1) > .card__body-section > :nth-child(2) > :nth-child(1) > .radio > .radio__check').click().wait(2000)
})
//======================payfast=========================
Cypress.Commands.add('agent_admin_active_payment_visa_payfast', () => {
	cy.get(':nth-child(1) > .card--v2__wrapper > :nth-child(1) > .card__body-section > :nth-child(2) > :nth-child(3) > .radio > .radio__check').click().wait(2000)
})

Cypress.Commands.add('agent_admin_active_payment_mastercard_payfast', () => {
	cy.get(':nth-child(2) > .card--v2__wrapper > :nth-child(1) > .card__body-section > :nth-child(2) > :nth-child(3) > .radio > .radio__check').click().wait(2000)
})

Cypress.Commands.add('agent_admin_inactive_payment_visa_payfast', () => {
	cy.get(':nth-child(1) > .card--v2__wrapper > :nth-child(1) > .card__body-section > :nth-child(2) > :nth-child(1) > .radio > .radio__check').click().wait(2000)
})

Cypress.Commands.add('agent_admin_inactive_payment_mastercard_payfast', () => {
	cy.get(':nth-child(2) > .card--v2__wrapper > :nth-child(1) > .card__body-section > :nth-child(2) > :nth-child(1) > .radio > .radio__check').click().wait(2000)
})
//=========================================================
Cypress.Commands.add('agent_admin_3rd_party_saveChange', () => {
	cy.scrollTo('bottom').wait(3000)
	cy.get(':nth-child(3) > .button').click().wait(4000)
	cy.scrollTo('top').wait(3000)
	cy.reload()
})

Cypress.Commands.add('agent_admin_3rd_party_enable', () => {
	cy.get(':nth-child(2) > .checkbox').find(":checkbox").check({force: true}).wait(3000)
})

Cypress.Commands.add('agent_admin_3rd_party_off', () => {
	cy.get(':nth-child(2) > .checkbox').find(":checkbox").uncheck({force: true}).wait(3000)
})

Cypress.Commands.add('agent_admin_3rd_party_enable_or_off_save_buuton', () => {
	cy.get('.settings-booking__action > .button').click().wait(3000)
	cy.reload()
})
