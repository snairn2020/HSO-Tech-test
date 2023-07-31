describe('Login Functionality', () => {

  it('Login Functionality - Valid Credentials', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
  });

  it('Login Functionality - Invalid Credentials', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('invalid_user');
    cy.get('#password').type('invalid_password');
    cy.get('#login-button').click();
    cy.contains('Epic sadface: Username and password do not match any user in this service')
      .should('be.visible');
  });
});