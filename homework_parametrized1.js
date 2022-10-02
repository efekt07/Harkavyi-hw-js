before(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
        cy.get('[alt="Material Light Theme"]').click();
        cy.get('.menu-icon.ng-tns-c141-9.ng-star-inserted').click();
        cy.get('.menu-title.ng-tns-c141-11').click();
})

const params = [
    {arg: ['Yaroslav', 'Harkavyi', 'email1@gmail.com', 'website1.com'], expected: ['Yaroslav', 'Harkavyi', 'email1@gmail.com', 'website1.com']},
    {arg: ['Dmytro', 'Sanitarskiy', 'email2@gmail.com', 'website2.com'], expected: ['Dmytro', 'Sanitarskiy', 'email2@gmail.com', 'website2.com']},
    {arg: ['TestFirstName', 'TestLastName', 'email3@gmail.com', 'website3.com'], expected: ['TestFirstName', 'TestLastName', 'email3@gmail.com', 'website3.com']}
]

params.forEach(({arg, expected}) => {
    it(`Parametrized test with ${arg} params`, () => {
        cy.get('#inputFirstName').clear().type(arg[0]);
        cy.get('#inputFirstName').should('contain.value', expected[0]);

        cy.get('#inputLastName').clear().type(arg[1]);
        cy.get('#inputLastName').should('contain.value', expected[1]);

        cy.get('#inputEmail').clear().type(arg[2]);
        cy.get('#inputEmail').should('contain.value', expected[2]);

        cy.get('#inputWebsite').clear().type(arg[3]);
        cy.get('#inputWebsite').should('contain.value', expected[3]);
        cy.get('.appearance-filled.size-medium.shape-rectangle.status-basic.nb-transition').click();
    })
})
