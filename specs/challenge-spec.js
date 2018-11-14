var webTablesPage = require('../pageObjects/webTablesPage');
var addUserModalPartial = require('../pageObjects/addUserModalPartial');
var params = browser.params;

describe('Web Tables Page', function() {

  beforeEach(function() {
    webTablesPage.get();
    expect(webTablesPage.mainPage.isPresent()).toBeTruthy();
    expect(webTablesPage.mainPage.isDisplayed()).toBe(true);
  });

  it('should Add a user and validate the user has been added to the table', function() {
    expect(webTablesPage.addUserButton.isDisplayed()).toBe(true);
    webTablesPage.addUserButton.click();
    
    expect(addUserModalPartial.addUserModal.isDisplayed()).toBe(true);
    expect(addUserModalPartial.header.getText()).toEqual('Add User');
    addUserModalPartial.fillInformation(params.tc1.firstName, params.tc1.lastName, params.tc1.userName, params.tc1.passWord, params.tc1.customer, params.tc1.role, params.tc1.email, params.tc1.cellPhone);

    webTablesPage.validateInformation(params.tc1.firstName, params.tc1.lastName, params.tc1.userName, params.tc1.customer, params.tc1.role, params.tc1.email, params.tc1.cellPhone);
  });

  it('should Delete user User Name: novak and validate user has been deleted', function() {
    webTablesPage.deleteUsernameRegistry('novak');
    browser.sleep(5000);
  });

});