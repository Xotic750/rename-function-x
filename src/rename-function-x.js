import getOwnPropertyDescriptor from 'object-get-own-property-descriptor-x';
import attempt from 'attempt-x';
import defineProperty from 'object-define-property-x';
import assertIsFunction from 'assert-is-function-x';
import isVarName from 'is-var-name';
import toStr from 'to-string-x';
import toBoolean from 'to-boolean-x';

const rename = function rename(fn, name) {
  const descriptor = getOwnPropertyDescriptor(fn, 'name');

  if (descriptor && descriptor.configurable) {
    defineProperty(fn, 'name', {configurable: true, value: name});
  }

  return fn.name;
};

export const supportsFunctionRenaming =
  attempt(function attemptee() {
    /* eslint-disable-next-line lodash/prefer-noop */
    return rename(function test1() {}, 'test2');
  }).value === 'test2';

// eslint-disable jsdoc/check-param-names
// noinspection JSCommentMatchesSignature
/**
 * Renames a function.
 *
 * @param {Function} fn - The function to be renamed.
 * @param {string} name - The new name for the function.
 * @param {boolean} [force=false] - Rename even if reported as not valid.
 * @returns {boolean} - Returns true if renaming was a success; otherwise false.
 */
// eslint-enable jsdoc/check-param-names
const renameFunction = function renameFunction(fn, name) {
  assertIsFunction(fn);
  const string = toStr(name);
  /* eslint-disable-next-line prefer-rest-params */
  const force = arguments.length > 2 && toBoolean(arguments[2]);

  if (force === false && isVarName(string) === false) {
    throw new Error(`Not a valid function name "${string}"`);
  }

  return supportsFunctionRenaming && rename(fn, name) === string;
};

export default renameFunction;
