// cart.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Camino feliz', () => {
    beforeEach(()=>{
      cy.visit('http://localhost:8080/')
    })
    it('Visits the app root url', () => {
      cy.get('.productos').click()
      cy.wait(1000)

      //revisar que no sea el primero necesariamente
      cy.get('.v-row > :nth-child(3) > .clickCard').first().click()

      // https://docs.cypress.io/api/commands/select#Select-multiple-options
      cy.get('.selected_radio_button').click()
      
      cy.get('.cy_addToCart').click()
      cy.get('.carritoNavClick').click()
      cy.get('.inputNombre').type('{shift}Milford')
      cy.get('.inputCorreo').type('ejemplo@ejemplo.cl')
      cy.get('.inputTelefono').type('934410585{enter}')
    })
  })