describe('front-end', () => {
  beforeEach(() => cy.visit('/'));

  it('should automatically redirect to /expenses', () => {
    cy.url().should('contain', '/expenses');
  });
});
