import { Candidate } from "./candidate";
import { Employee } from "./employee";
import { JobTitle } from "./jobTitle";
import { Vacancy } from "./vacancy";

export class PrepareData {
  static prepareData(state) {
    cy.fixture("employee").then((data) => {
      Employee.createEmployee(data.firstName, data.middleName, data.lastName, data.employeeId, data.username, data.password);
    });
    cy.fixture("jobTitle").then((data) => {
      JobTitle.createJobTitle(data.title, data.description, data.note);
    });
    cy.fixture("vacancy").then((data) => {
      cy.get("@jobTitleId").then((jobTitleId) => {
        cy.get("@employeeNumber").then((employeeNumber) => {
          Vacancy.createVacancy(data.name, jobTitleId, employeeNumber, data.numOfPositions, data.description);
        });
      });
    });

    if (state === "Hired") {
      cy.log("Creating   Hired candidate");
      cy.fixture("candidate").then((data) => {
        cy.get("@employeeNumber").then((employeeNumber) => {
          cy.get("@vacancyId").then((vacancyId) => {
            Candidate.createCandidatehireState(data.firstName, data.middleName, data.lastName, data.email, data.dateOfApplication, vacancyId, data.interviewName, data.interviewDate, data.interviewTime, data.note, employeeNumber);
          });
        });
      });
      PrepareData.candidateStatus("Hired");
    } else {
      cy.log("Creating Initiated candidate");

      cy.fixture("candidate").then((data) => {
        cy.get("@employeeNumber").then((employeeNumber) => {
          cy.get("@vacancyId").then((vacancyId) => {
            Candidate.createCandidateInitiatedState(data.firstName, data.middleName, data.lastName, data.email, data.dateOfApplication, vacancyId);
          });
        });
      });
      PrepareData.candidateStatus("Application Initiated");
    }
  }
  static candidateStatus(state) {
    cy.visit("/recruitment/viewCandidates");
    cy.get(".orangehrm-container").contains("div", "hassan jamal rjoub").parent().parent().contains("div", `${state}`);
  }
}
