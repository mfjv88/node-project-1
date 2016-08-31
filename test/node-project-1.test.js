var expect = require("chai").expect;
var colors = require("colors");
var bac = require("../bac");
var help = require("../help");

describe('help', function(){
	it("should say This app will calculate your Blood Alcohol Content (BAC) and will let you know if you can drive or not!\n\nYour options to run the program are the following: bac and help", function(){
		expect(help()).to.equal("This app will calculate your Blood Alcohol Content (".yellow + "BAC".red + ") and will let you know if you can drive or not!\n\nYour options to run the program are the following: ".yellow + "bac".red + " and ".yellow + "help".red);
	});
});

describe('bac', function(){
	it("should say You're good to go!", function(){
		var pass = bac.checkBac(0.07);
		expect(pass).to.equal("You're good to go!".green);
	});
	it("should say Pass the keys, man!", function(){
		var fail = bac.checkBac(0.10);
		expect(fail).to.equal("Pass the keys, man!".red);
	});
	it("should say 0.68", function(){
		var male = bac.checkSex(1);
		expect(male).to.equal(0.68);
	});
	it("should say 0.55", function(){
		var female = bac.checkSex(2);
		expect(female).to.equal(0.55);
	});
	it("should say false", function(){
		var error = bac.checkSex(0);
		expect(error).to.equal(false);
	});
});
