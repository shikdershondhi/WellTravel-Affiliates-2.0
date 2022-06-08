describe('visit', () => {
	it('should redirect to the correct page', () => {
		cy.visit_travelapp()
	})
	it('should login ', () => {
		cy.login('user', { cacheSession: false })
	});
})
describe('flight Book flow',() =>
{
	it('Search box', () => {
		cy.select_trip()
		cy.select_travelers()
		cy.origin_start()
		cy.destination()
		cy.start_date()
		cy.search()
	})
	it('flight result page', () => {
		cy.single_flight_type()
		cy.select_farebrand_unknown()
		cy.continue_to_cart()
	});
	it('cart', () => {
		cy.Your_Cart()
		cy.Travelers_Information_mybooking()
		cy.invoice()
		cy.Review_book_continue_to_order()
	});
})