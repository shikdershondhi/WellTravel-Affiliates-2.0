describe('visit', () => {
	it('should redirect to the correct page', () => {
		cy.visit_travelapp()
	})
	it('should login', () => {
		cy.get('.col-y-bleed > .justify-space-between > :nth-child(3)').then(($body) => {
			if ($body.text().includes('Log in')) {
				cy.travelapp_login()
			} else {
				cy.travelapp_flight_selection()
			}
		})
	})
})
describe('flight Book flow',() =>
{
	it('Search box', () => {
		cy.travelapp_select_trip()
		cy.travelapp_select_travelers()
		cy.travelapp_origin_start()
		cy.travelapp_destination()
		cy.travelapp_start_date()
		cy.travelapp_search()
	})
	it('flight result page', () => {
		cy.travelapp_single_flight_type()
		cy.travelapp_select_farebrand_unknown()
		cy.travelapp_continue_to_cart()
	})
	it('cart', () => {
		cy.travelapp_Your_Cart()
		cy.travelapp_Travelers_Information_mybooking()
		cy.travelapp_invoice()
		cy.travelapp_Review_book_continue_to_order()
	})
})