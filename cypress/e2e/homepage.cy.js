describe('Visual Home Page', () => {
  it('Debería coincidir visualmente la página de inicio', () => {
    cy.visit('https://ivanmorenoswapps.github.io/page-html-qa-automation/');
    cy.wait(4000);
    cy.percySnapshot('Homepage Example');
  });
});