const { EXAMPLE_ARRAY } = require("../util");

let iterations = 0;

(function sortArray() {
  for (let i = 0; i < EXAMPLE_ARRAY.length; i++) {
    for (let j = 0; j < EXAMPLE_ARRAY.length; j++) {
      let temp;
      if (EXAMPLE_ARRAY[i] < EXAMPLE_ARRAY[j]) {
        temp = EXAMPLE_ARRAY[i];
        EXAMPLE_ARRAY[i] = EXAMPLE_ARRAY[j];
        EXAMPLE_ARRAY[j] = temp;
      }
    }
  }
})();

function binarySearch(key) {
  let start = 0;
  let end = EXAMPLE_ARRAY.length - 1;

  while (start <= end) {
    iterations++;
    let middle = Math.floor((start + end) / 2);

    if (EXAMPLE_ARRAY[middle] === key) {
      return middle;
    } else if (EXAMPLE_ARRAY[middle] < key) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}

const result = binarySearch(30);

console.info(result);
console.info(`Working time O(log2n) => O(log2(${iterations}))`);
