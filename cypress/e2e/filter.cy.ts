describe('filter spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should visit', () => {
    const filterInput = cy.get('#filterInput');

    filterInput.type('2999');

    cy.wait(3000);

    filterInput.clear();

    cy.wait(3000);

    filterInput.type('12');

    cy.wait(3000);

    filterInput.clear();
  })
})
