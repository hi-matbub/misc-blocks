const { findMaximumValue } = require('../lib');

describe('find-maximum-value', () => {
  it('should return truthy value', () => expect(findMaximumValue([5,12,19,87])).toBe(87));
  it('should return truthy value', () => expect(findMaximumValue([4,3,23,2])).toBe(23));
});