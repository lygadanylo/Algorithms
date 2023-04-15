const { EXAMPLE_ARRAY } = require("./util");

let iterations = 0;

(function selectionSorting() {
  for (let i = 0; i < EXAMPLE_ARRAY.length; i++) {
    let temp;
    let minIndex = i;
    for (let j = i + 1; j < EXAMPLE_ARRAY.length; j++) {
      if (EXAMPLE_ARRAY[j] < EXAMPLE_ARRAY[minIndex]) {
        minIndex = j;
      }
      iterations++;
    }
    temp = EXAMPLE_ARRAY[i];
    EXAMPLE_ARRAY[i] = EXAMPLE_ARRAY[minIndex];
    EXAMPLE_ARRAY[minIndex] = temp;
  }
})();

console.info(EXAMPLE_ARRAY);
console.info(`Working time O(n*n) => O(${iterations})`);
