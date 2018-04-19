'use strict';
var CreatePreviousPregnancyPage = function() {

	this.eventType = element(by.model('pregnancy.typeObject'));
	this.eventDate = element(by.id('eventDateInput'));
	this.pregnancyWeek = element(by.model('pregnancy.pregnancyWeek'));
	this.pregnancy = element(by.css('[translate="pregnancy.history.modal.singleNewbornY"]'));
	this.babyconditionDropDown = element(by.model('pregnancy.fetusConditionsObject'));
	this.genderDropdown = element(by.model('pregnancy.gender'));
	this.weightInput = element(by.model('pregnancy.weight'));
	this.childbirthWayDropdown = element(by.model('pregnancy.childbirthTypeObject'));
	



	//kaip del soninio meniu pasirinkimo page reikia ar ne? nes paklikinti reikia ant pasirinkimu

	this.get = function() {
		browser.get(browser.params.url + "/#/patient-search"); //adresas sus kodu pagal paciente 
	};

	this.previousPregnancy= function() {

		this.eventType.click();
		this.eventDate.click(); //dataos ivedimas
		this.pregnancyWeek.sendKeys('40');
		this.pregnancy.click();
		this.babyconditionDropDown.click();
		this.genderDropdown.click();
		this.weightInput.sendKeys('3500');
		this.childbirthWayDropdown.click();
		
		
	}

};

module.exports = CreatePreviousPregnancyPage;