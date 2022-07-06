let testData= {}
before(function(){
	cy.fixture('travelapp_dataset.json').as('travelapp_dataset').then(function(data){
		testData.data =data
	})
})
let approvertestData= {}
before(function(){
	cy.fixture('./approval_process/approval_process_dataset.json').as('approval_process_dataset').then(function(approverdata){
		approvertestData.approverdata =approverdata
	})
})

//======app=====
Cypress.Commands.add('travelapp_login_approver_one', () => {
	cy.contains('Log in').click()
	cy.get(':nth-child(3) > .input > .input__field-holder > .input__field').type(approvertestData.approverdata.approveroneusrname)
	cy.get(':nth-child(4) > .input > .input__field-holder > .input__field').type(approvertestData.approverdata.approveronepass)
	cy.contains('Sign In').click()
})
//==============pre_process====================



//==============post_process====================
Cypress.Commands.add('approval_process_post_and_pdf_download',()=>{
	cy.get('.account-body > :nth-child(1)').then(($body) => {
		if ($body.text().includes('Start Approval Process')) {
			cy.travelapp_order_pdf_download()
			cy.get('.col-12 > :nth-child(2) > .button').click().wait(1000)
			cy.travelapp_logout()
			cy.travelapp_login_approver_one()
			cy.get('.top-nav__avatar > .rcl-avatar > .rcl-avatar__content > .rcl-avatar__content-initials').click()
			cy.get(':nth-child(1) > [data-testid="wrapperWithLink"]').click().wait(3000)
			cy.get(':nth-child(3) > .link > .link__content').click()
			cy.get('.link__content > .icon-button > .icon-button__icon > .icon > svg').click()
			cy.get('.request__heading-approve-button > .button').scrollIntoView().wait(2000)
			cy.get('.request__heading-approve-button > .button').click()
			cy.travelapp_logout()
			cy.travelapp_login()
			cy.get('.top-nav__avatar > .rcl-avatar > .rcl-avatar__content > .rcl-avatar__content-image').click()
			cy.get(':nth-child(3) > [data-testid="wrapperWithLink"]').click()
			cy.get('.pill-tabs > :nth-child(1) > :nth-child(1) > .rtabs__nav-container > :nth-child(2)').click().wait(100)
			cy.get('.request-list__rtabs > .rtabs > .rtabs__nav > .rtabs__nav-container > :nth-child(2)').click().wait(2000)
			cy.get(':nth-child(1) > .table__field--align-center > .table__field-value > .link > .link__content > .icon-button > .icon-button__icon > .icon > svg').click().wait(1000)
			cy.travelapp_back_to_landingpage()
		} else {
			cy.travelapp_order_pdf_download()
			cy.travelapp_back_to_landingpage()
		}
	})
})