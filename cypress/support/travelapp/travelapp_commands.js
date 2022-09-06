let testData= {}
before(function(){
	cy.fixture('travelapp_dataset.json').as('travelapp_dataset').then(function(data){
		testData.data =data
	})
})
Cypress.Commands.add('visit_travelapp', () => {

	cy.visit(testData.data.visitsite)
})

Cypress.Commands.add('travelapp_login', () => {
	cy.contains('Log in').click()
	cy.get(':nth-child(3) > .input > .input__field-holder > .input__field').type(testData.data.email)
	cy.get(':nth-child(4) > .input > .input__field-holder > .input__field').type(testData.data.password)
	cy.contains('Sign In').click()
})
Cypress.Commands.add('travelapp_logout', () => {
	cy.get('.top-nav__avatar > .rcl-avatar').click().wait(1000)
	cy.get(':nth-child(7) > [data-testid="wrapperWithLink"]').click({force: true}).wait(1000)
})

//=======================common-cart==========================
Cypress.Commands.add('travelapp_Your_Cart', () => {

	cy.get('.col-lg-8').then(($body) => {
		if ($body.text().includes('Review Item')) {
			cy.get('.alert__content-text > .col-grid > .button').click().wait(3000)
			cy.get('.item__actions-confirm-button > .button > span').click({ multiple: true }).wait(20000)
			cy.scrollTo('top',{ensureScrollable: false}).wait(2000)
			cy.get('.button--tertiary > :nth-child(2)').click().wait(5000)
		} else {
			cy.get('.button--tertiary > :nth-child(2)').click().wait(5000)
		}
	})
})

Cypress.Commands.add('travelapp_Travelers_Information_mybooking', () => {
	cy.get('.button--tertiary > :nth-child(2)').click().wait(4000)
})

// go to CCV for payment section commands

Cypress.Commands.add('travelapp_Redemption_Vouchers',()=>{
	cy.get('.col-4 > .input > .input__field-holder > .input__field').wait(1000).type(testData.data.redemptionvouchers).wait(2000)
})


Cypress.Commands.add('travelapp_Review_book_continue_to_order', () => {

	cy.get('.col-12.review-cart-item').then(($body) => {
		if ($body.text().includes('Terms and Conditions')) {
			cy.get('.checkbox__check').click().wait(2000)
			cy.get('.book-buttons__button-contents > :nth-child(3) > .button').click().wait(50000)
			cy.get('.stepper__footer > .button > span').click().wait(2000)
		} else {
			cy.get('.book-buttons__button-contents > :nth-child(3) > .button').click().wait(50000)
			cy.get('.stepper__footer > .button > span').click().wait(5000)
		}
	})
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

