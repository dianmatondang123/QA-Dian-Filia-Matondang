class registerPage{
    firstnm = '#firstname'
    lastnm = '#lastname'
    crt_btn = '.action.submit.primary'

    inputFirstname(first_name){
        cy.get(this.firstnm).type(first_name)
    }

    inputLastname(last_name){
        cy.get(this.lastnm).type(last_name)
    }

    clickCreate(){
        cy.get(this.crt_btn).click()
    }
}
export default new registerPage()