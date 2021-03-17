/**
 * only execute function once
 */

const once = (function() {
  let executed = false;
  return function() {
      if (!executed) {
          executed = true;
          console.log("Hello, World!")
      }
  };
})();

once(); 
once(); // nothing happens
