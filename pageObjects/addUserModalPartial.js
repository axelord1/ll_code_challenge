var addUserModalPartial = function() {

    this.addUserModal = element(by.css('.modal.ng-scope'));
    this.header = element(by.css('.modal-header'));
    this.firstNameField = element(by.css('[name="FirstName"]'));
    this.lastNameField = element(by.css('[name="LastName"]'));
    this.userNameField = element(by.css('[name="UserName"]'));
    this.passwordField = element(by.css('[name="Password"]'));
    this.customerRadioButton = element.all(by.css('[type="radio"]'));
    this.roleDropDownList = element(by.css('[name="RoleId"]'));
    this.emailField = element(by.css('[name="Email"]'));
    this.cellPhoneField = element(by.css('[name="Mobilephone"]'));
    this.closeButton = element(by.css('.btn.btn-danger'));
    this.saveButton = element(by.css('.btn.btn-success'));

    this.fillInformation = function(firstName, lastName, userName, password, customer, role, email, cellphone) {
        this.firstNameField.sendKeys(firstName);
        this.lastNameField.sendKeys(lastName);
        this.userNameField.sendKeys(userName);
        this.passwordField.sendKeys(password);
        (customer === 'AAA') ? this.customerRadioButton.get(0).click() : this.customerRadioButton.get(1).click() ;
        //value=0->Sales Team, value=1->Customer, value=2->Admin
        //this.roleDropDownList.$('[value="' + role +'"]').click()
        switch(role){
            case 'Sales Team':
                this.roleDropDownList.$('[value="0"]').click();
                break;
            case 'Customer':
                this.roleDropDownList.$('[value="1"]').click();
                break;
            case 'Admin':
                this.roleDropDownList.$('[value="2"]').click();
                break;
            default:
                throw new Error('option is invalid');
        }
        this.emailField.sendKeys(email);
        this.cellPhoneField.sendKeys(cellphone);
        
        return this.saveButton.click();
    };

  };
  module.exports = new addUserModalPartial();