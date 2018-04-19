'use strict';
var CarePlanPage = function() {

	this.clickField1 = element(by.id('pcp-nv-1'));
	this.clickField1 = element(by.id('pcp-nv-2'));
	this.clickField1 = element(by.id('pcp-nv-3'));
	this.doctorDropDown = element(by.model('nextPlan.actionCodeObject'));
	this.saveButton = element(by.css('[class="glyphicon glyphicon-floppy-save"]'));
	this.cancelChangeButton = element(by.css('[translate="button.cancel"]'));
	this.cancelVisitButton = element(by.css('[translate="visit.button.cancel"]'));
	this.confirmVisitButton = element(by.css('[translate="visit.button.complete"]'));



	this.get = function() {
		browser.get(browser.params.url + "/#/patient-search"); //adresas su kodu pagal paciente 
	};

	this.carePlan= function() {

		this.clickField1. //?
		this.clickField1. //?
		this.clickField1. //?
		this.doctorDropDown.click();
		this.saveButton.click();
		this.cancelChangeButton.click();
		this.cancelVisitButton.click();
		this.confirmVisitButton.click();
		
	}
};

module.exports = CarePlanPage;



		//browser.actions().doubleClick(element(by.id('pcp-nv-1'))).perform();
		//browser.actions().doubleClick(element(by.id('pcp-nv-2'))).perform();
		//browser.actions().doubleClick(element(by.id('pcp-nv-3'))).perform();
		