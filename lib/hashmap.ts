/**
 * 
 * @param arr 
 * @returns true on first duplicate found 
 */

const hashmap = (arr: any) => {
  
  const obj: {[index: string]: any} = {}

  for(let i = 0; i < arr.length; i += 1) {
    // if i matches item in object   

    if (obj[arr[i]]) {
      console.log(`match located: ${arr[i]}`)
      return true;
    };

    // set key to true
    obj[arr[i]] = true;
  };
  return false;
};

hashmap([1,2,3,4,5,6,4]);
hashmap([2,3,4,3,4]);
