// spec.js
var superCalculatorPage = require('./pages/homepage.js');

describe('SuperCalculator app', function () {
	it('should have a title', function () {

		superCalculatorPage.navigateTo("http://juliemr.github.io/protractor-demo/");

		expect(superCalculatorPage.getHeaderText()).toEqual('Super Calculator');
	});

	it('should add one and three', function () {
		expect(superCalculatorPage.add(1, 3)).toEqual('4');
	});

	it('should deduct 5 from 7', function () {
		expect(superCalculatorPage.subtract(7, 5)).toEqual('2');
	});
});