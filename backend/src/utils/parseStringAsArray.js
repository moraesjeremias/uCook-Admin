module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(cat => cat.trim());
}