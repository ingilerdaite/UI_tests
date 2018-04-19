'use strict';
var GeneralDataPage = function() {

	this.personalDocumentDropdown = element(by.model('patientInfo.personalDocumentClassifierCodeObject')); // kaip del by.linktext
	this.selectDocumentFromdropdown = element(by.linkText('Asmens tapatybės kortelė'));
	this.phoneNumberInput = element(by.id('phoneNumberInput'));
	this.educationDropdown = element(by.model('patientInfo.educationTypeClassifierCodeObject'));
	this.selectEducationDropdown = element(by.linkText('Pradinis'));
	this.nationalityInput = element(by.id('nationalityInput'));
	this.socialInsuranceDropdown = element(by.model('patientInfo.socialInsuranceClassifierCodeObject'));
	this.selectInsuranceDropdown = element(by.linkText('Dirbanti'));
	this.maritalStatusDropdown = element(by.model('patientInfo.socialInsuranceClassifierCodeObject'));
	this.selectMaritalStatusDropdown = element(by.linkText('Vedęs / Ištekėjusi'));
	this.contactPhoneNumberInput = element(by.model('contact.phoneNumber'));
	this.contactNameInput = element(by.model('contact.name'));
	this.saveButton = element(by.id('pregnancy-risks-save-button'));
	this.cancelChangeButton = element(by.css('[translate="button.cancel"]'));
	this.cancelVisitButton = element(by.css('[translate="visit.button.cancel"]'));
	this.confirmVisitButton = element(by.css('[translate="visit.button.complete"]'));

	//kaip del soninio meniu pasirinkimo page reikia ar ne?

	this.get = function() {
		browser.get(browser.params.url + "/#/patient-search"); //adresas su kodu pagal paciente 
	};

	this.generalData= function() {

		this.personalDocumentDropdown.click();
		this.selectDocumentFromdropdown.click();
		this.phoneNumberInput.sendKeys("+37069923230");
		this.educationDropdown.click();
		this.selectEducationDropdown.click();
		this.nationalityInput.sendKeys("Lietuvė")
		this.socialInsuranceDropdown.click();
		this.selectInsuranceDropdown.click();
		this.maritalStatusDropdown.click();
		this.selectMaritalStatusDropdown.click();
		this.contactPhoneNumberInput.sendKeys("+37069923230");
		this.contactNameInput.sendKeys("+37069923230");
		this.saveButton.click();
		this.cancelChangeButton.click();
		this.cancelVisitButton.click();
		this.confirmVisitButton.click();
	}

	this.ClearAllGeneralDataFields = function() {
		this.personalDocumentDropdown.clear();
		this.phoneNumberInput.clear();
		this.educationDropdown.clear();
		this.nationalityInput.clear();
		this.socialInsuranceDropdown.clear();
		this.maritalStatusDropdown.clear();
		this.contactPhoneNumberInput.clear();
		this.contactNameInput.clear();

	}

};

module.exports = GeneralDataPage;