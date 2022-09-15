//===============paygate====================

Cypress.Commands.add('paygate_ccv',()=>{
	cy.get('#testAlert > .modal-dialog > .modal-content > .modal-footer > .btn').click().wait(3000)
	cy.get('#ccName').type('shikder shondhi').wait(2000)
	cy.get('#ccNumber').type('4000000000000002').wait(2000)
	cy.get('#ccOpMonth').select('02').wait(2000)
	cy.get('#ccOpYear').select('2023').wait(2000)
	cy.get('#ccCvv').type('234').wait(2000)
	cy.get('#nextBtn').click().wait(30000)
	cy.get(':nth-child(4) > :nth-child(2) > b > input').click().wait(50000)
})

Cypress.Commands.add('alart',()=>{
		cy.on('window:alert', (alr)=>{
			cy.get('Button').click();
			expect(alr).to.contains('Please note that this is a test transaction. This alert does not appear when a LIVE PayGate ID is used.')
			cy.on('window:confirm', () => true)
			cy.get('#result').should('have.text', 'You clicked: Ok')
			cy.wait(3333)
			cy.get(':nth-child(4) > :nth-child(2) > b > input').click().wait(50000)
		})
})

//Please note that this is a test transaction. This alert does not appear when a LIVE PayGate ID is used.

//====================payfast=========================

Cypress.Commands.add('confirm_pay_payfast',()=>{
	cy.get('#pay-with-wallet').click().wait(30000)
})