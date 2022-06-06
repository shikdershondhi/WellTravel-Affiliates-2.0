
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
          })

        })

        describe('flight search', () =>
        {
          it('flight select',()=>
          {


          })
        })
