<a
  href="https://travis-ci.org/Xotic750/rename-function-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/rename-function-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/rename-function-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/rename-function-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/rename-function-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/rename-function-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/rename-function-x"
  title="npm version">
<img src="https://badge.fury.io/js/rename-function-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/rename-function-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/rename-function-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/rename-function-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/rename-function-x?branch=master"
  alt="bettercodehub score" height="18">
</a>

## rename-function-x

Rename a function.

Note: This is not supported in all environments.
See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#Browser_compatibility

**Example**

```js
import renameFunction from 'rename-function-x';

const fn = function test() {};
console.log(renameFunction(fn, 'hw')); // true if a success, else false
console.log(fn.name); // hw if set, else test

// The following would normally throw an error as it is a reserved name.
// However, you can for the rename as follows.
console.log(renameFunction(fn, 'catch', true)); // true if a success, else false
```
