var mocha = require("mocha").expect;
var project1 = require("../node-project-1");

describe('node-project-1', function(){
	it("should say You're good to go!", function(){
		var results = project1();
		expect(results).to.equal("You're good to go!");
	});
	it("should say Pass the keys, man!", function(){
		var results = project1();
		expect(results).to.equal("Pass the keys, man!");
	});
});
