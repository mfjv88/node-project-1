function checkSex(sex) {
    if (sex === 1) {
        return 0.68;
    } else if (sex === 2) {
        return 0.55;
    } else {
        return false;
    }
}

module.exports = checkSex;
