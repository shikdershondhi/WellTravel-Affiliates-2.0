
Cypress.Commands.add('visit_travelapp', () => {
	cy.visit('https://wellautotng.staging.welltravel.com/en-GB/')
})

Cypress.Commands.add('travelapp_login', () => {
	cy.contains('Log in').click()
	cy.get(':nth-child(3) > .input > .input__field-holder > .input__field').type('ehatesham@welldev.io')
	cy.get(':nth-child(4) > .input > .input__field-holder > .input__field').type('asdasd123')
	cy.contains('Sign In').click()
})

//=======================common-cart==========================
Cypress.Commands.add('travelapp_flight_continue_to_cart', () => {
	cy.get('.matrix-stepper-control-bar > .button--primary').click().wait(15000)
})

Cypress.Commands.add('travelapp_Your_Cart', () => {
	cy.get('.button--tertiary > :nth-child(2)').click().wait(5000)
})

Cypress.Commands.add('travelapp_Travelers_Information_mybooking', () => {
	cy.get('.button--tertiary > :nth-child(2)').click().wait(4000)

})

// go to CCV for payment section commands

Cypress.Commands.add('travelapp_Review_book_continue_to_order', () => {
	cy.get('.button--tertiary > :nth-child(2)').click().wait(3000)
	cy.get('.book-buttons__button-contents > :nth-child(3) > .button').click().wait(50000)
	cy.get('.stepper__footer > .button > span').click().wait(2000)
})

Cypress.Commands.add('travelapp_order_pdf_download', () => {
	cy.window().document().then(function (doc) {
		doc.addEventListener('click', () => {
			setTimeout(function () { doc.location.reload() }, 5000)
		})
		cy.get('.public-orders-show__actions > .link > .link__content').click()
	})
})
Cypress.Commands.add('travelapp_back_to_landingpage', () => {
	cy.get('.top-nav__book-button > .link > .link__content').click().wait(1000)
})
