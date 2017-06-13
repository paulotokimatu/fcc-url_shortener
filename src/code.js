var rule = {};
var alphabet = "rWYsZzeU2G5nuh4MLcN3gS6Ha91ifyDTkF7wBRxJjqPv8dVCpoQXmtEbKA";
var base = alphabet.length;

rule.encode = function(number) {
    var coded = "";
    while (number > 0) {
      	coded = alphabet.charAt(number % base) + coded;
        number = Math.floor(number / base);
    }
    return coded;
};

rule.decode = function(coded) {
    var decoded = 0;
    while (coded) {
      	var index = alphabet.indexOf(coded[0]);
      	var power = coded.length - 1;
      	decoded += index * (Math.pow(base, power));
        coded = coded.substring(1);
    }
    return decoded;
};

module.exports = rule;