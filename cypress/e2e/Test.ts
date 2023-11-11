import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

//this is beforeEach
//okok
Given("Visit the home page", () => {
  cy.login("Admin", "admin123");
  
});
