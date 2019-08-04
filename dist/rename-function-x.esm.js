import getOwnPropertyDescriptor from 'object-get-own-property-descriptor-x';
import attempt from 'attempt-x';
import defineProperty from 'object-define-property-x';
import assertIsFunction from 'assert-is-function-x';
import isVarName from 'is-var-name';
import toStr from 'to-string-x';

var rename = function rename(fn, name) {
  var descriptor = getOwnPropertyDescriptor(fn, 'name');

  if (descriptor && descriptor.configurable) {
    defineProperty(fn, 'name', {
      configurable: true,
      value: name
    });
  }

  return fn.name;
};

export var supportsFunctionRenaming = attempt(function attemptee() {
  /* eslint-disable-next-line lodash/prefer-noop */
  return rename(function test1() {}, 'test2');
}).value === 'test2';
/**
 * Renames a function.
 *
 * @param {Function} fn - The function to be renamed.
 * @param {string} name - The new name for the function.
 * @returns {boolean} - Returns true if renaming was a success; otherwise false.
 */

var renameFunction = function renameFunction(fn, name) {
  assertIsFunction(fn);
  var string = toStr(name);

  if (isVarName(string) === false) {
    throw new Error("Not a valid function name \"".concat(string, "\""));
  }

  return supportsFunctionRenaming && rename(fn, name) === string;
};

export default renameFunction;

//# sourceMappingURL=rename-function-x.esm.js.map