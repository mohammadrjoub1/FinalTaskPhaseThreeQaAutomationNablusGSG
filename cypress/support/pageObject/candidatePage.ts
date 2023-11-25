export class CandidatePage {
  static candidateAssertion(status) {
    if (status === "pass") {
      CandidatePage.passStateAssertion();
    } else {
      CandidatePage.failStateAssertion();
    }
  }
  static passStateAssertion() {
    cy.get(".orangehrm-recruitment-status").should("contain", "Interview Passed");
    cy.get(".oxd-button--danger").should("contain", "Reject");
    cy.get(".orangehrm-recruitment-actions > :nth-child(2)").should("contain", "Schedule Interview");
    cy.get(".orangehrm-recruitment-actions > :nth-child(3)").should("contain", "Offer Job");
  }
  static failStateAssertion() {
    cy.get(".orangehrm-recruitment-status").should("contain", "Interview Failed");
    cy.get(".oxd-button").should("contain", "Reject");
  }
  static clickRecruitmentSidePanelTap() {
    cy.get(".oxd-sidepanel").contains(".oxd-main-menu-item--name", "Recruitment").click();
  }
  static clickEyeBallButton(item) {
    cy.get(".orangehrm-container").contains('[role="cell"]', item).parent().find(".bi-eye-fill").click({ force: true });
  }
  static clickPassButton() {
    cy.get(".oxd-button--success").click({ force: true });
  }
  static clickFailButton() {
    cy.get(".oxd-button--success").click({ force: true });
  }
  static clickPassSaveButton() {
    cy.get(".oxd-button--secondary").click();
  }
}
