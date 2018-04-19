'use strict';
var LogoutPage = function() {
	this.logoutButton = element(by.id('logout-button'));
	

	this.get = function() {
		browser.get(browser.params.url + "/#/");
	};

	this.logout = function() {
		this.logoutButton.click();
	}

};

module.exports = LogoutPage;