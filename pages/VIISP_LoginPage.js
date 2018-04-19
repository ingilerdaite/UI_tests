'use strict';
var LoginPage = function() {
	this.userInput = element(by.model('viisp.user'));
  	this.passwordInput = element(by.id('password'));
  	this.viisploginButton = element(by.id('login-viisp-button'));
  	this.loginButton = element(by.id('login-button'));
  	this.loginTitle = element(by.css('[data-translate="login.title"]'));

	this.get = function() {
		browser.get(browser.params.url + "/#/login");
	};


	this.login = function() {
		this.userInput.$('[label="rutakazl1005"]').click();
		this.viisploginButton.click();
		this.passwordInput.sendKeys("Admin1234567*");
		this.loginButton.click();
	};

};

module.exports = LoginPage;