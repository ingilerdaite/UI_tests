var LoginPage = require('../pages/VIISP_LoginPage.js');
var LogoutPage = require('../pages/LogoutPage.js');

describe ("When press logout button", function() {
	it ("Should logout and navigate to login page", function() {
		var loginPage = new LoginPage();
		var logoutPage = new LogoutPage();
		logoutPage.get();
		logoutPage.logout();

		expect(loginPage.loginTitle.getText()).toEqual("Prisijunkite");
	});
});