describe('visit_URL', () => {
	it('should redirect to the correct page', () => {
		cy.visit_travelapp()
	})
	it('should login', () => {
		cy.get('.col-y-bleed > .justify-space-between > :nth-child(3)').then(($body) => {
			if ($body.text().includes('Log in')) {
				cy.travelapp_login()
				cy.travelapp_car_selection()
			} else {
				cy.travelapp_car_selection()
			}
		})
	})
})

describe('Car Book flow',() =>
{
	it('car Search box by airport', () => {
		cy.Search_by_airport()
		cy.Pick_up_airport()
		cy.Pick_up_date()
		cy.travelapp_car_search()
	})
	it.skip('car Search box by location', () => {
		cy.Search_by_location()
		cy.Pick_up_location()
		cy.Pick_up_date()
		cy.travelapp_car_search()
	})
	it('car result page', () => {
		cy.travelapp_car_result_page()
	})
	it('cart', () => {
		cy.travelapp_Your_Cart()
		cy.travelapp_Travelers_Information_mybooking()
		cy.travelapp_invoice()
	})
	it('should take order ', ()=> {
		cy.travelapp_Review_book_continue_to_order()
		cy.travelapp_order_pdf_download()
		cy.travelapp_back_to_landingpage()
	})

})