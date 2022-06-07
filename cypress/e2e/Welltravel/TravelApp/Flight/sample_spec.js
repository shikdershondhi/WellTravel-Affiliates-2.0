
describe('login', () => {
  it('should redirect to the correct page after logging in', () => {
    cy.login('user', { cacheSession: false })
    cy.validate()
  })
})

      describe('flight Book page',() =>
      {
        it('Search box', () =>
          {
            cy.select_trip()
            cy.select_travelers()
            cy.origin_start()
            cy.destination()
            cy.start_date()
            cy.search()
          })
      })
