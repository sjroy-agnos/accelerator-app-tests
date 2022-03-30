// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('checkVisibilityOfElement', (locator) => {
    cy.get(locator).should('be.visible')
})

Cypress.Commands.add('clickOnElement', (locator) => {
    cy.get(locator).click()
})

Cypress.Commands.add('checkElementVisibilityWithText', (locator, text) => {
    cy.get(locator).should('be.visible').should('have.text', text)
})

Cypress.Commands.add('verifyElementPropertyAndValueIncluded', (locator, attribute, value) => {
    cy.get(locator).should('have.attr', attribute).and('include', value)
})

Cypress.Commands.add('checkElementVisibilityWithTextAndSelected', (locator, text) => {
    cy.get(locator).should('be.visible').should('have.text', text).should('have.attr', 'class').and('include', 'Mui-selected')
})

Cypress.Commands.add('checkElementVisibilutyWithTextAndNotSelected', (locator, text) => {
    cy.get(locator).should('be.visible').should('have.text', text).should('have.attr', 'class').and('not.include', 'Mui-selected')
})

Cypress.Commands.add('verifyPresenceOfList', (locator) => {
    cy.get(locator).its('length').should('be.greaterThan', 0)
})

Cypress.Commands.add('checkVisibilityOfWebElementWithSpecificText', (elementType, elementName) => {
    cy.get(elementType).contains(elementName).should('be.visible')
})

Cypress.Commands.add('verifyListLength', (locator, length) => {
    cy.get(locator).should('have.length', length)
})

Cypress.Commands.add('clickLinkFromOtionsList', (list_locator, link_name) => {
  cy.get(list_locator).each(($el) => {
    if ($el.text() === link_name) {
      cy.wrap($el).click()
    }
  })
})