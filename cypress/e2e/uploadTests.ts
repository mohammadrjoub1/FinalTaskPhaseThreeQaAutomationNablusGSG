import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { Delete } from "../support/helpers/delete";
import { CandidatePage } from "../support/pageObject/candidatePage";
import { Employee } from "../support/helpers/employee";
import { JobTitle } from "../support/helpers/jobTitle";
import { Vacancy } from "../support/helpers/vacancy";
import { Candidate } from "../support/helpers/candidate";
afterEach("", () => {
  cy.log("Deleting all data we made in the Given");
  Delete.deleteAll();
});

//this is  beforeEach
Given("Create Employee Create Job Title Create Vacancy Create Candidate With Application Initiated State", () => {
  cy.login("Admin", "admin123");

  Candidate.createCandidate("Initiated");
});

Given("Create Employee", () => {
  cy.login("Admin", "admin123");
  cy.fixture("employee").then((data) => {
    Employee.createEmployee(data.firstName, data.middleName, data.lastName, data.employeeId, data.username, data.password);
  });
});
Given("Create Job Title", () => {
  cy.fixture("jobTitle").then((data) => {
    JobTitle.createJobTitle(data.title, data.description, data.note);
  });
});
Given("Create Vacancy", () => {
  cy.fixture("vacancy").then((data) => {
    cy.get("@jobTitleId").then((jobTitleId) => {
      cy.get("@employeeNumber").then((employeeNumber) => {
        Vacancy.createVacancy(data.name, jobTitleId, employeeNumber, data.numOfPositions, data.description);
      });
    });
  });
});
Given("Create Candidate With Application Initiated State", () => {
  Candidate.createCandidate("Initiated");
});
Given("Create Candidate With Application Hired State", () => {
  Candidate.createCandidate("Hired");
});

When("Login as Admin, AND Access candidate form in Application Initiated state, AND Enable Edit candidate switch, AND Upload a txt file to the Resume section, AND Save the form", () => {
  cy.visit("/recruitment/viewCandidates");
  CandidatePage.uploadFile();
});
When("Download The File", () => {
  cy.visit("/recruitment/viewCandidates");
  CandidatePage.downloadFile();
});

Given("Create Employee Create Job Title Create Vacancy Create Candidate With Application Hired State", () => {
  cy.login("Admin", "admin123");
  Candidate.createCandidate("Hired");
});
When("Login as Admin, AND Access candidate form in Application Hired state, AND Enable Edit candidate switch, AND Upload a txt file to the Resume section, AND Save the form", () => {
  cy.visit("/recruitment/viewCandidates");
  CandidatePage.uploadFile();
});
When("Download The File", () => {
  cy.visit("/recruitment/viewCandidates");
  CandidatePage.downloadFile();
});
Then("I should see that the content of the file is the same as the upload it one", () => {
  CandidatePage.readFile();
});
