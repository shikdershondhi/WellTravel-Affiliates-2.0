let testData= {}
before(function(){
	cy.fixture('travelapp_dataset.json').as('travelapp_dataset').then(function(traveldata){
		testData.traveldata =traveldata
	})
})
let cartestData= {}
before(function(){
	cy.fixture('car_dataset.json').as('car_dataset').then(function(cardata){
		cartestData.cardata =cardata
	})
})
//=======================car===========================

import { times } from 'lodash';

Cypress.Commands.add('travelapp_car_selection', () => {
	cy.get('#tab-2').click().wait(2000)
})

Cypress.Commands.add('Search_by_location',()=> {
	cy.get('.search-menu__container--location > .rcl-popover__parent > .search-menu__menu-label > .search-menu__menu-label--icon > .icon > svg').click().wait(1000)
	cy.get(':nth-child(1) > [data-testid="wrapperWithoutLink"]').click().wait(2000)
})

Cypress.Commands.add('Pick_up_location',()=>{
	cy.get('.car-form__field--add-padding-right > .location-search-input > .location-search-input__input > .input > .input__field-holder > .input__field').click().wait(1000)
	cy.get('#panel-2 > div > div > div:nth-child(2) > div.col-12.col-sm-6.col-bleed.car-form__field--add-padding-right > div > div > div > div > input').type(cartestData.cardata.Pick_up_location).wait(1000)
	cy.get('.search-container').click().wait(2000)
})

Cypress.Commands.add('Search_by_airport',()=> {
	cy.get('.search-menu__container--location > .rcl-popover__parent > .search-menu__menu-label > .search-menu__menu-label--icon > .icon > svg').click().wait(1000)
	cy.get(':nth-child(2) > [data-testid="wrapperWithoutLink"]').click().wait(2000)
})

Cypress.Commands.add('Pick_up_airport',()=>{
	cy.get('.car-form__field--add-padding-right > .select-box > .select-box-wrapper > .select-box-container > .select-box__control > .select-box__value-container').type(cartestData.cardata.Pick_up_airport).wait(1000)
	cy.get(':nth-child(2) > .car-form__field--add-padding-left > .select-box > .select-box-wrapper > .select-box-container > .select-box__control > .select-box__value-container').click()
})

Cypress.Commands.add('Pick_up_date',()=>{
	cy.get(':nth-child(3) > .car-form__field--add-padding-right > .date-picker > .SingleDatePicker > :nth-child(1) > .SingleDatePickerInput > .SingleDatePickerInput_clearDate > .SingleDatePickerInput_clearDate_svg').click().wait(100)
	cy.get('body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)').click().wait(1000)
	cy.get('body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)').type(cartestData.cardata.Pick_up_date).wait(1000)
})

Cypress.Commands.add('travelapp_car_search', () => {
	cy.get('.hotel-form__field--add-padding-left > .button').click().wait(80000)
})

Cypress.Commands.add('travelapp_car_result_page', () => {
	cy.get(':nth-child(1) > .car-result-card__vendor-line > .car-result-card__select-button > .button > span').click().wait(5000)
})