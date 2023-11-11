import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { PrepareData } from "../support/helpers/prepareData";
import { Delete } from "../support/helpers/delete";

//this is beforeEach
Given("Create Employee Create Job Title Create Vacancy Create Candidate With Application Initiated State", () => {
  cy.login("Admin", "admin123");
  PrepareData.prepareData();
});
afterEach("", () => {
  cy.log("Deleting all data we made in the Given");
  
  Delete.deleteAll();
});
// When("", () => {});
