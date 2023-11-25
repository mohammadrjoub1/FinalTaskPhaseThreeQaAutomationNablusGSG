export class CandidatePage {
  static uploadFile() {
    cy.get(".oxd-sidepanel").contains(".oxd-main-menu-item--name", "Recruitment").click();
    cy.get(".orangehrm-container").contains('[role="cell"]', "hassan jamal rjoub").parent().find(".bi-eye-fill").click({ force: true });
    cy.get(".oxd-switch-input").click({ force: true });
    cy.get(".oxd-form-actions > .oxd-button").click({ force: true });
    cy.get("input[type=file]").selectFile("ok.txt", { force: true });
    cy.get(".oxd-file-div").should("contain", "ok.txt");
  }
  static downloadFile() {
    cy.get("@candidateId").then((candidateId) => {
      cy.downloadFile(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidateAttachment/candidateId/${candidateId}`, "cypress/downloads", "ok.txt");
    });
  }
  static readFile() {
    cy.readFile("cypress/downloads/ok.txt", "utf-8").should("include", "mohammadRjoub");
  }
}
