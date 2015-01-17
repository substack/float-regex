var freg = require('../').source;
var capture = RegExp('\\b(' + freg + ')\\b', 'g');
var str = '1.2  555    beep boop 4.2.1.5 66.2e99  22.54e23 qrs2';
console.log(str.match(capture));
