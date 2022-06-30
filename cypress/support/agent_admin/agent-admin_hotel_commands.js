let admintestData= {}
before(function(){
	cy.fixture('agent_admin_dataset.json').as('agent_admin_dataset').then(function(admindata){
		admintestData.admindata =admindata
	})
})

let admin_hotel_testData= {}
before(function(){
	cy.fixture('agent_admin_hotel_dataset.json').as('agent_admin_hotel_dataset').then(function(admin_hotel_data){
		admin_hotel_testData.admin_hotel_data =admin_hotel_data
	})
})
//==========Hotel==============
import { times } from 'lodash';
Cypress.Commands.add('agent_admin_hotel_selection',()=>{
	cy.get('#tab-1').click().wait(2000)
})

Cypress.Commands.add('agent_admin_hotel_select_room', () => {
	cy.get('.search-menu__container--rooms > .rcl-popover__parent > .search-menu__menu-label > .search-menu__menu-label--icon > .icon > svg').click().wait(2000) // room selection open
	// select rooms
	times(admin_hotel_testData.admin_hotel_data.agent_admin_hotel_select_room, () => {
		cy.get(':nth-child(3) > .quantity-selector__icon > .icon > svg > path').should('exist').click().wait(1000)
	})
	cy.get('.search-menu__container--rooms > .rcl-popover__parent > .search-menu__menu-label > .search-menu__menu-label--icon > .icon > svg').click().wait(2000) // room selection exit
})

Cypress.Commands.add('agent_admin_hotel_select_travelers', () => {
	cy.get('.search-menu__container--travellers > .rcl-popover__parent > .search-menu__menu-label > .search-menu__menu-label--icon > .icon > svg').click().wait(2000) // traveler selection open
	// select travelers
	times(admin_hotel_testData.admin_hotel_data.agent_admin_hotel_select_travelers_adults, () => {
		cy.get('.search-menu-item__specifier--add-padding-bottom > .quantity-selector > :nth-child(3) > .quantity-selector__icon > .icon > svg > path').should('exist').click().wait(1000)
	})
	times(admin_hotel_testData.admin_hotel_data.agent_admin_hotel_select_travelers_children, () => {
		cy.get(':nth-child(2) > .quantity-selector > :nth-child(3) > .quantity-selector__icon > .icon > svg > path').should('exist').click().wait(1000)
	})
	cy.get('.search-menu__container--travellers > .rcl-popover__parent > .search-menu__menu-label > .search-menu__menu-label--icon > .icon > svg').click().wait(2000)
})

Cypress.Commands.add('agent_admin_hotel_location', () => {
	cy.get('.location-search-input__input > .input > .input__field-holder > .input__field').click().wait(1000)
	cy.get('.location-search-input__input > .input > .input__field-holder > .input__field').type(admin_hotel_testData.admin_hotel_data.agent_admin_hotel_location).type('{enter}').wait(2000)
	cy.get('.hotel-form__specifier-container').click().wait(100)
})

Cypress.Commands.add('agent_admin_hotel_checkin', () => {
	cy.get('.hotel-form__field--add-padding-right > .date-picker > .SingleDatePicker > :nth-child(1) > .SingleDatePickerInput > .SingleDatePickerInput_clearDate > .SingleDatePickerInput_clearDate_svg > path').click().wait(1000)
	cy.get('.hotel-form__field--add-padding-right > .date-picker > .SingleDatePicker > :nth-child(1) > .SingleDatePickerInput').type(admin_hotel_testData.admin_hotel_data.agent_admin_hotel_checkin).wait(2000)
})

Cypress.Commands.add('agent_admin_hotel_checkout', () => {
	cy.get('.hotel-form__field--add-padding-left > .date-picker > .SingleDatePicker > :nth-child(1) > .SingleDatePickerInput > .SingleDatePickerInput_clearDate > .SingleDatePickerInput_clearDate_svg > path').click().wait(2000)
	cy.get('.hotel-form__field--add-padding-left > .date-picker > .SingleDatePicker > :nth-child(1) > .SingleDatePickerInput').type(admin_hotel_testData.admin_hotel_data.agent_admin_hotel_checkout).wait(2000)
	cy.get('.hotel-form__specifier-container').click().wait(100)
})

Cypress.Commands.add('agent_admin_hotel_Channels_amadeus',()=>{
	cy.get('.col-grid > .checkbox > .checkbox__check').click().wait(1000)
	cy.get('.search-accounts__account > .checkbox > .checkbox__check').click().wait(2000)
})

Cypress.Commands.add('agent_admin_hotel_search', () => {
	cy.get('.hotel-form__field--add-padding-left > .button').click().wait(80000)
})

Cypress.Commands.add('agent_admin_hotel_select_room', () => {
	cy.get(':nth-child(1) > .card--v2__wrapper > :nth-child(1) > .card__body-section > .hotel-result__wrapper > :nth-child(1) > .hotel-result__middle > .grid > .col-lg-4 > .col-xlg-5 > a > .button').click().wait(8000)
	cy.get(':nth-child(1) > .card > .card--v2__wrapper > :nth-child(1) > .card__body-section > .hotel-rooms__room-card-wrapper > .hotel-rooms__room-action > .button').scrollIntoView().wait(5000)
	cy.get(':nth-child(1) > .card > .card--v2__wrapper > :nth-child(1) > .card__body-section > .hotel-rooms__room-card-wrapper > .hotel-rooms__room-action > .button').click().wait(5000)
})

Cypress.Commands.add('agent_admin_hotel_Travelers_Information_booking', () => {
	cy.get('.traveler-search-form__search-traveler-header-search-bar > .input > .input__field-holder > .input__field').click().wait(1000)
	cy.get('.traveler-search-form__search-traveler-header-search-bar > .input > .input__field-holder > .input__field').type(admin_hotel_testData.admin_hotel_data.agent_admin_hotel_Travelers_Information_booking).wait(15000)
	cy.get('.radio__check > .icon > svg').click().wait(4000)
	cy.get('.button--tertiary > :nth-child(2)').should('be.visible').click().wait(4000)
})
