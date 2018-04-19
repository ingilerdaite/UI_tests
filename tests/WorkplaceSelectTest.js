var LoginPage = require('../pages/VIISP_LoginPage.js');
var WorkplaceSelectPage = require('../pages/WorkplaceSelectPage.js');

describe("Workplace tests:", function() {
	var workplacePage = new WorkplaceSelectPage();

	beforeAll(function() { 
		var loginPage = new LoginPage();
			loginPage.get();
			loginPage.login(browser.params.defaultVIISPLoginUserName, browser.params.defaultVIISPUserNamePassword);
	});

	describe ("When work place select", function() {
		it ("Should navigate to home page", function() {

			workplacePage.selectFirstWorkPlace();
			var homePageGlobalTitle = element(by.css('[translate="global.title"]'));

			expect(homePageGlobalTitle.getText()).toEqual("NGN IS");
		});
	});
});