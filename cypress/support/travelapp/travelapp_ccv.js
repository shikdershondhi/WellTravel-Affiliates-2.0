import 'cypress-iframe'

//==============invoice================
Cypress.Commands.add('travelapp_invoice', () => {
	cy.get(':nth-child(2) > .paymentsidebar__option-right > .radio > .radio__check').click().wait(3000)
	cy.get('.button--tertiary > :nth-child(2)').click().wait(3000)
})

Cypress.Commands.add('travelapp_Add_Payment_Later', () => {
	cy.get(':nth-child(1) > .paymentsidebar__option-right > .radio > .radio__check').click().wait(3000)
	cy.get('.button--tertiary > :nth-child(2)').click().wait(3000)
})
//============== CCV================
Cypress.Commands.add('travelapp_add_card', () => {
	cy.get('.credit-card__add-cc-link').click().wait(2000)
})

Cypress.Commands.add('travelapp_Add_New_Card_part_one', () => {
	cy.get('.credit-card-details__field-street > .input > .input__field-holder > .input__field').type('Kemal Ataturk Avenue 28 & 30').wait(1000) //street
	cy.get('.credit-card-details__field-city > .input > .input__field-holder > .input__field').type('banani').wait(1000) //city
	cy.get('.credit-card-details__field-state > .input > .input__field-holder > .input__field').type('Dhaka').wait(2000) //state
	cy.get('.select-box__value-container').click().wait(2000) //country
	cy.get('.select-box__value-container').type('Bangladesh{enter}').wait(1000) //country
	cy.get('.credit-card-details__field-zip-code > .input > .input__field-holder > .input__field').click().wait(1000) //zip_code
	cy.get('.credit-card-details__field-zip-code > .input > .input__field-holder > .input__field').type('1230').wait(1000) //zip_code
	cy.get('.credit-card-details__buttons > .button--primary').click().wait(3000)// next button
})

Cypress.Commands.add('travelapp_switchToIframe', iframe => {
	return cy
		.get(iframe)
		.its(`0.contentDocument.body`)
		.should(`be.visible`)
		.then(cy.wrap)
})

Cypress.Commands.add('test_iframe',()=>{
	cy.frameLoaded('#\\#welldev-booking-iframe')
	cy.frameLoaded('#\\#welldev-booking-iframe', { url: '/join' })
})

Cypress.Commands.add('travelapp_Add_New_Card_part_two', () => {
	cy.iframe().find('document.querySelector("#fullname")').should('be.visible').click().wait(1000)
	cy.iframe().find('document.querySelector("#fullname")').should('be.visible').type('shikder shondhi').wait(1000)
})
