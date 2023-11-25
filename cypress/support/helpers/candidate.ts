export class Candidate {
  static createCandidateInitiatedState(firstName, middleName, lastName, email, dateOfApplication, vacancyId) {
    cy.api({
      method: "POST",
      url: "/api/v2/recruitment/candidates",
      body: {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        email: email,
        contactNumber: null,
        keywords: null,
        comment: null,
        dateOfApplication: dateOfApplication,
        consentToKeepData: false,
        vacancyId: vacancyId,
      },
    }).then((response) => {
      cy.wrap(response.body.data.id).as(`candidateId`);
    });
  }
  static deleteCandidate(candidateId) {
    cy.api({
      method: "DELETE",
      url: "/api/v2/recruitment/candidates",
      body: {
        ids: [candidateId],
      },
    });
  }
  static createCandidatehireState(firstName, middleName, lastName, email, dateOfApplication, vacancyId, interviewName, interviewDate, interviewTime, note, interviewerEmpNumbers) {
    cy.api({
      method: "POST",
      url: "/api/v2/recruitment/candidates",
      body: {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        email: email,
        contactNumber: null,
        keywords: null,
        comment: null,
        dateOfApplication: dateOfApplication,
        consentToKeepData: false,
        vacancyId: vacancyId,
      },
    }).then((response) => {
      cy.wrap(response.body.data.id).as(`candidateId`);

      cy.api({
        method: "PUT",
        url: `/api/v2/recruitment/candidates/${response.body.data.id}/shortlist`,
        body: {
          note: null,
        },
      }).then(() => {
        cy.api({
          method: "POST",
          url: `/api/v2/recruitment/candidates/${response.body.data.id}/shedule-interview`,
          body: {
            interviewName: interviewName,
            interviewDate: interviewDate,
            interviewTime: interviewTime,
            note: note,
            interviewerEmpNumbers: [interviewerEmpNumbers],
          },
        }).then((response2) => {
          cy.api({
            method: "PUT",
            url: `/api/v2/recruitment/candidates/${response.body.data.id}/interviews/${response2.body.data.id}/pass`,
            body: {
              note: null,
            },
          }).then(() => {
            cy.api({
              method: "PUT",
              url: `/api/v2/recruitment/candidates/${response.body.data.id}/job/offer`,
              body: {
                note: null,
              },
            }).then(() => {
              cy.api({
                method: "PUT",
                url: `/api/v2/recruitment/candidates/${response.body.data.id}/hire`,
                body: {
                  note: null,
                },
              });
            });
          });
        });
      });
    });
  }

  static createCandidate(state) {
    if (state === "Hired") {
      cy.log("Creating   Hired candidate");
      cy.fixture("candidate").then((data) => {
        cy.get("@employeeNumber").then((employeeNumber) => {
          cy.get("@vacancyId").then((vacancyId) => {
            Candidate.createCandidatehireState(data.firstName, data.middleName, data.lastName, data.email, data.dateOfApplication, vacancyId, data.interviewName, data.interviewDate, data.interviewTime, data.note, employeeNumber);
          });
        });
      });
      Candidate.candidateStatus("Hired");
    } else {
      cy.log("Creating Initiated candidate");

      cy.fixture("candidate").then((data) => {
        cy.get("@employeeNumber").then((employeeNumber) => {
          cy.get("@vacancyId").then((vacancyId) => {
            Candidate.createCandidateInitiatedState(data.firstName, data.middleName, data.lastName, data.email, data.dateOfApplication, vacancyId);
          });
        });
      });
      Candidate.candidateStatus("Application Initiated");
    }
  }
  static candidateStatus(state) {
    cy.visit("/recruitment/viewCandidates");
    cy.get(".orangehrm-container").contains("div", "hassan jamal rjoub").parent().parent().contains("div", `${state}`);
  }
}
