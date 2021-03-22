# misc-blocks/find-maximum-value

[![Try me in the TS Playground](https://shields.io/badge/-Try_me_in_the_TS_Playground-informational)](https://www.typescriptlang.org/play?#code/PQKhCgAIUqYAQA4EMBOyC2k2sgQVXQE9ZpJ5UBTAFwFdUA7AZ0gDlaMAjS1OYccAGMA9s2qQAZgEsGAEwCyyAB5SMHAGrIANrUqQAvJAAUOAFz5CyIgB4GHbqgB8ASgOPIAbyiQtNSEoNsQgBtAAYAXQBubwlhXCMfPylIGSDUVykJIwD3HGCpcNcAwzyC6MhIKjpGf2iAX2ihUSZxWUoMYQBGQOk5RRU1DE0dSiNggFYAGk6AJmmATkmADgB2QsjIYGBIVaaxSDaOmZ6ZBWVVDW1dMYAWSYBmSZnHmfXN7eeBEWZhXwA6LTCADmRi8FUOXUm3ghM3AdWc0SAA)
[![View Test Suite](https://shields.io/badge/-View_Test_Suite-yellow)](../../test/find-maximum-value.test.ts)

Accepts an Array of Numbers, returns the greatest number.

```js
const findMaximumValue = (arr: Array<number>) => {
  let x = arr[0];
  for ( let i in arr) if(x < arr[i]) x = arr[i];
  return x;
};
```


### Example use case 
```ts
const findMaximumValue = require('misc-blocks/find-maximum-value');

findMaximumValue([5,12,19,87]); // 5
findMaximumValue([4,3,23,2]); // 4
```