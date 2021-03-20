# misc-blocks/qty-of-matches

[![Try me in the TS Playground](https://shields.io/badge/-Try_me_in_the_TS_Playground-informational)](https://www.typescriptlang.org/play?#code/PQKhCgAIUgBAHAhgJ0QW0gR0gOQK5oBGApspAD6QDKALsgJYB2A5hZAEID2nANsYoygwEKdJBRkAgslQBPADyMCJMpQDOdJq0qFufAQD4hcZMRp5kjNZADyhAFbEAxjSHBw4J5ys0sNWTYAZgCyiDROABbE1gC8kAAUmABcuMqkbLQMLGxcvPyMkAA0EinScoppqpAaWdqQunmGAJSQMQaQAN5QkHy+mP6tkAAMANzdgZzI8b2Q9LMFEi30gQnYMeviMgDa9AC6Lf2ykADUcQCMY92m5pZ+RwD8ndU0YXhqKXR4xIV3kAC+kBSHWer3ekECiB4amI-zGf0uXh8kAAJsQ0JwzoNDkFQuEomp4gBmH5bM6FABMhWJABZCrTiYT9iNIMBgE8AEQaUHsj7IL4-dmHHmQQn-TzeDQotGcclY-w4sKRaLxT7fSBbVWFCFQ76a1VMlls4Gcl7mNTCzWQQX+YWiv7ipGo9GiuLYkKK-HxdkAKU4EQKABFOMR2SSfX7A8HQ5TtdDCuH-ZAgyGDayOVyzRa+WrrbJhbL7YjJU7ONS5QF3XjleyAMKcQKBYghsMB5yIQLRrWQ6Gpo1WjNvYWxmH2h1qPIAOh4nGY8S6kCl6LJ3RLlJX0uJ6-RtPAfyaHjTERoNHg71ZzHoNAieEIE68aGAEXoAFo0GFCDfgGh6GonM-CNOTgANbWEAA)
[![View Docs](https://shields.io/badge/-View_Docs-orange)](../../test/qty-of-matches.test.ts)

Accepts var to query and Array to query through. Returns and Object containing number of repeated occurances.

```ts
const qtyOfMatches = (q: Number | String | Boolean ,arr: Array<number | string | boolean>) => {
  let qty = 0;
  for(let i in arr) if (q === arr[i]) qty += 1;

  return qty ? { status: true, qty } : { status: false };
};
```

### Example use case

```js
const qtyOfMatches = require('misc-blocks/qty-of-matches');

qtyOfMatches(3, [1,2,3,4,4,3,3]); // { "status": true, "qty": 3 }
qtyOfMatches("Coffee", ["Decaf",2,false]); // { "status": false }
```