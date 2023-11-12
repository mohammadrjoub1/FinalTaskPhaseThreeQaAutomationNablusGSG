import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { PrepareData } from "../support/helpers/prepareData";
import { Delete } from "../support/helpers/delete";
import { CandidatePage } from "../support/pageObject/candidatePage";

//this is beforeEach
Given("Create Employee Create Job Title Create Vacancy Create Candidate With Application Initiated State", () => {
  cy.login("Admin", "admin123");
  PrepareData.prepareData();
});
afterEach("", () => {
  cy.log("Deleting all data we made in the Given");

  Delete.deleteAll();
});
When("I Login as an Admin ,AND Access the candidate form ,AND Enable Edit candidate switch ,AND Upload a txt file to the Resume section ,AND Save the form. Download the uploaded file", () => {
  CandidatePage.uploadFile();
  CandidatePage.downloadFile();
  CandidatePage.readFile();
});
