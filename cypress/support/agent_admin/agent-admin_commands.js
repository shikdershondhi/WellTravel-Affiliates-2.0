let admintestData= {}
before(function(){
	cy.fixture('agent_admin_dataset.json').as('agent_admin_dataset').then(function(admindata){
		admintestData.admindata =admindata
	})
})
let admin_flight_testData= {}
before(function(){
	cy.fixture('agent_admin_flight_dataset.json').as('agent_admin_flight_dataset').then(function(admin_flight_data){
		admin_flight_testData.admin_flight_data =admin_flight_data
	})
})
//========================visit&login=======================
Cypress.Commands.add('visit_agent_admin', () => {
	cy.visit(admintestData.admindata.visitsiteadmin)
})

Cypress.Commands.add('agent_admin_login', () => {
	cy.get('#username').type(admintestData.admindata.email)
	cy.get('#password').type(admintestData.admindata.password)
	cy.get('#kc-login').click()
})
//===========================common-cart============================
Cypress.Commands.add('agent_admin_Your_Cart', () => {

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

//===== go to ccv ============
Cypress.Commands.add('agent_admin_Review_book_continue_to_order', () => {

	cy.get('.col-12.review-cart-item').then(($body) => {
		if ($body.text().includes('Terms and Conditions')) {
			cy.get('.checkbox__check').click().wait(2000)
			cy.get('.base-modal__link > .button').click().wait(2000)
			cy.get('.book-button__button > .button').click().wait(2000)
			cy.get(':nth-child(3) > .book-buttons__modal-button > .button').click().wait(50000)
			cy.get('.stepper__footer > .button > span').click().wait(3000)
		} else {
			cy.get('.base-modal__link > .button').click().wait(2000)
			cy.get('.book-button__button > .button').click().wait(2000)
			cy.get(':nth-child(3) > .book-buttons__modal-button > .button').click().wait(50000)
			cy.get('.stepper__footer > .button > span').click().wait(3000)
		}
	})
})

Cypress.Commands.add('agent_admin_order_page', () => {
	cy.get('.breadcrumbs > :nth-child(1) > a').click().wait(2000)
})
Cypress.Commands.add('agent_admin_back_to_landingpage', () => {
	cy.get('.side-nav__button > .icon > svg').wait(1000).click()
})