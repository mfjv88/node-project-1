var prompt = require("prompt-sync")();
var colors = require("colors");
var checkSex = require("./checksex");
var checkBac = require("./checkbac");

function bac(sex, beers, weight, lastBeer) {
    newSex = checkSex(sex);
    beers = beers * 12 * 0.514;
    var bac = (beers / (weight * newSex));
    var result = bac - (lastBeer * 0.015);
    return checkBac(result);
}

module.exports = bac;
