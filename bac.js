var prompt = require("prompt-sync")();
var colors = require("colors");
var checkSex = require("./checksex");
var checkBac = require("./checkbac");

function bac() {
    var name = prompt("What's your name? ");
    var sex = Number(prompt("Write 1 if Male or 2 if Female: "));
    checkSex(sex);
    var weight = Number(prompt("What is your weight in pounds? "));
    var beers = Number(prompt("How many beers have you had? "));
    beers = beers * 12 * 0.514;
    var bac = (beers / (weight * sex));
    var lastBeer = Number(prompt("How many hours ago was your last beer? "));
    var result = bac - (lastBeer * 0.015);
    checkBac(result);
}

module.exports = bac;
