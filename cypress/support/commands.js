import { times } from 'lodash';
Cypress.Commands.add('visit_travelapp', () => {
	cy.visit('https://wellautotng.staging.welltravel.com/en-GB/')
})
Cypress.Commands.add('login', (name, { cacheSession = true } = {}) => {
	const login = () => {
		cy.contains('Log in').click()
		cy.get(':nth-child(3) > .input > .input__field-holder > .input__field').type('ehatesham@welldev.io')
		cy.get(':nth-child(4) > .input > .input__field-holder > .input__field').type('asdasd123')
		cy.contains('Sign In').click()
	}
	const check = () => {
		cy.get('#tab-0').click().wait(1000) //flight
	}
	if (cacheSession) {
		cy.session(name, login)
	} else {
		login()
	}

})

Cypress.Commands.add('start_date', () => {
	cy.get('.flight-form__right-field > .date-picker > .SingleDatePicker > :nth-child(1) > .SingleDatePickerInput > .SingleDatePickerInput_calendarIcon > .icon > svg').click().wait(2000)
	cy.get('.flight-form__right-field > .date-picker > .SingleDatePicker > :nth-child(1) > .SingleDatePickerInput > .SingleDatePickerInput_clearDate > .SingleDatePickerInput_clearDate_svg > path').click().wait(2000)
	cy.get('body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)').type('14 July 2022').wait(2000)
})

Cypress.Commands.add('select_trip', () => {
	cy.get('.flight-form__drop-downs > :nth-child(1) > .menu > .menu__item > .icon-button > .icon-button__icon > .icon > svg').click().wait(2000) // trip selection
	cy.get(':nth-child(1) > .menu > .menu__item > .menu__list > :nth-child(1) > [data-testid="wrapperWithoutLink"]').click().wait(1000)  // one way selection
})

Cypress.Commands.add('select_travelers', () => {
	// select travelers
	times(0, () => {
		cy.get(':nth-child(1) > .quantity-selector > :nth-child(3) > .quantity-selector__icon > .icon > svg > path').should('exist').click().wait(1000)
	})
	cy.get('.search-container__form').click().wait(2000)
})

Cypress.Commands.add('origin_start', () => {
	cy.get('.flight-form__right-field > .select-box > .select-box-wrapper > .select-box-container > .select-box__control > .select-box__indicators > .select-box__indicator > .css-19bqh2r').click().wait(1000)
	cy.get('#react-select-4-input').type('cpt').wait(2000)
})

Cypress.Commands.add('destination', () => {
	cy.get('.flight-form__left-field > .select-box > .select-box-wrapper > .select-box-container > .select-box__control > .select-box__indicators > .select-box__indicator > .css-19bqh2r').click().wait(1000)
	cy.get('#react-select-5-input').type('lhr').wait(1000)
	cy.get('.search-container').click().wait(2000)
})

Cypress.Commands.add('search', () => {
	cy.get('.flight-form__bottom-right-action-bar > .button--primary').click().wait(25000)
})

Cypress.Commands.add('visit_travelapp', () => {
	cy.visit('https://wellautotng.staging.welltravel.com/en-GB/')

})

Cypress.Commands.add('single_flight_type', () => {
	cy.get(':nth-child(2) > .flight > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > .flight__services > .button').click().wait(10000)
})

Cypress.Commands.add('select_farebrand_unknown', () => {
	cy.get('.matrix-content-slider__container > .matrix-card').click().wait(1000)
})

Cypress.Commands.add('continue_to_cart', () => {
	cy.get('.matrix-stepper-control-bar > .button--primary').click().wait(15000)
})

Cypress.Commands.add('Your_Cart', () => {
	cy.get('.button--tertiary > :nth-child(2)').click().wait(5000)
})

Cypress.Commands.add('Travelers_Information_mybooking', () => {
	cy.get('.button--tertiary > :nth-child(2)').click().wait(4000)

})

Cypress.Commands.add('Review_book_continue_to_order', () => {
	cy.get('.button--tertiary > :nth-child(2)').click().wait(3000)
	cy.get('.book-buttons__button-contents > :nth-child(3) > .button').click().wait(100000)
	cy.get('.stepper__footer > .button > span').click().wait(2000)
})

Cypress.Commands.add('', () => {
	cy.get('').click().wait()
})

