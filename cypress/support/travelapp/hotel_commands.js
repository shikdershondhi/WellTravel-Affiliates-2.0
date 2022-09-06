let testData= {}
before(function(){
	cy.fixture('travelapp_dataset.json').as('travelapp_dataset').then(function(traveldata){
		testData.traveldata =traveldata
	})
})
let hoteltestData= {}
before(function(){
	cy.fixture('hotel_dataset.json').as('hotel_dataset').then(function(hoteldata){
		hoteltestData.hoteldata =hoteldata
	})
})
//=======================hotel===========================

import { times } from 'lodash';

Cypress.Commands.add('travelapp_hotel_selection', () => {
	cy.get('#tab-1').click().wait(2000)
})

Cypress.Commands.add('travelapp_hotel_room_selection', () => {
	cy.get('.search-menu__container--rooms > .rcl-popover__parent > .search-menu__menu-label > .search-menu__menu-label--icon > .icon > svg').click().wait(2000)
	// select rooms
	times(0, () => {
		cy.get(':nth-child(3) > .quantity-selector__icon > .icon > svg > path').should('exist').click().wait(1000)
	})
	cy.get('.search-menu__container--rooms > .rcl-popover__parent > .search-menu__menu-label > .search-menu__menu-label--icon > .icon > svg').click().wait(2000)
})

Cypress.Commands.add('travelapp_hotel_traveler_selection_adults', () => {
	cy.get('.search-menu__container--travellers > .rcl-popover__parent > .search-menu__menu-label > .search-menu__menu-label--icon > .icon > svg').click().wait(2000)
	// select traveler Adults
	times(hoteltestData.hoteldata.travelapp_hotel_traveler_selection_adults, () => {
		cy.get('.search-menu-item__specifier--add-padding-bottom > .quantity-selector > :nth-child(3) > .quantity-selector__icon > .icon > svg > path').should('exist').click().wait(1000)
	})
	cy.get('.search-menu__container--travellers > .rcl-popover__parent > .search-menu__menu-label > .search-menu__menu-label--icon > .icon > svg').click().wait(2000)
})

Cypress.Commands.add('travelapp_hotel_traveler_selection_children', () => {
	cy.get('.search-menu__container--travellers > .rcl-popover__parent > .search-menu__menu-label > .search-menu__menu-label--icon > .icon > svg').click().wait(2000)
	// select traveler Children
	times(hoteltestData.hoteldata.travelapp_hotel_traveler_selection_children, () => {
		cy.get(':nth-child(2) > .quantity-selector > :nth-child(3) > .quantity-selector__icon').should('exist').click().wait(1000)
	})
	cy.get('.search-menu__container--travellers > .rcl-popover__parent > .search-menu__menu-label > .search-menu__menu-label--icon > .icon > svg').click().wait(2000)
})

Cypress.Commands.add('travelapp_hotel_location', () => {
	cy.get('.location-search-input__input > .input > .input__field-holder > .input__field').click().wait(1000)
	cy.get('.location-search-input__input > .input > .input__field-holder > .input__field').type(hoteltestData.hoteldata.travelapp_hotel_location).wait(3000)
	cy.get('.hotel-form__specifier-container').click().wait(3000)
})

Cypress.Commands.add('travelapp_hotel_checkin', () => {
	cy.get('.hotel-form__field--add-padding-right > .date-picker > .SingleDatePicker > :nth-child(1) > .SingleDatePickerInput > .SingleDatePickerInput_calendarIcon > .icon > svg').click().wait(1000)
	cy.get('.hotel-form__field--add-padding-right > .date-picker > .SingleDatePicker > :nth-child(1) > .SingleDatePickerInput > .SingleDatePickerInput_clearDate > .SingleDatePickerInput_clearDate_svg').click().wait(1000)
	cy.get('body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)').type(hoteltestData.hoteldata.travelapp_hotel_checkin).wait(2000)
})

Cypress.Commands.add('travelapp_hotel_checkout', () => {
	cy.get('.hotel-form__field--add-padding-left > .date-picker > .SingleDatePicker > :nth-child(1) > .SingleDatePickerInput > .SingleDatePickerInput_calendarIcon > .icon > svg').click().wait(1000)
	cy.get('.hotel-form__field--add-padding-left > .date-picker > .SingleDatePicker > :nth-child(1) > .SingleDatePickerInput > .SingleDatePickerInput_clearDate > .SingleDatePickerInput_clearDate_svg').click().wait(1000)
	cy.get('body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)').type(hoteltestData.hoteldata.travelapp_hotel_checkout).wait(2000)
	cy.get('.hotel-form__specifier-container').click().wait(1000)
})

Cypress.Commands.add('travelapp_hotel_search', () => {
	cy.get('.hotel-form__field--add-padding-left > .button').click().wait(100000)
})

Cypress.Commands.add('travelapp_hotel_results', () => {
	cy.get(':nth-child(1) > .card--v2__wrapper > :nth-child(1) > .card__body-section > .hotel-result__wrapper > :nth-child(1) > .hotel-result__middle > .grid > .col-lg-4 > .col-xlg-5 > a > .button').click().wait(15000)
})

Cypress.Commands.add('travelapp_hotel_select_room', () => {
	cy.get(':nth-child(1) > .card > .card--v2__wrapper > :nth-child(1) > .card__body-section > .hotel-rooms__room-card-wrapper > .hotel-rooms__room-action > .button').click().wait(2000)
})