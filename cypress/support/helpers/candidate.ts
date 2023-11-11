export class Candidate {
  static createInterviewScheduledCandidate(firstName, middleName, lastName, email, dateOfApplication, vacancyId, interviewName, interviewDate, interviewTime, note, interviewerEmpNumbers) {
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
        });
      });
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
}
