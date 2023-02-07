describe('FlightBooking_Single_Route&Traveler_invoice', () => {
	Cypress.session.clearAllSavedSessions()
	it('should redirect to the correct page', () => {
		cy.session('session_id, remember_token', () => {
			cy.visit_travelapp()

			cy.get('.col-y-bleed > .justify-space-between > :nth-child(3)').then(($body) => {
				if ($body.text().includes('Log in')) {
					cy.travelapp_login()
					cy.travelapp_flight_selection()
				} else {
					cy.travelapp_flight_selection()
				}
			})
			cy.travelapp_flight_select_trip_single()
			cy.travelapp_flight_select_travelers()
			cy.travelapp_flight_origin_start()
			cy.travelapp_flight_destination()
			cy.travelapp_flight_start_date()
			cy.travelapp_flight_search()
			cy.travelapp_flight_single_flight_type()
			cy.travelapp_flight_continue_to_cart()
			cy.travelapp_Your_Cart()
			cy.travelapp_Travelers_Information_mybooking()
			cy.approval_process_pre_process()
			cy.travelapp_Redemption_Vouchers()
			cy.travelapp_next_step_four()
			cy.travelapp_Review_book_continue_to_order()
			cy.approval_process_post_and_pdf_download()
		})
	})
})