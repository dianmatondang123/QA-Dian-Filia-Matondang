import { beforeEach } from "node:test"
import updateProduct from "../support/pageObject/UpdateProduct"
import registerPage from "../support/pageRegister/registerPage"


//register
describe('End to End', () => {
    it('success create user', () => {
        cy.visit('')
        cy.register('Dian', 'Matondang', 'dianmatondang012@gmail.com', 'Dianfilia123#', 'Dianfilia123#')
        cy.wait(2000)
        registerPage.clickCreate()
        cy.wait(2000)
        cy.url().should('include', 'https://magento.softwaretestingboard.com/customer/account/')
        cy.wait(2000)
    })
})

describe('End to End', () => {
    beforeEach(() => {
        it('passes', () => {
            cy.visit('https://magento.softwaretestingboard.com/')
            cy.get('.panel > .header > .authorization-link > a').click()
            cy.get('#email').type('dianmatondang012@gmail.com')
            cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Dianfilia123#')
            cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
        })
    })

    it('Search using valid keywords', () => {
        cy.visit('')
        cy.get('#search').type('tank')
        cy.get('.action.search').click()
        cy.url().should('include', '/search')
        cy.get('.search-results').contains('Tank')
    })

    it('positive - select product', () => {
        cy.get(':nth-child(2) > .product-item-info > .product-item-details > .product-item-name > .product-item-link').click()
        cy.get('#option-label-size-143-item-166').click()
        cy.wait(100)
        cy.get('#option-label-size-143-item-167').click()
        cy.wait(100)
        cy.get('#option-label-size-143-item-168').click()
        cy.wait(100)
        cy.get('#option-label-size-143-item-169').click()
        cy.wait(100)
        cy.get('#option-label-size-143-item-170').click()
        cy.wait(100)
        cy.get('#option-label-color-93-item-57').click()
        cy.wait(100)
        cy.get('#option-label-color-93-item-59').click()
        cy.wait(100)
        cy.get('#option-label-color-93-item-60').click()
        cy.wait(100)
        cy.get('#product-addtocart-button > span').click()
        cy.get('.message-success > div').should('contain.text', 'You added Breathe-Easy Tank to your shopping cart.')
        cy.wait(2000)
    })

    it('edit the size of the products in the cart', () => {
        updateProduct.clickCart();
        updateProduct.dropdownCart();
        updateProduct.toogle();
        cy.get('.content > .product > :nth-child(2) > span').should('have.text', "S")
        updateProduct.iconEdit();
        cy.get('.base').should('have.text', 'Breathe-Easy Tank')
        cy.get('#option-label-size-143-item-168').click()//size M
        cy.wait(5000)
        updateProduct.buttonEdit();
        cy.wait(5000)
        cy.get('.message-success').should('contain.text', 'Breathe-Easy Tank was updated in your shopping cart.')
        updateProduct.logoLUMA();
        cy.wait(5000)
        updateProduct.clickCart();
        updateProduct.dropdownCart();
        updateProduct.toogle();
        cy.get('.content > .product > :nth-child(2) > span').should('have.text', "M")
    })
    //checkout
    it("Checkout - New Address - Flat Rate", () => {
        //checkout process until order successfully submitted
        cy.wait(3000)
        cy.get('.new-address-popup > .action > span').click() //add new address instead using the saved address
        cy.wait(500)
        //get data to input from fixture
        cy.fixture('shipping.json').then((shipping) => {
            cy.get('input[name="street[0]"]').type(shipping.address)
            cy.get('input[name="city"]').type(shipping.city)
            cy.get('select[name="region_id"]').select('Alaska')
            cy.get('input[name="postcode"]').type(shipping.zip)
            cy.get('select[name="country_id"]').select('United States')
            cy.get('input[name="telephone"]').type(shipping.phone)
            cy.get('#shipping-save-in-address-book').uncheck()
            cy.get('button.action-save-address').contains('Ship here').click()
            cy.wait(500)
        })
        cy.get('input[type="radio"][value="flatrate_flatrate"]').check() //choose the flat rate shipping options
        cy.wait(3000)
        cy.get('button[type="submit"]').contains('Next').click()
        cy.url().should("include", "/checkout/#payment")
        cy.get('.payment-group > .step-title').should('exist').and('contain', 'Payment Method')
        cy.get('.shipping-information-content').should('exist').and('contain', 'Alaska') //check using new address
        cy.get('.opc-block-summary').should('exist').and('contain', 'Order Summary') //check the order summary exist
        cy.get('.sub > .mark').should('exist').and('have.text', 'Cart Subtotal')
        cy.get('button[type="submit"]').contains('Place Order').click()
        cy.wait(3000)
        cy.url().should("include", "success") //order success page
        cy.get(".base").should("contain.text", "Thank you for your purchase!")
        cy.get('.order-number').should('exist')
        cy.get('.checkout-success > .actions-toolbar > div.primary > .action > span').should('exist').and('have.text', 'Continue Shopping')
    })
})