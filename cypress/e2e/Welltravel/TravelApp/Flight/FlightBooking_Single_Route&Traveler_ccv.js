describe('visit_URL', () => {
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
		cy.travelapp_flight_select_trip_single()
		cy.travelapp_flight_select_travelers()
		cy.travelapp_flight_origin_start()
		cy.travelapp_flight_destination()
		cy.travelapp_flight_start_date()
		cy.travelapp_flight_search()
	})
	it('flight result page', () => {
		cy.travelapp_flight_single_flight_type()
		//cy.travelapp_flight_select_farebrand_unknown()
		cy.travelapp_flight_continue_to_cart()
	})
	it('cart', () => {
		//cy.travelapp_Your_Cart_review_item()
		cy.travelapp_Your_Cart()
		cy.travelapp_Travelers_Information_mybooking()
		//cy.travelapp_invoice()
		// cy.travelapp_add_card()
		// cy.travelapp_Add_New_Card_part_one()
		//cy.test_iframe()
		//cy.travelapp_switchToIframe("#\\#welldev-booking-iframe")
		//cy.travelapp_Add_New_Card_part_two()
		cy.travelapp_Review_book_continue_to_order()
	})
})
