function liner(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // O(n)
  }
}

liner(Array.from({ length: 100 }, (x, k) => k));
