/**
 * @param q Number | String | Boolean
 * @param arr Array<number | string | boolean>
 * @returns Object
 */

 module.exports = (q: Number | String | Boolean ,arr: Array<number | string | boolean>) => {
  let qty = 0;
  for(let i in arr) if (q === arr[i]) qty += 1;
  return qty ? { status: true, qty } : { status: false };
};
