# misc-blocks/find-match-between-two-arrays
[![Try me in the TS Playground](https://shields.io/badge/-Try_me_in_the_TS_Playground-informational)](https://www.typescriptlang.org/play?ssl=5&ssc=4&pln=1&pc=1#code/PQKhCgAIUgBAHAhgJ0QW0oyBBZqCeUMCK6kARjnoodHMgKYAuArsgHYDOkA8uQFYMAxkyLBw4IQHsuTSADMAluwAmAWURMhACwBCzAO4MG7ACoGpuAtwC8kABSIAXFQIAedizTkGyAHwANBQuVjQeXj7+AJSQNn6QAN5QClLI9gBuKJCK2eyYMQmQRclFivKOAHTKKgwAHjzl5ADaigC6MfEAtACMBSVFkIysHJBMyCwMANz9AL7TRXPJQ2x58ogANpxT4IuSMpxyNWhS3bEK1RpaeobGZhah+Jz2Td0BAEwBAMytQU2fAQBWAIAFne7Wm0lkkCOUjeZyUqkuOn0TCMJnMlmoj2erzeP0gf0BAQAnOCJJDOFJ1gwKuspABzexJIow17JGFvHZRabgYDASDaJhMeCcJx8+mKJjaFjkCrSNDAbSKTpoTTkGXANCKThCTrkOlCADWnGAY2MmsQymA60U5GACJUKs0Oj1NxMnVRUk6KGskF5-MAvBuAaR2-UA)
[![Try me in the TS Playground](https://shields.io/badge/-View_Test_suite-yellow)](../../test/find-match-between-two-arrays.test.ts)


Function accepts 2 Arrays as arguments and returns a Object response for both matches and no-matches. 

```ts
const findMatchBetweenTwoArrays = (a: Array<number>, b: Array<number>) => {
  for(var i in a) {   
    if(a.indexOf(b[i]) > -1) {
      return { status: true, msg: b[i] };
    };
  };
  return { status: false };
};
```


### Example use case 
```ts
import { findMatchBetweenTwoArrays } from = 'misc-blocks/find-match-between-two-arrays'

findMatchBetweenTwoArrays([1,2,5], [5,3,6]); // { status: true, msg: 5 }
findMatchBetweenTwoArrays([0,0,0], [1,1,1]); // { status: false }
```