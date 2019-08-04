import renameFunction from '../src/rename-function-x';

describe('renameFunction', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof renameFunction).toBe('function');
  });

  it('should throw when fn not a function', function() {
    expect.assertions(1);
    expect(function() {
      renameFunction(null, 'newname');
    }).toThrowErrorMatchingSnapshot();
  });

  it('should throw if name is invalid', function() {
    expect.assertions(1);
    expect(function() {
      renameFunction(function() {}, 'catch');
    }).toThrowErrorMatchingSnapshot();
  });

  it('rename can be forced', function() {
    expect.assertions(1);
    expect(function() {
      renameFunction(function() {}, 'catch', true);
    }).not.toThrow();
  });

  it('should return a boolean representing success', function() {
    expect.assertions(2);

    const fn = function test1() {};

    const actual = renameFunction(fn, 'newname');

    expect(typeof actual).toBe('boolean');
    expect(fn.name).toBe(actual ? 'newname' : 'test1');
  });
});
