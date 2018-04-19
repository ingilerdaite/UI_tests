var VIISP_LoginPage = require('../pages/VIISP_LoginPage.js');
var WorkplaceSelectPage = require('../pages/WorkplaceSelectPage.js');
var HomePage = require('../pages/HomePage.js');
var MyPatientsListPage = require('../pages/MyPatientsListPage.js');
//var PatientCardPage = require('../pages/PatientCardPage.js');
//var GeneralDataPage = require('../pages/GeneralDataPage.js');
//var PregnancyDataPage = require('../pages/PregnancyDataPage.js');
//var CarePlanPage = require('../pages/CarePlanPage.js');

describe("Complete Visit:", function() {
	var homePage = new HomePage();
	var myPatientsListPage = new MyPatientsListPage();
	//var patientCardPage = new PatientCardPage();
	//var generalDataPage = new GeneralDataPage();
	//var pregnancyDataPage = new PregnancyDataPage();
	//var carePlanPage = new CarePlanPage();

	beforeAll(function() {
		homePage.get();
		myPatientsListPage.get();
		/*patientCardPage.get();
		generalDataPage.get();
		pregnancyDataPage.get();
		carePlanPage.get();*/
	});

describe ("When select work place", function() {
		it ("Should to navigate my patient list", function() {
			homePage.linkToPatientsList();
			
		});

describe ("When select my patient", function() {
		it ("Should to navigate patient card", function() {
			myPatientsListPage.linkToPatientsSearch();
			
		});

	