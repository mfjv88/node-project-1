var help = require("./help");
var bac = require("./bac");
var prompt = require("prompt-sync")();

var argument = process.argv[2];

console.reset = function () {
  return process.stdout.write('\033c');
};

if (argument === "help") {
    help();
} else if (argument === "bac") {
    var name = prompt("What's your name? ");
    var sex = Number(prompt("Write 1 if Male or 2 if Female: "));
    var weight = Number(prompt("What is your weight in pounds? "));
    var beers = Number(prompt("How many beers have you had? "));
    var lastBeer = Number(prompt("How many hours ago was your last beer? "));
    bac(sex, beers, weight, lastBeer);
    setTimeout(console.reset, 3000);
} else {
    console.log("This is not an accepted command!");
}
