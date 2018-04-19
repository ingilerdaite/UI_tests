'use strict';
var PatientsSearchPage = function() {
	this.personalCodeInput = element(by.id('codeSearch'));
	this.nameInput = element(by.id('nameSearch'));
	this.esiNumberInput = element(by.id('esiNumber'));
	this.searchButton = element(by.css('[translate="button.do_search"]'));
	this.searchResultEsiNumber = element(by.binding('item.esiNumber'));

	this.get = function() {
		browser.get(browser.params.url + "/#/patient-search");
	};

	this.searchByPersonalCode= function(personalCode) {
		this.personalCodeInput.sendKeys(personalCode);
		this.searchButton.click();
	}

	this.searchByName = function(name){
		this.nameInput.sendKeys(name);
		this.searchButton.click();
	}

	this.searchByEsiNumber = function(number){
		this.esiNumberInput.sendKeys(number);
		this.searchButton.click();
	}

	this.ClearAllSearchFields = function() {
		this.personalCodeInput.clear();
		this.nameInput.clear();
		this.esiNumberInput.clear();
	}
};

module.exports = PatientsSearchPage;