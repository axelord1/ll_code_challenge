var webTablesPage = function() {

    this.mainPage = element(by.css('[ng-controller="mainCtrl"]'));
    this.addUserButton = element.all(by.css('.btn.btn-link')).first();
    this.firstEntryRow = element.all(by.css('.smart-table-data-row')).get(0);
    this.allRows = element.all(by.css('.smart-table-data-row'));
    this.allCells = element.all(by.css('.smart-table-data-cell'));
    //this.entryCellInRow = element(by.css('.smart-table-data-row')).$$(by.css('.smart-table-data-cell'));
    this.deleteUserButton = element.all(by.css('[ng-click="delUser()"]'));
  
    this.get = function() {
      return browser.get('http://www.way2automation.com/angularjs-protractor/webtables/');
    };

    this.validateInformation = function(firstName, lastName, userName, customer, role, email, cellphone) {
      return this.firstEntryRow.$$('.smart-table-data-cell').getText().then(function (value) {
        console.log(value.length);
        console.log(value);
        expect(value[0]).toEqual(firstName);
        expect(value[1]).toEqual(lastName);
        expect(value[2]).toEqual(userName);
        //expect(value[4]).toEqual('Company '+customer);
        expect(value[5]).toEqual(role);
        expect(value[6]).toEqual(email);
        expect(value[7]).toEqual(cellphone);
      });
    };
  
    this.deleteUsernameRegistry = function(userName) {
      return element.all(by.css('[ng-click="delUser()"]')).getText().then(function (value) {
        console.log(value)
        console.log(value.length);
        for(i=0; i < value.length; i++){
          console.log(i);
          value[i].element.$$(by.css('.smart-table-data-cell')).get(2).getText().then(function (cells) {
            console.log(cells);
            if(cells===userName){
              
            }
          });
          //if(value.$$('.smart-table-data-cell').get(2).getText() === userName){
            //console.log(userName);
          //}
        }
      });
      // for(i=0; i > this.deleteUserButton.length; i++){
      //   console.log(this.deleteUserButton.length);
      //   this.deleteUserButton.click();
      // }
    };

    this.verifyDeletedRegistry = function(name) {
      element.all(by.css('.smart-table-data-row')).then(function(rows){
        console.log(rows.length);
        //for(var i; i>rows.length; i++)
          //if(rows.element(by.css('.smart-table-data-cell')).getText() === name)
      });
    };

  };
  module.exports = new webTablesPage();