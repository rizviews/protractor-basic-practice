var SuperCalculatorHomePage = function () {

	var header = element(by.tagName('h3'));
	var textboxFirst = element(by.model('first')); 
	var textBoxSecond = element(by.model('second'));
	var goButton = element(by.id('gobutton'));
	var textBoxResult = element(by.binding('latest'));

	this.selectOperator = function (index) {
		var allOptions = element.all(by.options('value for (key, value) in operators'));
		//var firstOption = allOptions.first();
		allOptions.get(index).click();
		//expect(firstOption.getText()).toEqual('red');
	};

	this.navigateTo = function (url) {
		browser.get(url);
		var until = protractor.ExpectedConditions;
		browser.wait(until.presenceOf(header), 5000, 'Element taking too long to appear in the DOM');
	};

	this.getHeaderText = function () {
		return header.getText();
	};

	this.add = function (number1, number2) {
		textboxFirst.sendKeys(number1);
		textBoxSecond.sendKeys(number2);

		goButton.click();

		return textBoxResult.getText();
	};

	this.subtract = function (number1, number2) {
		textboxFirst.sendKeys(number1);
		textBoxSecond.sendKeys(number2);
		var allOptions = element.all(by.options('value for (key, value) in operators'));
		allOptions.get(4).click();
		goButton.click();

		return textBoxResult.getText();


	};
};
module.exports = new SuperCalculatorHomePage();