var colors = require("colors");

function help() {
    return "This app will calculate your Blood Alcohol Content (".yellow + "BAC".red + ") and will let you know if you can drive or not!\n\nYour options to run the program are the following: ".yellow + "bac".red + " and ".yellow + "help".red;
}

module.exports = help;
