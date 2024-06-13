function square(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      count++;
      console.log(count);
    }
  }
}
square(2);
