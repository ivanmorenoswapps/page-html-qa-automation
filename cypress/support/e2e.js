import '@percy/cypress';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});