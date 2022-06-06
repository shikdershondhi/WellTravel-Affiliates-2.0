
describe('login', () => {
  it('should redirect to the correct page after logging in', () => {
    cy.login('user', { cacheSession: false })
    // function validate() {
    //   cy.request('/api/user').its('status').should('eq', 200)
    // }
  })
})

      describe('flight search page',() =>
      {
          it('flight info', () =>
          {

            //cy.get('.flight-form__drop-downs > :nth-child(1) > .menu > .menu__item > .icon-button').click()
            //cy.get(':nth-child(1) > .menu > .menu__item > .menu__list > :nth-child(1) > [data-testid="wrapperWithoutLink"]').click()
            cy.get('.flight-form__right-field > .select-box > .select-box-wrapper > .select-box-container > .select-box__control > .select-box__indicators > .select-box__indicator > .css-19bqh2r').click()
            cy.get('#react-select-4-input').type('cpt')
            cy.wait(1000)
            cy.get('.flight-form__left-field > .select-box > .select-box-wrapper > .select-box-container > .select-box__control > .select-box__indicators > .select-box__indicator > .css-19bqh2r').click()
            cy.get('#react-select-5-input').type('lhr')
            cy.wait(1000)
            cy.get('.flight-form__right-field > .date-picker > .SingleDatePicker > :nth-child(1) > .SingleDatePickerInput > .SingleDatePickerInput_clearDate > .SingleDatePickerInput_clearDate_svg').click()
            cy.get('.flight-form__right-field > .date-picker > .SingleDatePicker > :nth-child(1) > .SingleDatePickerInput > .SingleDatePickerInput_calendarIcon > .icon > svg').click()
            cy.wait(1000)
            cy.get('body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)').type('30 March 2022')
            cy.get('.flight-form__action-bars').click()
            cy.wait(1000)
            cy.get('.flight-form__bottom-right-action-bar > .button--primary').click()
            cy.wait(20000)
          })

        })

        describe('flight search', () =>
        {
          it('flight select',()=>
          {
            cy.get(':nth-child(2) > .flight > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2) > .flight__services > .button').click()
            cy.wait(2000)
            cy.get('.matrix-row__fare-brand-select > .button').click()
            cy.get('.matrix__navigation-button > .button--primary').click()
            cy.wait(15000)
            cy.get('.button--tertiary > :nth-child(2)').click()

          })
        })
