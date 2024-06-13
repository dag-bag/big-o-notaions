// function logn(n) {
//   if (n === 0) return "done";
//   n = Math.floor(n / 2);
//   return logn(n);
// }

// console.log(logn(1000000));

// BINARY SEARCH
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const start = 0;
const end = arr.length - 1;
let target = 8;

function BINARY_SEARCH(arr, start, end, target) {
  let midIndex = getMiddleIndex(start, end);
  if (arr[midIndex] === target) return `true {value:${arr[midIndex]}}`;
  //right side found my tawrget is 8
  if (arr[midIndex] > target) console.log(arr[midIndex], target);
}

function getMiddleIndex(start, end) {
  const mid = Math.floor(start + end / 2);
  return mid;
}

console.log(BINARY_SEARCH(arr, start, end, target));
