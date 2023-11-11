export class CandidatePage {
  static uploadFile() {
    cy.get(".oxd-sidepanel").contains(".oxd-main-menu-item--name", "Recruitment").click();
    cy.get(".orangehrm-container").contains('[role="cell"]', "hassan jamal rjoub").parent().find(".bi-eye-fill").click({ force: true });
  }
}
