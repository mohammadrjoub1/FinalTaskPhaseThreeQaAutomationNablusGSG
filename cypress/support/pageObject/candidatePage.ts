export class CandidatePage {
  static candidatePass() {
    cy.get(".oxd-sidepanel").contains(".oxd-main-menu-item--name", "Recruitment").click();
    cy.get(".orangehrm-container").contains('[role="cell"]', "hassan jamal rjoub").parent().find(".bi-eye-fill").click();
    cy.get(".oxd-button--success").click({ force: true });
    cy.get(".oxd-button--secondary").click();
  }
  static candidateFail() {
    cy.get(".oxd-sidepanel").contains(".oxd-main-menu-item--name", "Recruitment").click();
    cy.get(".orangehrm-container").contains('[role="cell"]', "hassan jamal rjoub").parent().find(".bi-eye-fill").click();
    cy.get(".orangehrm-recruitment-actions > :nth-child(2)").click( {force: true} );
    cy.get(".oxd-button--secondary").click();
  }
  static candidateAssertion(status) {
    if (status === "pass") {
      cy.get(".orangehrm-recruitment-status").should("contain", "Interview Passed");
      cy.get(".oxd-button--danger").should("contain", "Reject");
      cy.get(".orangehrm-recruitment-actions > :nth-child(2)").should("contain", "Schedule Interview");
      cy.get(".orangehrm-recruitment-actions > :nth-child(3)").should("contain", "Offer Job");
    } else {
      //fail
      cy.get(".orangehrm-recruitment-status").should("contain", "Interview Failed");
      cy.get(".oxd-button").should("contain", "Reject");
    }
  }
}
