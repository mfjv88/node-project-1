var mocha = require("mocha").expect;
var project1 = require("../node-project-1");

describe('node-project-1', function(){
	it("should say You're good to go!", function(){
		var results = command();
		expect(results).to.equal("You're good to go!");
	});
	it("should say Pass the keys, man!", function(){
		var bac = bac();
		expect(bac).to.equal("Pass the keys, man!");
	});
	it("should say Pass the keys, man!", function(){
		var checkSex = checkSex(1);
		expect(checkSex).to.equal(0.68);
	});
	
});
