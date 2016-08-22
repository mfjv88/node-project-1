function checkBac(result) {
    if (result <= 0.08) {
        return "You're good to go!".green;
    } else {
        return "Pass the keys, man!".red;
    }
}

module.exports = checkBac;
