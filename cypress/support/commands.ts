/// <reference types="cypress" />
require("cypress-downloadfile/lib/downloadFileCommand");

import "cypress-file-upload";

// commands.js or commands.ts

// cypress/support/commands.ts

Cypress.Commands.add("login", (username: string, password: string) => {
cy.intercept('POST', '/auth/login').as('loginRequest');

cy.visit("/auth/login");

cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(username);
cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(password);

cy.get(".oxd-button").click();

cy.wait('@loginRequest', { timeout: 10000 }); // Use an appropriate timeout value

cy.wait(2000); 
});

Cypress.Commands.add("logOut", () => {
  cy.get(".oxd-userdropdown-tab > .oxd-icon").click();
  cy.get(":nth-child(4) > .oxd-userdropdown-link").click();
});
