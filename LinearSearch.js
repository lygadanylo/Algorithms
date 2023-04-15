const { EXAMPLE_ARRAY } = require("./util");

let iterations = 0;

function search(item) {
  for (let i = 0; i < EXAMPLE_ARRAY.length; i++) {
    iterations++;
    if (EXAMPLE_ARRAY[i] === item) {
      return `Index of elemen: ${i}`;
    }
  }
  return "Not found";
}

const result = search(99);

console.info(result);
console.info(`Working time O(n) => O(${iterations})`);
