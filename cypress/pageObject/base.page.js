class BasePage {
    static get url() {
      return "/";
    }
  
    static visit() {
      cy.visit(this.url);
    }
    static get firstName () {
        return cy.get("[id='firstName']");
    }
    static get lastName () {
        return cy.get("[id='lastName']");
    }
    static get userEmail () {
        return cy.get("[id='userEmail']");
    }
    static get gender    () {
        return cy.get("[id='gender-radio-2']");
    }
    static get phoneNr () {
        return cy.get("[id='userNumber']");
    }
    static get birthDate () {
        return cy.get("[id='dateOfBirthInput']");
    }
    static get birthYear(){
        return cy.get(".react-datepicker__year-select");
    }
    static get birthMonth(){
        return cy.get('.react-datepicker__month-select');
    }
    static get birthDay(){
        return cy.get("[aria-label='Choose Friday, February 28th, 1930']");
    }
    static get subject () {
        return cy.get("[id='subjectsInput']").click();
    }
    static get hobbies () {
        return cy.get("[id='hobbies-checkbox-3']");
    }
    static get uploadPicture(){
        return cy.get("[id='uploadPicture']");
    }
    static get uploadPicture(){
        return cy.get("[id='uploadPicture']");
    }
    static get currentAddress(){
        return cy.get("[id='currentAddress']");
    }
    static get selectState(){
        return cy.get("#react-select-3-input");
    }
    static get selectCity(){
        return cy.get("#react-select-4-input");
    }
    static get submitButton(){
        return cy.get("[id='submit']");
    }
    static get table(){
        return cy.get("table.table tbody tr").get("td");
    }
  }
  
  export default BasePage;