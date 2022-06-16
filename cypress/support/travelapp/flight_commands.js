let testData= {}
before(function(){
	cy.fixture('travelapp_dataset.json').as('travelapp_dataset').then(function(data){
		testData.data =data
	})
})
//==========Flight==============
import { times } from 'lodash';

Cypress.Commands.add('travelapp_flight_selection',()=>{
	cy.get('#tab-0').click().wait(2000)
})

Cypress.Commands.add('travelapp_flight_select_trip_single', () => {
	cy.get(':nth-child(1) > .rcl-popover__parent > .search-menu__menu-label > .search-menu__menu-label--icon > .icon > svg').click().wait(2000) // trip selection
	cy.get(':nth-child(1) > [data-testid="wrapperWithoutLink"]').click().wait(1000)  // one way selection
})

Cypress.Commands.add('travelapp_flight_select_travelers', () => {
	cy.get('.search-menu__container--traveller-amount > .rcl-popover__parent > .search-menu__menu-label > .search-menu__menu-label--icon > .icon > svg').click().wait(2000)
	// select travelers
	times(testData.data.travelers, () => {
		cy.get(':nth-child(1) > .quantity-selector > :nth-child(3) > .quantity-selector__icon > .icon > svg > path').should('exist').click().wait(1000)
	})
	cy.get('.search-menu__container--traveller-amount > .rcl-popover__parent > .search-menu__menu-label > .search-menu__menu-label--icon > .icon > svg').click().wait(2000)
})

Cypress.Commands.add('travelapp_flight_origin_start', () => {
	cy.get('.flight-form__right-field > .select-box > .select-box-wrapper > .select-box-container > .select-box__control > .select-box__value-container').click().wait(1000)
	cy.get('#react-select-2-input').type(testData.data.origin).wait(2000)
})

Cypress.Commands.add('travelapp_flight_destination', () => {
	cy.get('.flight-form__left-field > .select-box > .select-box-wrapper > .select-box-container > .select-box__control > .select-box__value-container').click().wait(1000)
	cy.get('#react-select-3-input').type(testData.data.destination).wait(1000)
	cy.get('.search-container').click().wait(2000)
})

Cypress.Commands.add('travelapp_flight_start_date', () => {
	cy.get('.flight-form__right-field > .date-picker > .SingleDatePicker > :nth-child(1) > .SingleDatePickerInput > .SingleDatePickerInput_calendarIcon > .icon > svg').click().wait(2000)
	cy.get('.flight-form__right-field > .date-picker > .SingleDatePicker > :nth-child(1) > .SingleDatePickerInput > .SingleDatePickerInput_clearDate > .SingleDatePickerInput_clearDate_svg > path').click().wait(2000)
	cy.get('body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)').type(testData.data.flightstartdate).wait(2000)
})

Cypress.Commands.add('travelapp_flight_search', () => {
	cy.get('.flight-form__bottom-right-action-bar > .button--primary').click().wait(40000)
})

Cypress.Commands.add('travelapp_flight_single_flight_type', () => {
	cy.get(':nth-child(8) > .card--v2__wrapper > .card__header').click().wait(3000)
	cy.get(':nth-child(1) > .rcl-checkbox').then(($body) => {
		if ($body.text().includes(testData.data.airlineselectout)) {
			cy.get(':nth-child(1) > .rcl-checkbox > .rcl-checkbox__check > .icon > svg').click().wait(4000)
			cy.scrollTo('top',{ensureScrollable: false}).wait(2000)
			cy.get(':nth-child(2) > .flight > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > .flight__services > .button').click().wait(10000)
		} else {
			cy.get(':nth-child(2) > .flight > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > .flight__services > .button').click().wait(10000)
		}
	})
})

Cypress.Commands.add('travelapp_flight_select_farebrand_unknown', () => {
	cy.get('.matrix-content-slider__container > .matrix-card').click().wait(1000)
})
