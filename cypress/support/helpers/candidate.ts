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
}
