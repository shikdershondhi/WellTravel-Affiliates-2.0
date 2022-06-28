let admintestData= {}
before(function(){
	cy.fixture('agent_admin_dataset.json').as('agent_admin_dataset').then(function(admindata){
		admintestData.admindata =admindata
	})
})

let admin_flight_testData= {}
before(function(){
	cy.fixture('agent_admin_flight_dataset.json').as('agent_admin_flight_dataset').then(function(admin_flight_data){
		admin_flight_testData.admin_flight_data =admin_flight_data
	})
})
//==========Flight==============
import { times } from 'lodash';
Cypress.Commands.add('agent_admin_flight_selection',()=>{
	cy.get('#tab-0').click().wait(2000)
})

Cypress.Commands.add('agent_admin_flight_select_trip_single', () => {
	cy.get(':nth-child(1) > .rcl-popover__parent > .search-menu__menu-label > .search-menu__menu-label--icon > .icon > svg').click().wait(2000) // trip selection
	cy.get('.rcl-menu__item > :nth-child(1) > [data-testid="wrapperWithoutLink"]').click().wait(1000)  // one way selection
})

Cypress.Commands.add('agent_admin_flight_select_travelers', () => {
	cy.get('.search-menu__container--traveller-amount > .rcl-popover__parent > .search-menu__menu-label > .search-menu__menu-label--icon > .icon > svg').click().wait(2000)
	// select travelers
	times( admin_flight_testData.admin_flight_data.agent_admin_flight_select_travelers, () => {
		cy.get(':nth-child(1) > .quantity-selector > :nth-child(3) > .quantity-selector__icon > .icon > svg > path').should('exist').click().wait(1000)
	})
	cy.get('.search-menu__container--traveller-amount > .rcl-popover__parent > .search-menu__menu-label > .search-menu__menu-label--icon > .icon > svg').click().wait(2000)
})

Cypress.Commands.add('agent_admin_flight_origin_start', () => {
	cy.get(':nth-child(1) > :nth-child(1) > .select-box > .select-box-wrapper > .select-box-container > .select-box__control > .select-box__value-container').click().wait(1000)
	cy.get('#react-select-6-input').type(admin_flight_testData.admin_flight_data.agent_admin_flight_origin_start).wait(2000)
})

Cypress.Commands.add('agent_admin_flight_destination', () => {
	cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .select-box > .select-box-wrapper > .select-box-container > .select-box__control > .select-box__value-container').click().wait(1000)
	cy.get('#react-select-7-input').type(admin_flight_testData.admin_flight_data.agent_admin_flight_destination).wait(2000)
})

Cypress.Commands.add('agent_admin_flight_start_date', () => {
	cy.get('.SingleDatePickerInput_calendarIcon > .icon > svg').click().wait(2000)
	cy.get('.SingleDatePickerInput_clearDate_svg').click().wait(2000)
	cy.get('.flight-form__advanced-trip-container > :nth-child(1) > :nth-child(1) > :nth-child(3)').type(admin_flight_testData.admin_flight_data.agent_admin_flight_start_date).wait(2000)
})

Cypress.Commands.add('agent_admin_flight_Channels_amadeus',()=>{
	cy.get('.search-accounts > .col-grid > .checkbox > .checkbox__check').click().wait(1000)
	cy.get('.amadeus-settings > .search-accounts__account > .checkbox > .checkbox__check').click().wait(2000)
})

Cypress.Commands.add('agent_admin_flight_Channels_LHGroup',()=>{
	cy.get('.search-accounts > .col-grid > .checkbox > .checkbox__check').click().wait(1000)
	cy.get('.lh_group-settings > .search-accounts__account > .checkbox > .checkbox__check').click().wait(2000)
})

Cypress.Commands.add('agent_admin_flight_search', () => {
	cy.get('.flight-form__bottom-right-action-bar > .button--primary').click().wait(40000)
})

Cypress.Commands.add('agent_admin_flight_single_flight_type', () => {
	cy.get(':nth-child(8) > .card--v2__wrapper > .card__header').click().wait(3000)
	cy.get(':nth-child(1) > .rcl-checkbox').then(($body) => {
		if ($body.text().includes(admin_flight_testData.admin_flight_data.agent_admin_flight_single_flight_type)) {
			cy.get(':nth-child(1) > .rcl-checkbox > .rcl-checkbox__check > .icon > svg').click().wait(4000)
			cy.scrollTo('top',{ensureScrollable: false}).wait(2000)
			cy.get(':nth-child(2) > .flight > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > .flight__services > .button').click().wait(10000)
		} else {
			cy.get(':nth-child(2) > .flight > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > .flight__services > .button').click().wait(10000)
		}
	})
})

Cypress.Commands.add('agent_admin_flight_select_farebrand_unknown', () => {
	cy.get('.matrix-channel-row > .matrix-content-slider > .matrix-content-slider__container').click().wait(1000)
})

Cypress.Commands.add('agent_admin_flight_continue_to_cart', () => {
	cy.get('.matrix-stepper__footer > :nth-child(1) > .matrix-stepper-control-bar > .button--primary').click().wait(15000)
})

Cypress.Commands.add('agent_admin_flight_Travelers_Information_booking', () => {
	cy.get('.traveler-search-form__search-traveler-header-search-bar > .input > .input__field-holder > .input__field').click().wait(1000)
	cy.get('.traveler-search-form__search-traveler-header-search-bar > .input > .input__field-holder > .input__field').type(admin_flight_testData.admin_flight_data.agent_admin_flight_Travelers_Information_booking).wait(15000)
	cy.get('.radio__check > .icon > svg').click().wait(4000)
	cy.get('.button--tertiary > :nth-child(2)').should('be.visible').click().wait(4000)
})