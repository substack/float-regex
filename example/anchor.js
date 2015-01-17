var anchor = RegExp('^' + require('../').source + '$');
console.log(anchor.test('1.23e24')); // true
console.log(anchor.test('1.23e24.55')); // false
