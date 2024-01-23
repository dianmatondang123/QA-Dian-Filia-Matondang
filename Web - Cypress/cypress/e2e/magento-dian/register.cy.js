// const UserRegistrasi = require('../../../fixtures/UserRegistrasi.json')
// const userData = require('../../../fixtures/userData.json')
// const { default: registerPage } = require("../../support/pageRegister/registerPage")

import registerPage from "../../support/pageRegister/registerPage"


// this case for positive case
describe('positive case', () => {
  beforeEach(() => {  
    cy.visit('')

  })

  it('success create user', () => {
    cy.register('Dian', 'Matondang', 'dianmatondang012@gmail.com', 'Dianfilia123#', 'Dianfilia123#')
    cy.wait(2000)
    // cy.get('#firstname').type('Dian')
    // cy.get('#lastname').type('Matondang')
    // cy.get('#email_address').type('dianmatondang012@gmail.com')
    // cy.get('#password').type('Dianfilia123#')
    // cy.get('#password-confirmation').type('Dianfilia123#')
    // cy.get('.action.submit.primary').click()
    registerPage.clickCreate()
    cy.wait(2000)
    cy.url().should('include', 'https://magento.softwaretestingboard.com/customer/account/')
    cy.wait(2000)
  })
})


// this case for negative case
describe('negative case', () => {
  beforeEach(() => {
    cy.visit('')    
  })

  it('using the same email', () => {
    // create user failed due to using the same email
    cy.fixture('userData.json').then((userData) => {
      registerPage.inputFirstname(userData.firstname)
      registerPage.inputLastname(userData.lastname)
    })
    cy.wait(2000)
    cy.get('#email_address').type('dianmatondang012@gmail.com')
    cy.wait(2000)
    cy.get('#password').type('Agungmtd123#')
    cy.wait(2000)
    cy.get('#password-confirmation').type('Agungmtd123#')
    cy.wait(2000)
    registerPage.clickCreate()
    cy.wait(2000)
    cy.get('.message-error').should('contain', 'There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
    cy.wait(2000)
    cy.url().should('include', 'https://magento.softwaretestingboard.com/customer/account/')
    cy.wait(2000)
  })

  it('weak password', () => {
    // create user failed due to a weak password
    cy.get('#firstname').type('Agung')
    cy.wait(2000)
    cy.get('#lastname').type('Matondang')
    cy.wait(2000)
    cy.get('#email_address').type('dianmatondang12@gmail.com')
    cy.wait(2000)
    cy.get('#password').type('Agungmtd')
    cy.wait(2000)
    cy.get('#password-confirmation').type('Agungmtd')
    cy.wait(2000)
    registerPage.clickCreate()
    cy.wait(2000)
    cy.get('#password-error').should('contain', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
    cy.wait(2000)
    cy.url().should('include', 'https://magento.softwaretestingboard.com/customer/account/')
    cy.wait(2000)
  })


  it('different password length', () => {
    // create user failed because the length of the password and confirm password are different
    cy.fixture('userData.json').then((userData) => {
      registerPage.inputFirstname(userData.firstname)
      registerPage.inputLastname(userData.lastname)
    })
    cy.wait(2000)
    cy.get('#email_address').type('dianmatondang112@gmail.com')
    cy.wait(2000)
    cy.get('#password').type('Dianmtd123#')
    cy.wait(2000)
    cy.get('#password-confirmation').type('Dianmtd')
    cy.wait(2000)
    registerPage.clickCreate()
    cy.wait(2000)
    cy.get('#password-confirmation-error').should('contain', 'Please enter the same value again.')
    cy.wait(2000)
    cy.url().should('include', 'https://magento.softwaretestingboard.com/customer/account/')
    cy.wait(2000)
  })

  it('different password', () => {
    // create user failed because the password and confirm password are different
    cy.fixture('userData.json').then((userData) => {
      registerPage.inputFirstname(userData.firstname)
      registerPage.inputLastname(userData.lastname)
    })
    cy.wait(2000)
    cy.get('#email_address').type('dianmatondang112@gmail.com')
    cy.wait(2000)
    cy.get('#password').type('Dianmtd123#')
    cy.wait(2000)
    cy.get('#password-confirmation').type('Dianmtd123@')
    cy.wait(2000)
    registerPage.clickCreate()
    cy.wait(2000)
    cy.get('#password-confirmation-error').should('contain', 'Please enter the same value again.')
    cy.wait(2000)
    cy.url().should('include', 'https://magento.softwaretestingboard.com/customer/account/')
    cy.wait(2000)
  })

  it('blank personal information', () => {
    // create user failed due to missing personal information
    cy.get('#email_address').type('dianmatondang112@gmail.com')
    cy.wait(2000)
    cy.get('#password').type('Agungmtd123#')
    cy.wait(2000)
    cy.get('#password-confirmation').type('Agungmtd123#')
    registerPage.clickCreate()
    cy.wait(2000)
    cy.get('#firstname-error').should('contain', 'This is a required field.')
    cy.wait(2000)
    cy.get('#lastname-error').should('contain', 'This is a required field.')
    cy.wait(2000)
    cy.url().should('include', 'https://magento.softwaretestingboard.com/customer/account/')
    cy.wait(2000)
  })

  it('empty email', () => {
    // create user failed due to missing email
    cy.fixture('userData.json').then((userData) => {
      registerPage.inputFirstname(userData.firstname)
      registerPage.inputLastname(userData.lastname)
    })
    cy.wait(2000)
    cy.get('#password').type('Agungmtd123#')
    cy.wait(2000)
    cy.get('#password-confirmation').type('Agungmtd123#')
    cy.wait(2000)
    registerPage.clickCreate()
    cy.wait(2000)
    cy.get('#email_address-error').should('contain', 'This is a required field.')
    cy.wait(2000)
    cy.url().should('include', 'https://magento.softwaretestingboard.com/customer/account/')
    cy.wait(2000)
  })

  it('empty password', () => {
    // create user failed because password was not filled in
    cy.fixture('userData.json').then((userData) => {
      registerPage.inputFirstname(userData.firstname)
      registerPage.inputLastname(userData.lastname)
    })
    cy.wait(2000)
    cy.get('#email_address').type('dianmatondang112@gmail.com')
    cy.wait(2000)
    cy.get('#password-confirmation').type('Agungmtd123#')
    cy.wait(2000)
    registerPage.clickCreate()
    cy.wait(2000)
    cy.get('#password-error').should('contain', 'This is a required field.')
    cy.wait(2000)
    cy.url().should('include', 'https://magento.softwaretestingboard.com/customer/account/')
    cy.wait(2000)
  })

  it('empty confirm password', () => {
    // create user failed because confirm password was not filled in
    cy.fixture('userData.json').then((userData) => {
      registerPage.inputFirstname(userData.firstname)
      registerPage.inputLastname(userData.lastname)
    })
    cy.wait(2000)
    cy.get('#email_address').type('dianmatondang112@gmail.com')
    cy.wait(2000)
    cy.get('#password').type('Agungmtd123#')
    cy.wait(2000)
    registerPage.clickCreate()
    cy.wait(2000)
    cy.get('#password-confirmation-error').should('contain', 'This is a required field.')
    cy.wait(2000)
    cy.url().should('include', 'https://magento.softwaretestingboard.com/customer/account/')
    cy.wait(2000)
  })

})


