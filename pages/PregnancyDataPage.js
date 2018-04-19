'use strict';
var PregnancyDataPage = function() {

	this.menstrualCycle = element(by.cssContainingText('[translate="pregnancy.info.menstrual_cycle.regular"]'));
	this.latestMenstruationDate =element(by.id('latestMenstruationDate'));
	this.monthlyDuration = element(by.id('menstruationDurationInDays'));
	this.cycleDuration = element(by.id('menstrualCyclePeriodInDays'));
	this.approvedTerm = element(by.id('childbirthDate'));
	this.folicUse = element(by.model('pregnancyData.folicAcidBeforePregnancy'));
	this.saveButton = element(by.id('pregnancy-save-button'));
	this.cancelChangeButton = element(by.css('[translate="button.cancel"]'));
	this.cancelVisitButton = element(by.css('[translate="visit.button.cancel"]'));
	this.confirmVisitButton = element(by.css('[translate="visit.button.complete"]'));



	//kaip del soninio meniu pasirinkimo page reikia ar ne? nes paklikinti reikia ant pasirinkimu

	this.get = function() {
		browser.get(browser.params.url + "/#/patient-search"); //adresas sus kodu pagal paciente 
	};

	this.pregnancyData= function() {

		this.menstrualCycle.click();
		this.latestMenstruationDate.click(); //datos pasirinkimas
		this.monthlyDuration.sendKeys('7');
		this.cycleDuration.sendKeys('27');
		this.approvedTerm.click(); //datos pasirinkimas
		this.folicUse.click();
		this.saveButton.(click);
		this.cancelChangeButton.(click);
		this.cancelVisitButton.(click);
		this.confirmVisitButton.(click);
		
	}

	this.ClearAllPregnancyDataFields = function() {
		this.monthlyDuration.clear();
		this.cycleDuration.clear();
	}

};

module.exports = PregnancyDataPage;





		

		