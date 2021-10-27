// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:8080/')
  })
  it('Visits the app root url', () => {
    cy.visit('/home')
    cy.visit('/productos')
    
  })
})
