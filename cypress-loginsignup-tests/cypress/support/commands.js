// cypress/support/commands.js
Cypress.Commands.add('signup', (userDetails) => {
    cy.xpath('//a[normalize-space()="Signup / Login"]').click();
    cy.xpath("//input[@placeholder='Name']").type(userDetails.name);
    cy.xpath("//input[@data-qa='signup-email']").type(userDetails.email);
    cy.xpath("//button[normalize-space()='Signup']").click();
    
    cy.xpath("//input[@id='password']").type(userDetails.password);
    if (userDetails.gender === 'female') {
        cy.xpath("//input[@id='id_gender2']").check();
    } else {
        cy.xpath("//input[@id='id_gender1']").check();
    }
    cy.xpath("//input[@id='first_name']").type(userDetails.firstName);
    cy.xpath("//input[@id='last_name']").type(userDetails.lastName);
    cy.xpath("//input[@id='company']").type(userDetails.company);
    cy.xpath("//input[@id='address1']").type(userDetails.address);
    cy.xpath("//select[@id='country']").select('India');
    cy.xpath("//select[@id='state']").type(userDetails.state);
    cy.xpath("//input[@id='city']").type(userDetails.city);
    cy.xpath("//input[@id='zipcode']").type(userDetails.zipCode);
    cy.xpath("//input[@id='mobile_number']").type(userDetails.phoneNumber);
    cy.xpath("//button[normalize-space()='Create Account']").click();
});

Cypress.Commands.add('login', (email, password) => {
    cy.xpath('//a[normalize-space()="Signup / Login"]').click();
    cy.xpath("//input[@data-qa='login-email']").type(email);
    cy.xpath("//input[@placeholder='Password']").type(password);
    cy.xpath("//button[normalize-space()='Login']").click();
});
