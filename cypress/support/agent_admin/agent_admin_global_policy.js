Cypress.Commands.add('agent_admin_setting', () => {
	cy.get(':nth-child(9) > .side-nav__list-item > .side-nav__list-item-icon > .icon > svg').scrollIntoView().wait(2000)
	cy.get(':nth-child(9) > .side-nav__list-item > .side-nav__list-item-icon > .icon > svg').click().wait(2000)
})

Cypress.Commands.add('agent_admin_global_policies', () => {
	cy.get(':nth-child(12) > span').click().wait(2000)
})

Cypress.Commands.add('agent_admin_add_new_policy', () => {
	cy.get('.policies-list__items-with-search > .link > .link__content').click().wait(2000)
})

Cypress.Commands.add('agent_admin_approval_required', () => {
	cy.get('.col-grid > .policies__first-phase-content--with-right-padding > .card > .card--v2__wrapper > :nth-child(1) > .card__body-section > .policies__label > .policies__label-header > .radio > .radio__check').click().wait(2000)
	cy.get('.policies__items--with-right-padding > .button').click().wait(2000)
	cy.get('.select-box__value-container').click().wait(1000)
	cy.get('.select-box__value-container').type('Flight{enter}').wait(1000)
	cy.get(':nth-child(2) > .checkbox > .checkbox__check').click().wait(100)
	cy.get('.policies__travel-items-extra-attributes-currency > .input > .input__field-holder > .input__field').type('ZAR').wait(100)
	cy.get('.policies__travel-items-extra-attributes-amount > .input > .input__field-holder > .input__field').type('1200').wait(100)
	cy.get('.organization-approvers__enable-organizations > .checkbox > .checkbox__check').click().wait(100)
	cy.get(':nth-child(2) > .select-box-wrapper > .select-box-container > .select-box__control > .select-box__value-container').type('Xpath org{enter}').wait(2000).type('{enter}')
	cy.get('.align-end').click().wait(2000)
	cy.get('.policies__approvers-mandatory > .select-box > .select-box-wrapper > .select-box-container > .select-box__control > .select-box__value-container').scrollIntoView().wait(100)
	cy.get('.policies__approvers-mandatory > .select-box > .select-box-wrapper > .select-box-container > .select-box__control > .select-box__value-container').type('approver member one{enter}').wait(1000)
	cy.get('.align-end').click().wait(2000)
	cy.get('.policies__items--with-right-padding > .button').click().wait(3000)

})

Cypress.Commands.add('agent_admin_policy_delete', () => {
	//cy.get(':nth-child(2) > .link__content > .icon-button__icon > .icon > svg > path').click({multiple: true}).wait(2000)
	cy.get('.app__content').then(($body) => {
		if ($body.text().includes('Action')) {
			cy.get(':nth-child(2) > .link__content > .icon-button__icon > .icon > svg > path').click({multiple: true}).wait(4000)
		} else {
			cy.get('.table__head > .table__row > :nth-child(1)').should('be.visible').scrollIntoView()
		}
	})

})

//==========================pre===============================

Cypress.Commands.add('agent_admin_organisations', () => {
	cy.get(':nth-child(1) > .side-nav__list-item > .side-nav__list-item-icon > .icon > svg').click().wait(2000)
})

Cypress.Commands.add('agent_admin_organisations_search', () => {
	cy.get('.organizations-list__search-and-filter-search > .input > .input__field-holder > .input__field').type('Xpath org').wait(3000)
})

Cypress.Commands.add('agent_admin_organisations_edit', () => {
	cy.get(':nth-child(2) > .link__content > .icon-button__icon > .icon > svg > path').click().wait(2000)
})

Cypress.Commands.add('agent_admin_organisations_pre', () => {
	cy.get('.organization-edit-section__actions > .icon-button > .icon-button__icon > .icon > svg > path').click().wait(2000)
	cy.get(':nth-child(3) > .organization-edit-general-information__field--with-padding > .checkbox').find(":checkbox").uncheck({force: true}).wait(4000)
	cy.get('.col-2 > :nth-child(1) > .icon-button__icon > .icon > svg > path').click({force: true}).wait(2000)
	//cy.get(':nth-child(1) > .side-nav__list-item > .side-nav__list-item-icon > .icon > svg > path').click()
})

//==================post====================

Cypress.Commands.add('agent_admin_organisations_post', () => {
	cy.get('.organization-edit-section__actions > .icon-button > .icon-button__icon > .icon > svg > path').click().wait(2000)
	cy.get(':nth-child(3) > .organization-edit-general-information__field--with-padding > .checkbox').find(":checkbox").check({force: true}).wait(4000)
	cy.get('.col-2 > :nth-child(1) > .icon-button__icon > .icon > svg > path').click({force: true}).wait(2000)
	//cy.get(':nth-child(1) > .side-nav__list-item > .side-nav__list-item-icon > .icon > svg > path').click()
})