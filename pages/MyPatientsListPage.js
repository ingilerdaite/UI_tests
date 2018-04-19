'use strict';
var MyPatientsPage = function() {
	this.linkToPatientsSearch = element(by.css('[translate="patient.button.patient-search"]'));

	this.get = function() {
		browser.get(browser.params.url + "/#/my-patients");
	};

	this.navigateToPatientsSearch= function() {
		this.linkToPatientsSearch.Click();
	}
};

module.exports = MyPatientsPage;