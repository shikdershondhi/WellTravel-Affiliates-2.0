let admintestData= {}
before(function(){
	cy.fixture('agent_admin_dataset.json').as('agent_admin_dataset').then(function(admindata){
		admintestData.admindata =admindata
	})
})

let admin_car_testData= {}
before(function(){
	cy.fixture('agent_admin_car_dataset.json').as('agent_admin_car_dataset').then(function(admin_car_data){
		admin_car_testData.admin_car_data =admin_car_data
	})
})
//==========car==============
import { times } from 'lodash';

Cypress.Commands.add('agent_admin_car_selection', () => {
	cy.get('#tab-2').click().wait(2000)
})

Cypress.Commands.add('agent_admin_car_Search_by_location',()=> {
	cy.get('.search-menu__container--location > .rcl-popover__parent > .search-menu__menu-label > .search-menu__menu-label--icon > .icon > svg').click().wait(1000)
	cy.get('.rcl-menu__item > :nth-child(1) > [data-testid="wrapperWithoutLink"]').click().wait(2000)
})

Cypress.Commands.add('agent_admin_car_Pick_up_location',()=>{
	cy.get('.car-form__field--add-padding-right > .location-search-input > .location-search-input__input > .input > .input__field-holder > .input__field').click().wait(1000)
	cy.get('#panel-2 > div > div > div:nth-child(2) > div.col-12.col-sm-6.col-bleed.car-form__field--add-padding-right > div > div > div > div > input').type(admin_car_testData.admin_car_data.agent_admin_car_Pick_up_location).wait(1000)
	cy.get('.car-form__specifier-container').click().wait(2000)
})

Cypress.Commands.add('agent_admin_car_Search_by_airport',()=> {
	cy.get('.search-menu__container--location > .rcl-popover__parent > .search-menu__menu-label > .search-menu__menu-label--icon > .icon > svg').click().wait(1000)
	cy.get('.rcl-menu__item > :nth-child(2) > [data-testid="wrapperWithoutLink"]').click().wait(2000)
})

Cypress.Commands.add('agent_admin_car_Pick_up_airport',()=>{
	cy.get('.car-form__field--add-padding-right > .select-box > .select-box-wrapper > .select-box-container > .select-box__control > .select-box__value-container').type(admin_car_testData.admin_car_data.agent_admin_car_Pick_up_airport).wait(1000)
	cy.get(':nth-child(2) > .car-form__field--add-padding-left > .select-box > .select-box-wrapper > .select-box-container > .select-box__control > .select-box__value-container').click()
})

Cypress.Commands.add('agent_admin_car_driver_age',()=>{
	cy.get('.search-menu__container--drivers-age > .rcl-popover__parent > .search-menu__menu-label > .search-menu__menu-label--icon > .icon > svg').click().wait(1000)
	cy.get('.input__clear-icon > .icon-button > .icon-button__icon > .icon > svg > path').click().wait(1000)
	cy.get('.col-12 > .input > .input__field-holder > .input__field').type(admin_car_testData.admin_car_data.agent_admin_car_driver_age).wait(2000)
})

Cypress.Commands.add('agent_admin_car_Pick_up_date',()=>{
	cy.get(':nth-child(3) > .car-form__field--add-padding-right > .date-picker > .SingleDatePicker > :nth-child(1) > .SingleDatePickerInput > .SingleDatePickerInput_clearDate > .SingleDatePickerInput_clearDate_svg').click().wait(100)
	cy.get(':nth-child(3) > .car-form__field--add-padding-right').click().wait(1000)
	cy.get(':nth-child(3) > .car-form__field--add-padding-right').type(admin_car_testData.admin_car_data.agent_admin_car_Pick_up_date).wait(1000)
})

Cypress.Commands.add('agent_admin_car_Channels_amadeus',()=>{
	cy.get('.col-grid > .checkbox > .checkbox__check').click().wait(1000)
	cy.get('.search-accounts__account > .checkbox > .checkbox__check').click().wait(2000)
})

Cypress.Commands.add('agent_admin_car_search', () => {
	cy.get('.hotel-form__field--add-padding-left > .button').click().wait(80000)
})

Cypress.Commands.add('agent_admin_car_result_page', () => {
	cy.get(':nth-child(1) > .car-result-card__vendor-line > .car-result-card__select-button > .button > span').click().wait(5000)
})

Cypress.Commands.add('agent_admin_car_Travelers_Information_booking', () => {
	cy.get('.traveler-search-form__search-traveler-header-search-bar > .input > .input__field-holder > .input__field').click().wait(1000)
	cy.get('.traveler-search-form__search-traveler-header-search-bar > .input > .input__field-holder > .input__field').type(admin_car_testData.admin_car_data.agent_admin_car_Travelers_Information_booking).wait(15000)
	cy.get('.radio__check > .icon > svg').click().wait(4000)
	cy.get('.button--tertiary > :nth-child(2)').should('be.visible').click().wait(4000)
})