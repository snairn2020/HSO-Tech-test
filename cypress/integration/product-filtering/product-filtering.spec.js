describe('Product Filtering and Sorting', () => {
  it('should filter and sort products', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');

    // Use cy.select() to select a specific filter option
    cy.get('.product_sort_container').select('lohi');

    // Verify that the products are sorted by price from low to high
    cy.get('.inventory_item_price').then(($prices) => {
      const prices = $prices.map((index, element) => parseFloat(element.innerText.replace('$', ''))).get();
      for (let i = 0; i < prices.length - 1; i++) {
        expect(prices[i]).to.be.at.most(prices[i + 1]);
      }
    });

    // Use cy.select() to select a different filter option
    cy.get('.product_sort_container').select('az');

    // Verify that the products are sorted by name from A to Z
    cy.get('.inventory_item_name').then(($names) => {
      const names = $names.map((index, element) => element.innerText).get();
      for (let i = 0; i < names.length - 1; i++) {
        // Compare the names using localeCompare()
        expect(names[i].localeCompare(names[i + 1])).to.be.at.most(0);
      }
    });
  });
});
