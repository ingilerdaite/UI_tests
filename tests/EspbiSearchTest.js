var PatientsSearchPage = require('../pages/PatientsSearchPage.js');

describe("ESPBI search:", function() {
	var searchPage = new PatientsSearchPage();

	beforeAll(function() {
		searchPage.get();
	});

	describe ("When search by existing personal code", function() {
		it ("Should find patients information", function() {
			searchPage.ClearAllSearchFields();
			searchPage.searchByPersonalCode("49012111057");
			expect(searchPage.searchResultEsiNumber.getText()).toEqual('patient-160520-00002');
		});
	});

	describe ("When search by existing name", function() {
		it ("Should find patients information with this name", function() {
			searchPage.ClearAllSearchFields();
			searchPage.searchByName("Sandra Ingilerdaitė");
			expect(searchPage.searchResultEsiNumber.getText()).toEqual('patient-160520-00002');
		});
	});

	describe ("When search by existing esi number", function() {
		it ("Should find patients information with this esi number", function() {
			searchPage.ClearAllSearchFields();
			searchPage.searchByEsiNumber("patient-160414-00048");
			expect(searchPage.searchResultEsiNumber.getText()).toEqual('patient-160414-00048');
		});
	});
});