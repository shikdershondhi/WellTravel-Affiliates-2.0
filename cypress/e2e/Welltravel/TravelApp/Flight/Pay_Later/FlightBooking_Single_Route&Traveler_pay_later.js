describe('visit_URL', () => {
	it('should redirect to the correct page', () => {
		cy.visit_travelapp()
	})
	it('should login', () => {
		cy.get('.col-y-bleed > .justify-space-between > :nth-child(3)').then(($body) => {
			if ($body.text().includes('Log in')) {
				cy.travelapp_login()
				cy.travelapp_flight_selection()
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
		cy.travelapp_flight_continue_to_cart()
	})
	it('cart', () => {
		cy.travelapp_Your_Cart()
		cy.travelapp_Travelers_Information_mybooking()
	})
	it('approval process & payment system ', ()=> {
		cy.approval_process_pre_process_pay_later()
		cy.travelapp_Redemption_Vouchers()
		cy.travelapp_next_step_four()
	})
	it('should take order ', ()=> {
		cy.travelapp_Review_book_continue_to_order()
	})
	it('approval process post-process ', ()=> {
		cy.approval_process_post_and_pdf_download()
	})

})