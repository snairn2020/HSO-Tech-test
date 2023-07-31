describe('Cart Functionality', () => {

  it('Shopping Cart Functionality - Add Item to Cart and Checkout', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');

    // Add the first item to the cart
    cy.get('.inventory_item').first().find('.btn_primary').click();
    cy.get('.shopping_cart_badge').should('have.text', '1');

    // View cart and checkout
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
    cy.get('.cart_item').should('have.length.greaterThan', 0);
    cy.get('.checkout_button').click();
    cy.url().should('include', '/checkout-step-one.html');
  });
  
  afterEach(() => {
    // Click the hamburger menu to reset the site after each test
    cy.get('.bm-burger-button').click();
    cy.contains('Reset App State').click();
  });
});