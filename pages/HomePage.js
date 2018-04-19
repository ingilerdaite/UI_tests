'use strict';
var HomePage = function() {
	this.linkToPatientsList = element(by.css('[translate="main.nav.patients"]'));
	this.userNameContainer = element(by.css('[class="header-username"]')).element(by.tagName('div'));
	this.workplaceContainer = element(by.css('[class="workplace-names"]')).element(by.tagName('div'));

	this.get = function() {
		browser.get(browser.params.url + "/#/");
	};

	this.navigateToPatientsList= function() {
		this.linkToPatientsList.Click();
	}
};

module.exports = HomePage;