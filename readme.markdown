# float-regex

regular expression for real floating point values in javascript notation:

``` js
module.exports = /[-+]?(?:\d*\.?\d+|\d+\.?\d*)(?:[eE][-+]?\d+)?/;
```

does not match:

* +/- Infinity
* NaN

# example

anchor a string:

``` js
var anchor = RegExp('^' + require('float-regex').source + '$');
console.log(anchor.test('1.23e24')); // true
console.log(anchor.test('1.23e24.55')); // false
```

capture floats:

``` js
var freg = require('float-regex').source;
var capture = RegExp('\\b(' + freg + ')\\b', 'g');
var str = '1.2  555    beep boop 4.2.1.5 66.2e99  22.54e23 qrs2';
console.log(str.match(capture));
```

which prints:

```
[ '1.2', '555', '4.2', '.1', '.5', '66.2e99', '22.54e23' ]
```

# install

With [npm](https://npmjs.org) do:

```
npm install float-regex
```

# license

MIT
