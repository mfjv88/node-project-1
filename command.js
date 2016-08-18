var help = require("./help");
var bac = require("./bac");

var argument = process.argv[2];

function command() {
    if (argument === "help") {
        help();
    } else if (argument === "bac") {
        bac();
    } else {
        console.log("This is not an accepted command!");
    }
}

module.exports = command;
