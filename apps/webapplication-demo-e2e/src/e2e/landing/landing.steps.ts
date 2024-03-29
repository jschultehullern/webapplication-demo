import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import { getGreeting } from '../../support/app.po';

Given('the user is logged in', () => {
  cy.login('my-email@something.com', 'myPassword');
});

Then('the Welcome message is displayed', () => {
  getGreeting().contains(/Welcome/);
});
