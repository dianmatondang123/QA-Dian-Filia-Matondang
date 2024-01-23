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

Cypress.Commands.add('register', (firstname, lastname, email, password, confirmpassw) => {
    cy.get('#firstname').type(firstname)
    cy.get('#lastname').type(lastname)
    cy.get('#email_address').type(email)
    cy.get('#password').type(password)
    cy.get('#password-confirmation').type(confirmpassw)
    cy.get('.action.submit.primary').click()
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  Cypress.Commands.add('verifyContain', (locator, value) => {
    cy.get(locator).should('contain',value)
})

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
Cypress.Commands.add('loginr', () => {
    cy.get('#email').type(Cypress.env('username'))
    cy.get('#pass').type(Cypress.env('password'))
    cy.get('#send2').click()
})

Cypress.Commands.add('loginneg', () => {
    cy.get('#email').type(Cypress.env('uneg'))
    cy.get('#pass').type(Cypress.env('pasneg'))
    cy.get('#send2').click()
})

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
var Login = require('../fixtures/data_login.json') 
var { email, password } = Login;

Cypress.Commands.add('login_data', () => {

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const cypress = require('cypress');
var loginUser = require('../fixtures/loginUser.json') 
var { valid_email, valid_pass } = loginUser;

Cypress.Commands.add('login', () => {
    cy.get('.panel > .header > .authorization-link').click()
    cy.get('#email').type(email)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(password)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    cy.wait(20000)
    cy.get(':nth-child(2) > .greet > .logged-in').should('have.text','Welcome, Nelly Testing!')
})
Cypress.Commands.add('Choose_Product', () => {
    cy.get(':nth-child(2) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    cy.wait(5000)
    cy.get('.base').should('have.text', 'Breathe-Easy Tank')
    cy.get('#option-label-size-143-item-167').click()//choose a size
    cy.get('#option-label-color-93-item-57').click()//choose pink color
    cy.get('#product-addtocart-button').click()
    cy.wait(10000)
    cy.get('.message-success').should('contain.text', 'You added Breathe-Easy Tank to your shopping cart.')
})

})

Cypress.Commands.add('login', (email,pass)=> {
    cy.get('.panel > .header > .authorization-link').click()
    cy.wait(20000)
    cy.get('#email').type(loginUser.valid.valid_email)
    cy.get('#pass').type(loginUser.valid.valid_pass)
    cy.get('.action.login.primary').click()
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false

})