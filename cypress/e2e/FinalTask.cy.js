import BasePage from "../pageObject/base.page";

describe('template spec', () => {
  beforeEach( () => {
    BasePage.visit();
  });
  it('Form', () => {
    BasePage.firstName.type('Doe');
    BasePage.lastName.type('John');
    BasePage.userEmail.type('doe.john@va.lv');
    BasePage.gender.check({force: true});
    BasePage.phoneNr.type('3712888888');
    BasePage.birthDate.click();
    BasePage.birthYear.select('1930');
    BasePage.birthMonth.select('February');
    BasePage.birthDay.click();
    BasePage.subject.type('Economics{enter}');
    BasePage.hobbies.check({force: true});
    BasePage.uploadPicture.selectFile('cypress/e2e/files/dogo.jpg');
    BasePage.currentAddress.type('This is Doe Johns address');
    BasePage.selectState.type('NCR',{ force: true }).type('{enter}');
    BasePage.selectCity.type('Delhi',{ force: true }).type('{enter}');
    BasePage.submitButton.click({ force: true });

    //Validate
    BasePage.table.should('contain','Doe John');
    BasePage.table.should('contain','doe.john@va.lv');
    BasePage.table.should('contain','Female');
    BasePage.table.should('contain','3712888888');
    BasePage.table.should('contain','28 February,1930');
    BasePage.table.should('contain','Economics');
    BasePage.table.should('contain','Music');
    BasePage.table.should('contain','dogo.jpg');
    BasePage.table.should('contain','This is Doe Johns address');
    BasePage.table.should('contain','NCR');
    BasePage.table.should('contain','Delhi');
  })
})