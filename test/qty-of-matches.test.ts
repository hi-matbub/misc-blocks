const { qtyOfMatches } = require('../lib');

describe('sequential-search', () => {
  it('should return a truthy value on Integer match', () => (
    expect(qtyOfMatches(3, [1,2,3,4,4,3,3]))
      .toStrictEqual({ "status": true, "qty": 3 })
  ));

  it('should return a truthy value on String match', () => (
    expect(qtyOfMatches(true, [true,false,true,true]))
      .toStrictEqual({ "status": true, "qty": 3 })
  ));

  it('should return a truthy value on Boolean match', () => (
    expect(qtyOfMatches("John Doe", ["John Doe",2,false,"John Doe"]))
      .toStrictEqual({ "status": true, "qty": 2 })
  ));

  it('should return a falsy value if no match', () => (
    expect(qtyOfMatches("Coffee", ["Decaf",2,false]))
      .toStrictEqual({ "status": false })
  ));
});