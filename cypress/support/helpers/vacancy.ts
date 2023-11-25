export class Vacancy {
  static createVacancy(vacancyName, jobTitleId, employeeNumber, numOfPositions, description) {
    cy.api({
      method: "POST",
      url: "/api/v2/recruitment/vacancies",
      body: {
        name: vacancyName,
        jobTitleId: jobTitleId,
        employeeId: employeeNumber,
        numOfPositions: numOfPositions,
        description: description,
        status: true,
        isPublished: true,
      },
    }).then((response) => {
      cy.wrap(response.body.data.id).as("vacancyId");
    });
  }
  static deleteVacancy(vacancyId) {
    cy.api({
      method: "DELETE",
      url: "/api/v2/recruitment/vacancies",
      body: {
        ids: [vacancyId],
      },
    });
  }
}
