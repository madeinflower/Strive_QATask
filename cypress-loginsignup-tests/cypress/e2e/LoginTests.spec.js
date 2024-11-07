import { locators } from '../support/locators';

describe('User Login Tests on Automation Exercise', () => {

    beforeEach(() => {
        cy.visit('https://www.automationexercise.com');
    });

    it('logs in successfully with valid credentials', () => {
        const email = 'tatsenko.tetiana@gmail.com';
        const password = 'Qwerty12345';
        cy.login(email, password);
        cy.xpath(locators.loggedinAsTab).should('be.visible');
    });

    it('logs in with invalid email', () => {
        const invalidEmail = 'tatsenko.tetian' + Math.random().toString(36).substring(7) + '@gmail.com';
        cy.login(invalidEmail, 'Qwerty12345');
        cy.xpath(locators.invalidCredentialsMessage).should('be.visible')
            .and('contain', 'Your email or password is incorrect');
    });

    it('logs in with invalid password', () => {
        const invalidPassword = 'InvalidPassword123';
        cy.login('tatsenko.tetiana@gmail.com', invalidPassword);
        cy.xpath(locators.invalidCredentialsMessage).should('be.visible')
            .and('contain', 'Your email or password is incorrect');
    });

    it('logs in with empty fields', () => {
        cy.login('', '');
        cy.xpath(locators.invalidCredentialsMessage).should('be.visible')
            .and('contain', 'Your email or password is incorrect'); // I assume there is bug in realization here, cause there is no such message, I just make an example of text here
    });
});
