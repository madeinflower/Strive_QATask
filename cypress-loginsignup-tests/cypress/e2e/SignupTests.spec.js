import { locators } from '../support/locators';
import { generateRandomName, generateRandomEmail, generateRandomPassword, generateRandomPhoneNumber, generateRandomAddress, generateRandomCity, generateRandomZipCode, generateRandomLastName, generateRandomCompany, generateRandomState } from '../support/utils';

describe('User Signup Tests on Automation Exercise', () => {

    beforeEach(() => {
        cy.visit('https://www.automationexercise.com');
    });

    it('signup user with valid credentials (female)', () => {
        const randomName = generateRandomName();
        const randomEmail = generateRandomEmail();
        const randomPassword = generateRandomPassword();
        const randomFirstName = randomName;
        const randomLastName = generateRandomLastName();
        const randomCompany = generateRandomCompany();
        const randomState = generateRandomState();
        const randomCity = generateRandomCity();
        const randomZipCode = generateRandomZipCode();
        const randomPhoneNumber = generateRandomPhoneNumber();

        const userDetails = {
            name: randomName,
            email: randomEmail,
            password: randomPassword,
            gender: 'female',
            firstName: randomFirstName,
            lastName: randomLastName,
            company: randomCompany,
            address: generateRandomAddress(),
            country: 'Israel',
            state: randomState,
            city: randomCity,
            zipCode: randomZipCode,
            phoneNumber: randomPhoneNumber
        };

        cy.xpath(locators.signupLoginButton).click();


        cy.signup(userDetails);
        cy.xpath(locators.loggedinAsTab, { timeout: 10000 }).should('contain', randomFirstName).and('be.visible');
    });

    it('signup user with valid credentials (male)', () => {
        const randomName = generateRandomName();
        const randomEmail = generateRandomEmail();
        const randomPassword = generateRandomPassword();
        const randomFirstName = randomName;
        const randomLastName = generateRandomLastName();
        const randomCompany = generateRandomCompany();
        const randomState = generateRandomState();
        const randomCity = generateRandomCity();
        const randomZipCode = generateRandomZipCode();
        const randomPhoneNumber = generateRandomPhoneNumber();

        const userDetails = {
            name: randomName,
            email: randomEmail,
            password: randomPassword,
            gender: 'male',
            firstName: randomFirstName,
            lastName: randomLastName,
            company: randomCompany,
            address: generateRandomAddress(),
            country: 'India',
            state: randomState,
            city: randomCity,
            zipCode: randomZipCode,
            phoneNumber: randomPhoneNumber
        };

        cy.xpath(locators.signupLoginButton).click();

        cy.signup(userDetails);
        cy.xpath(locators.loggedinAsTab, { timeout: 10000 }).should('contain', randomFirstName).and('be.visible');
    });

    it('signup user with existing email', () => {
        cy.xpath(locators.signupLoginButton).click();
        cy.xpath(locators.newUserSignupTitle).should('be.visible');
        
        cy.xpath(locators.nameInputField).type('Tetiana');
        cy.xpath(locators.emailSignupInputField).type('tatsenko.tetiana4@gmail.com');
        cy.xpath(locators.signupButton).click();

        cy.xpath(locators.emailAlreadyExistMessage).should('contain', 'Email Address already exist!').and('be.visible');
    });

    it('signup user with invalid email format', () => {
        cy.xpath(locators.signupLoginButton).click();
        cy.xpath(locators.newUserSignupTitle).should('be.visible');
        
        cy.xpath(locators.nameInputField).type('Tetiana');
        cy.xpath(locators.emailSignupInputField).type('tatsenko.tetiana4@gmail');
        cy.xpath(locators.signupButton).click();
        
        cy.xpath(locators.emailFormatIsIncorrect).should('contain', 'Email format is incorrect!').and('be.visible'); // this error message I made as an example as there is no such message in realization
    });
});
