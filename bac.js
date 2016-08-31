var prompt = require("prompt-sync")();
var colors = require("colors");

module.exports = {
  checkSex: function(sex) {
        if (sex === 1) {
            return 0.68;
        } else if (sex === 2) {
            return 0.55;
        } else {
            return false;
        }
    },

    checkBac: function(result) {
        if (result <= 0.08) {
            return "You're good to go!".green;
        } else {
            return "Pass the keys, man!".red;
        }
    },

    bac: function(sex, beers, weight, lastBeer) {
        newSex = checkSex(sex);
        beers = beers * 12 * 0.514;
        var bac = (beers / (weight * newSex));
        var result = bac - (lastBeer * 0.015);
        return checkBac(result);
      }
    };
