var LoginPage = require('../pages/VIISP_LoginPage.js');
var WorkplaceSelectPage = require('../pages/WorkplaceSelectPage.js');

describe ("When VIISP login correct", function() {
	it ("Should navigate to workplace page", function() {
	  
		var loginPage = new LoginPage();
		loginPage.get();
		loginPage.login('[label="rutakazl1005"]', "Admin1234567*");

		var workplacePage = new WorkplaceSelectPage();
		expect(workplacePage.titleContainer.getText()).toEqual("Pasirinkite darbo vietą");
	});

});