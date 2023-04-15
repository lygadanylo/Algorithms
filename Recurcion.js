function logarifm(n) {
  if (n === 1) {
    return n;
  }
  return n * logarifm(n - 1);
}

console.log(logarifm(10));
