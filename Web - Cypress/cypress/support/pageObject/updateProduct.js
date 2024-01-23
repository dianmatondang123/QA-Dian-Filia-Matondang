const qty_breathe = "2"
const qty_0 = "0"
const qty_minus = "-"
const qty_plus = "+"
class updateProduct{
    clickCart(){
        cy.get('.showcart').click()
    }
    dropdownCart(){
        cy.get('#ui-id-1').should('be.visible')
    }
    toogle(){
        cy .get('.toggle').click()
    }
    verifySizeS(){
        cy.get('.content > .product > :nth-child(2) > span').should('have.text',"S")
    }
    verifySizeM(){
        cy.get('.content > .product > :nth-child(2) > span').should('have.text',"M")
    }
    verifyColorPurple(){
        cy.get('.product > :nth-child(4) > span').should('have.text',"Purple")
    }
    verifyColorWhite(){
        cy.get('.product > :nth-child(4) > span').should('have.text',"White")
    }
    iconEdit(){
        cy.get('.product-item-details > .actions > .primary').click()
    }
    iconDelete(){
        cy.get(':nth-child(1) > :nth-child(1) > .product-item-details > .actions > .secondary > .action').click()
    }
    popupConfrimDelete(){
        cy.get('body > div.modals-wrapper > aside.modal-popup.confirm._show > div.modal-inner-wrap').should('be.visible')//pop up confirmation
    }
    buttonOkeDelete(){
        cy.get('.action-primary').click() //klik button Oke
    }
    verifyProduct(){
        cy.get('.base').should('have.text', 'Breathe-Easy Tank')
    }
    clickSizeM(){
        cy.get('#option-label-size-143-item-168').click()//size M
    }
    clickColorWhite(){
        cy.get('#option-label-color-93-item-59').click()//White Color
    }
    inputQty(){
        cy.get('#qty').clear().type(qty_breathe)
    }
    buttonEdit(){
        cy.get('#product-updatecart-button').click()
    }
    messageSuccessUpdate(){
        cy.get('.message-success').should('contain.text', 'Breathe-Easy Tank was updated in your shopping cart.')
    }
    logoLUMA(){
        cy.get('.logo > img').click()
    }
    cartEmpty(){
        cy.get('#ui-id-1').should('include.text', 'You have no items in your shopping cart.')
    }
    clickSizeS(){
        cy.get('#option-label-size-143-item-167').click()
    }
    messageErrorRequiredSize(){
        cy.xpath('//*[@id="super_attribute[143]-error"]').should('contain.text','This is a required field.')
    }
    messageErrorRequiredColor(){
        cy.xpath('//*[@id="super_attribute93]-error"]').should('contain.text','This is a required field.')
    }
    messageQty0(){
        cy.get('#qty-error').should('contain.text','Please enter a quantity greater than 0.')
    }
    messageErrorQtySymbol(){
        cy.xpath('//*[@id="qty-error"]').should('contain.text','Please enter a valid number in this field.')
    }
    clickColorPurple(){
        cy.get('#option-label-color-93-item-57').click()
    }
    inputQty0(){
        cy.get('#qty').clear().type(qty_0)
    }
    inputQtyPlus(){
        cy.get('#qty').clear()
        cy.get('#qty').type(qty_plus)
    }
    inputQtyMinus(){
        cy.get('#qty').clear()
        cy.get('#qty').type(qty_minus)
    }
}
export default new updateProduct();
