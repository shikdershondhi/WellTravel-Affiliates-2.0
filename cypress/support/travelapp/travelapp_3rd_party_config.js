//===============paygate====================

Cypress.Commands.add('paygate_ccv',()=>{
	cy.get('#testAlert > .modal-dialog > .modal-content > .modal-footer > .btn').click().wait(3000)
	cy.get('#ccName').type('shikder shondhi').wait(2000)
	cy.get('#ccNumber').type('4000000000000002').wait(2000)
	cy.get('#ccOpMonth').select('02').wait(2000)
	cy.get('#ccOpYear').select('2023').wait(2000)
	cy.get('#ccCvv').type('234').wait(2000)
})

Cypress.Commands.add('alart',()=>{
	if(window.top.Cypress){
		cy.get('#nextBtn').click().wait(30000)
		cy.on('', (alr)=>{
			expect(alr).to.equal('Please note that this is a test transaction. This alert does not appear when a LIVE PayGate ID is used.')
			cy.get('#alrrtButton').click();
			cy.on('window:confirm', () => true)
			cy.get('#result').should('have.text', 'You clicked: Ok')
			cy.wait(3333)
			cy.get(':nth-child(4) > :nth-child(2) > b > input').click().wait(50000)
		})
	}
})

//Please note that this is a test transaction. This alert does not appear when a LIVE PayGate ID is used.