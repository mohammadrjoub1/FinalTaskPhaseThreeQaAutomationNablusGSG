import { Candidate } from "./candidate";
import { Employee } from "./employee";
import { JobTitle } from "./jobTitle";
import { Vacancy } from "./vacancy";

export class Delete {
  static deleteAll() {
    cy.get("@employeeNumber").then((employeeNumber) => {
      Employee.deleteEmp(employeeNumber);
    });
    cy.get("@jobTitleId").then((jobTitleId) => {
      JobTitle.deleteJobTitle(jobTitleId);
    });
    cy.get("@vacancyId").then((vacancyId) => {
      Vacancy.deleteVacancy(vacancyId);
    });
    cy.get("@candidateId").then((candidateId) => {
      Candidate.deleteCandidate(candidateId);
    });
  }
}
