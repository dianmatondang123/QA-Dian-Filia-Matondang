describe('Search product', () => {
    beforeEach('login',() => {
        cy.wait(3000)
        cy.visit('')
        cy.wait(3000)
        cy.login('terusbelajar@gmail.com','123@5H')
    })
    it('Search using valid keywords', () => {
      cy.visit('')
      cy.get('#search').type('tank')
      cy.get('.action.search').click()
      cy.url().should('include', '/search')
      cy.get('.search-results').contains('Tank')
    })
    it('search should suggest corrections for misspelled keywords', () => {
        cy.visit('')
        const misspelledKeyword = 'jcket';
        
        cy.get('#search').type('misspelledKeyword')
        cy.get('.action.search').click()
        cy.url().should('include', '/search')
        cy.get('.search-suggestions').should('exist')
        cy.get('.search-suggestions').contains('jacket').should('exist')
        cy.get('.search-suggestions').contains('jacket').click()
        cy.url().should('include', '/search')
        cy.get('.search-results').contains('jacket').should('exist')
    })
    it('search should apply filters and display relevant results', () => {
        cy.visit('')
        cy.get('.category-filter').select('tank')
        cy.get('.price.filter').select(10-100)
        const keyword = 'jacket'
        cy.get('#search').type('keyword')
        cy.get('.action.search').click()
        cy.url().should('include', '/search')
        cy.get('.applied-filters').should('contain.text', 'Category: tank')
        cy.get('.applied-filters').should('contain.text', 'Price Range: $10-$100')
        cy.get('.search-results').should('exist')
        cy.get('.search-results').each(($result) => {
            cy.wrap($result).find('.category').should('contain.text', 'Electronics')
            cy.wrap($result).find('.price').should('be.within', 10, 100)
        })
    })
    it('sort products in ascending and descending order by price', () => {
        cy.visit('')
        cy.get('.sort-dropdown').select('price:low to high')
        cy.get('.product-price').then(($prices) => {
            const prices = $prices.map((index, element) => Cypress.$(element).text().replace('$', parseFloat));
            const sortedPrices = [...prices].sort((a, b) => a - b)

             expect(prices.get()).to.deep.equal(sortedPrices)
        })
        cy.get('.sort-dropdown').select('price:high to low')
        cy.get('.product-price').then(($prices) => {
            const prices = $prices.map((index, element) => Cypress.$(element).text().replace('$', parseFloat));
            const sortedPrices = [...prices].sort((a, b) => b - a)

            expect(prices.get()).to.deep.equal(sortedPrices)
        })
    })
    it('compare selected products', () => {
        cy.visit('')
        cy.get('.product:first').as('firstProduct');
        cy.get('@firstProduct').find('.compare-checkbox').check()
        cy.wait(2000)
        cy.get('.product:eq(1)').as('secondProduct');
        cy.get('@secondProduct').find('.compare-checkbox').check();
        cy.get('.compare-button').click();
        cy.url().should('include', '/comparison')
        cy.get('.comparison-product').should('have.length', 2)
        cy.get('@firstProduct').within(() => {
            const productName = cy.get('.product-name').text('tank-women');
            const productPrice = cy.get('.product-price').text('$100');
            cy.get('.comparison-product').contains(productName).should('exist');
            cy.get('.comparison-product').contains(productPrice).should('exist');
        })
        cy.get('@secondProduct').within(() => {
            const productName = cy.get('.product-name').text('Jacket');
            const productPrice = cy.get('.product-price').text('$39');
            cy.get('.comparison-product').contains(productName).should('exist');
            cy.get('.comparison-product').contains(productPrice).should('exist');
        })
    })
  })