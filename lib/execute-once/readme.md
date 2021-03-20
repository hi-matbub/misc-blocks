# misc-blocks/find-match-between-two-arrays
[![Try me in the TS Playground](https://shields.io/badge/-Try_me_in_the_TS_Playground-informational)](https://www.typescriptlang.org/play?ssl=4&ssc=4&pln=1&pc=1#code/PQKhCgAIUgBAHAhgJ0QW0ig5pgdgTyhlmQFMAXAV2VwGc9DphxwAzS3AY3IEsB7XJFIAPUp0rlSAeS6kAFAEpIAbyiQANhSGjxkgCaQAvJFaJ1tUgG41ZKjRMdu-XHOwAuBktWQfvnq0g5AEIRMQlSPS81X19Q3QijSHJkSitomMhbakFsRWsMyABfdJ8smnyi60LrcE4BWnJIAU5SRLjwmRa8ljq6Rr1SND4ARkTm+UUjAD5IACIACVJ1dT4AGkgAdT5kdT0g2YVrXobIAaGAJjHZOUnDGYWllfWtnb2DmuO+TQA6Faw5bynQYjdZqM58c6rcCFQ4sYDASAAC3I5HgtDc8KwPHIiMoACNvnU0MBETwALRoRDkPH44B4lacADW9EAvBuAaR3IOAgA)
[![View Test Suite](https://shields.io/badge/-View_Test_suite-yellow)](https://github.com/hi-matbub/misc-blocks/tree/main/test/execute-once.test.ts)

Function must be set once then invoked as a new method. Will return `undefined` on repeated calls.

```ts
const executeOnce = function() {
  let executed = false;
  return function(arg: any) {
    if (!executed) {
      executed = true;
      return arg();
    }
    return;
  };
};
```


### Example use case 
```ts
const executeOnce = require('misc-blocks/execute-once');

const once = executeOnce();

once(() => "Hello, World!"); // "Hello, World!"
once(() => "Hello, World!"); // undefined 
```