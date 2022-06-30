describe('Visit Travelapp', () => {
	it('should redirect to the correct page', () => {
		cy.visit_travelapp()
	})
	it('should login', () => {
		cy.get('.col-y-bleed > .justify-space-between > :nth-child(3)').then(($body) => {
			if ($body.text().includes('Log in')) {
				cy.travelapp_login()
				cy.travelapp_hotel_selection()
			} else {
				cy.travelapp_hotel_selection()
			}
		})
	})
})
describe('hotel Book flow', ()=>{

	it('Search hotel box', () => {
		cy.travelapp_hotel_room_selection()
		cy.travelapp_hotel_traveler_selection_adults()
		cy.travelapp_hotel_traveler_selection_children()
		cy.travelapp_hotel_location()
		cy.travelapp_hotel_checkin()
		cy.travelapp_hotel_checkout()
		cy.travelapp_hotel_search()
	})

	it('hotel result page', ()=> {
		cy.travelapp_hotel_results()
		cy.travelapp_hotel_select_room()
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