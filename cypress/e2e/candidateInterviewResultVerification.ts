import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { Delete } from "../support/helpers/delete";
import { PrepareData } from "../support/helpers/prepareData";
import { CandidatePage } from "../support/pageObject/candidatePage";

//this is beforeEach
Given("Create Employee , Create Job Title ,Create ,Vacancy ,Create Candidate With Interview scheduled State", () => {
  cy.login("Admin", "admin123");
  PrepareData.prepareData();
  cy.logOut();
});
//this is equal  to it("I Login As Admin , And Access the candidate form And Change the candidate status to Interview Passed")
When("I Login As Admin , And Access the candidate form And Change the candidate status to Interview Passed", () => {
  cy.login("Admin", "admin123");
  CandidatePage.candidatePass();
});
Then("candidate's status should be Interview Passed", () => {
  CandidatePage.candidateAssertion("pass");
});

When("I Login As Admin , And Access the candidate form And Change the candidate status to Interview Failed", () => {
  cy.login("Admin", "admin123");
  CandidatePage.candidateFail();
});
Then("candidate's status should be Interview Failed", () => {
  CandidatePage.candidateAssertion("fail");
});

afterEach("", () => {
  cy.log("Deleting all data we made in the Given");
  Delete.deleteAll();
});
