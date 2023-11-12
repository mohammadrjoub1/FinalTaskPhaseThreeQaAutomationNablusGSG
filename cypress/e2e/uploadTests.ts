import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { PrepareData } from "../support/helpers/prepareData";
import { Delete } from "../support/helpers/delete";
import { CandidatePage } from "../support/pageObject/candidatePage";
afterEach("", () => {
  cy.log("Deleting all data we made in the Given");
  Delete.deleteAll();
});

//this is beforeEach
Given("Create Employee Create Job Title Create Vacancy Create Candidate With Application Initiated State", () => {
  cy.login("Admin", "admin123");
  PrepareData.prepareData("Initiated");
});
When("Login as Admin ,AND Access candidate form in Application Initiated state,AND Enable Edit candidate switch ,AND Upload a txt file to the Resume section ,AND Save the form", () => {
  cy.visit("/recruitment/viewCandidates");
  // CandidatePage.uploadFile();
  // CandidatePage.downloadFile();
});

Given("Create Employee Create Job Title Create Vacancy Create Candidate With Application Hired State", () => {
  cy.login("Admin", "admin123");
  PrepareData.prepareData("Hired");
});
When("Login as Admin ,AND Access candidate form in Hired state,AND Enable Edit candidate switch ,AND Upload a txt file to the Resume section ,AND Save the form", () => {
  cy.visit("/recruitment/viewCandidates");
  // CandidatePage.uploadFile();
  // CandidatePage.downloadFile();
});
Then("I should see that the content of the file is the same as the upload it one", () => {
  // CandidatePage.readFile();
});
