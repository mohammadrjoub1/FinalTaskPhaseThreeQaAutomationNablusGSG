import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { Delete } from "../support/helpers/delete";
import { CandidatePage } from "../support/pageObject/candidatePage";
import { Employee } from "../support/helpers/employee";
import { JobTitle } from "../support/helpers/jobTitle";
import { Vacancy } from "../support/helpers/vacancy";
import { Candidate } from "../support/helpers/candidate";

//this is beforeEach
Given("The system has an Employee record", () => {
  cy.login("Admin", "admin123");
  cy.fixture("employee").then((data) => {
    Employee.createEmployee(data.firstName, data.middleName, data.lastName, data.employeeId, data.username, data.password);
  });
  cy.logOut();
});
Given("The system has a Job Title record", () => {
  cy.login("Admin", "admin123");
  cy.fixture("jobTitle").then((data) => {
    JobTitle.createJobTitle(data.title, data.description, data.note);
  });
  cy.logOut();
});
Given("The system has a Vacancy record", () => {
  cy.login("Admin", "admin123");
  cy.fixture("vacancy").then((data) => {
    cy.get("@jobTitleId").then((jobTitleId) => {
      cy.get("@employeeNumber").then((employeeNumber) => {
        Vacancy.createVacancy(data.name, jobTitleId, employeeNumber, data.numOfPositions, data.description);
      });
    });
  });
  cy.logOut();
});
Given("The system has a Candidate With Interview scheduled State record", () => {
  cy.login("Admin", "admin123");
  cy.fixture("candidate").then((data) => {
    cy.get("@employeeNumber").then((employeeNumber) => {
      cy.get("@vacancyId").then((vacancyId) => {
        Candidate.createInterviewScheduledCandidate(data.firstName, data.middleName, data.lastName, data.email, data.dateOfApplication, vacancyId, data.interviewName, data.interviewDate, data.interviewTime, data.note, employeeNumber);
      });
    });
  });
  cy.logOut();
});

//this is equal  to it("I Login As Admin , And Access the candidate form And Change the candidate status to Interview Passed")
When("The user Login As Admin , And Access the candidate form And Change the candidate status to Interview Passed", () => {
  cy.login("Admin", "admin123");
  CandidatePage.clickRecruitmentSidePanelTap();
  CandidatePage.clickEyeBallButton("hassan jamal rjoub");
  CandidatePage.clickPassButton();
  CandidatePage.clickPassSaveButton;
});
Then("candidate's status should be Interview Passed", () => {
  CandidatePage.candidateAssertion("pass");
});

When("The user Login As Admin , And Access the candidate form And Change the candidate status to Interview Failed", () => {
  cy.login("Admin", "admin123");
  CandidatePage.clickRecruitmentSidePanelTap();
  CandidatePage.clickEyeBallButton("hassan jamal rjoub");
  CandidatePage.clickFailButton();
  CandidatePage.clickPassSaveButton();
});
Then("candidate's status should be Interview Failed", () => {
  CandidatePage.candidateAssertion("fail");
});

afterEach("", () => {
  cy.log("Deleting all data we made in the Given");
  Delete.deleteAll();
});
