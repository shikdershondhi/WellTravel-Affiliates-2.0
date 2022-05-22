import {
	landingPageTitle,
	homePageImage,
	addToCartButton,
	cartAddedMessage,
	successMessage,
	closeBtn,
	itemCount,
	productCount,
} from '../selectors/locators';

Cypress.Commands.add('openHomePage', () => {
	return cy.visit('/');
});

Cypress.Commands.add('verifyTitle', () => {
	return cy.title().should('eq', landingPageTitle);
});

Cypress.Commands.add('verifyUrl', () => {
	return cy.url().should('include', '/index.php');
});

Cypress.Commands.add('verifyForPageToLoad', () => {
	return cy.get(homePageImage).should('be.visible');
});

Cypress.Commands.add('contactLink', () => {
	return cy.get('a').contains('Contact us').should('be.visible');
});

Cypress.Commands.add('loginLink', () => {
	return cy.get('a').contains('Sign in').should('be.visible');
});

Cypress.Commands.add('printedChiffonDress', () => {
	return cy.get('a').contains('Printed Chiffon Dress').should('be.visible');
});

Cypress.Commands.add('clickChiffonDress', () => {
	return cy.get('a').contains('Printed Chiffon Dress').click();
});

Cypress.Commands.add('clickAddToCart', () => {
	cy.get(addToCartButton).should('be.enabled');
	cy.get(addToCartButton).click({ force: true });
	return cy.get(addToCartButton).click();
});

Cypress.Commands.add('cartSuccessMessage', () => {
	return cy.get(successMessage).should('be.visible');
});

Cypress.Commands.add('cartAddedMessage', () => {
	return cy.get(cartAddedMessage).should('be.visible');
});

Cypress.Commands.add('cartCount', () => {
	cy.get(closeBtn).click();
	cy.get(itemCount)
		.invoke('text')
		.should(textValue => {
			expect(productCount).to.eq(textValue);
		});
});
