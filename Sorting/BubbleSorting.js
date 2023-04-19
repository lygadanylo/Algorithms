const { EXAMPLE_ARRAY } = require("../util");

let iterations = 0;

(function bubbleSorting() {
  for (let i = 0; i < EXAMPLE_ARRAY.length; i++) {
    for (let j = 0; j < EXAMPLE_ARRAY.length; j++) {
      let temp;
      if (EXAMPLE_ARRAY[j + 1] < EXAMPLE_ARRAY[j]) {
        temp = EXAMPLE_ARRAY[j + 1];
        EXAMPLE_ARRAY[j + 1] = EXAMPLE_ARRAY[j];
        EXAMPLE_ARRAY[j] = temp;
      }
      iterations++;
    }
  }
})();

console.info(EXAMPLE_ARRAY);
console.info(`Working time O(n*n) => O(${iterations})`);
