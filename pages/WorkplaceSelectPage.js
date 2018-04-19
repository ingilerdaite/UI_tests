'use strict';
var WorkplaceSelectPage = function() {
	this.titleContainer = element(by.css('[translate="workplace-select.choose"]', ''));
  	this.workplaceFirstItem = element(by.css ('[class="workplace ng-scope"]', ''));
  	this.workplaceLogoutButton = element(by.id('logout-button-first'));

	this.get = function() {
		browser.get(browser.params.url + "/#/workplace-select");
	};

	this.selectFirstWorkPlace = function() {
		this.workplaceFirstItem.click();
	};

};

module.exports = WorkplaceSelectPage;