// import { times } from 'lodash'
//
// describe.skip('login', () => {
// 	it('should redirect to the correct page after logging in', () => {
// 		cy.login('user', { cacheSession: false })
// 		// function validate() {
// 		//   cy.request('/api/user').its('status').should('eq', 200)
// 		// }
// 	})
// })
//
// describe('flight search page',() =>
// {
// 	it('should load travel app', function() {
// 		cy.visit('')
// 	});
// 	it('flight info', () =>
// 	{
// 		cy.get('.flight-form__drop-downs > :nth-child(1) > .menu > .menu__item > .icon-button > .icon-button__icon > .icon > svg').click().wait(2000)
// 		cy.get(':nth-child(1) > .menu > .menu__item > .menu__list > :nth-child(1) > [data-testid="wrapperWithoutLink"]').click().wait(1000)
// 		cy.get('.search-menu__container--traveller-amount > .menu > .menu__item > .icon-button > .icon-button__icon > .icon > svg').click().wait(2000)
// 		// select travelers
// 		times(5, () => {
// 			cy.get(':nth-child(1) > .quantity-selector > :nth-child(3) > .quantity-selector__icon > .icon > svg > path').should('exist').click().wait(1000)
// 		})
// 		cy.get('.search-menu__container--traveller-amount > .menu > .menu__item > .icon-button > .icon-button__icon > .icon > svg').click().wait(2000)
// 	})
//
// 	it.skip('should be able to select the origin & destination', function() {
// 		cy.get('.flight-form__right-field > .select-box > .select-box-wrapper > .select-box-container > .select-box__control > .select-box__indicators > .select-box__indicator > .css-19bqh2r').click().wait(1000)
// 		cy.get('#react-select-4-input').type('cpt').wait(2000)
// 		cy.get('.flight-form__left-field > .select-box > .select-box-wrapper > .select-box-container > .select-box__control > .select-box__indicators > .select-box__indicator > .css-19bqh2r').click().wait(1000)
// 		cy.get('#react-select-5-input').type('lhr').wait(1000)
// 		cy.get('.search-container').click().wait(2000)
// 	});
// })
//
// describe.skip('flight search', () =>
// {
// 	it('flight select',()=>
// 	{
//
//
// 	})
// })
