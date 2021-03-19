const { findMatchBetweenTwoArrays } = require('../lib');

describe('find-match-between-two-arrays', () => {
  it('should match on "5"', () => (
    expect(findMatchBetweenTwoArrays([1,2,5], [5,3,6]))
      .toStrictEqual({status: true, msg: 5})
  ));

  it('should return a falsy value if no match', () => (
    expect(findMatchBetweenTwoArrays([0,0,0], [1,1,1]))
      .toStrictEqual({status: false})
  ));
});