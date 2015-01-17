var regex = require('../');
var anchor = RegExp('^' + regex.source + '$');
var test = require('tape');

test('anchor', function (t) {
    t.ok(anchor.test('1'), '1');
    t.ok(anchor.test('1234'), '1234');
    t.ok(anchor.test('0.5'), '0.5');
    t.ok(anchor.test('.5'), '.5');
    t.notOk(anchor.test('.'), '!.');
    t.ok(anchor.test('5.'), '5.');
    t.ok(anchor.test('55.24'), '55.24');
    t.notOk(anchor.test('55.24.'), '!55.24.');
    t.notOk(anchor.test('55.24.3'), '!55.24.3');
    t.notOk(anchor.test('55..5'), '!55..5');
    t.ok(anchor.test('1.23e6'), '1.23e6');
    t.ok(anchor.test('1.23e-6'), '1.23e-6');
    t.notOk(anchor.test('1.23e-6.5'), '1.23e6.5');
    t.ok(anchor.test('1.e-6'), '1.e-6');
    t.ok(anchor.test('1.E-6'), '1.E-6');
    t.ok(anchor.test('.4e-6'), '.4e-6');
    t.ok(anchor.test('.0e55'), '.0e55');
    t.end();
});
