function checkSex(sex) {
    if (sex === 1) {
        sex = 0.68;
    } else if (sex === 2) {
        sex = 0.55;
    } else {
        console.log("This is not a valid entry");
    }
}

module.exports = checkSex;
