'use strict';
var PatientCardPage = function() {
	this.113aFormButton = element(by.id('patient-open-113a-form'));
	this.96aFormButton = element(by.id('patient-open-96a-form'));
	this.generalDataButton = element(by.css('[translate="patient.button.form"]'));
	this.specialDataButton = element(by.css('[translate="patient.button.summary"]'));
	

	this.get = function() {
		browser.get(browser.params.url + "/#/my-patients/patient-card");
	};

	this.click113aFormButton = function() {
		this.113aFormButton.click();
	}

	this.click96aFormButton = function() {
		this.96aFormButton.click();
	}

	this.clickGeneralDataButton = function() {
		this.generalDataButton.click();
	}

	this.clickSpecialDataButton = function() {
		this.specialDataButton.click();

	}
	
};

module.exports = PatientCardPage;