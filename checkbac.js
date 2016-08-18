function checkBac(result) {
    if (result <= 0.08) {
        console.log("You're good to go!".green);
    } else {
        console.log("Pass the keys, man!".red);
    }
}

module.exports = checkBac;
