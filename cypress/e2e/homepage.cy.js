describe('Visual Home Page', () => {
  it('Debería coincidir visualmente la página de inicio', () => {
    cy.visit('https://ivanmorenoswapps.github.io/page-html-qa-automation/');
    cy.get('header', { timeout: 10000 }).should('be.visible');
    cy.wait(1000);
    cy.scrollTo('bottom');
    cy.get('footer', { timeout: 10000 }).should('be.visible');
    cy.wait(4000);
    cy.percySnapshot('Homepage Example - con scroll');
  });
});