function name(params) {
  return params; // O(1)
}

function sum(a, b) {
  return a + b / 2; // O(1)
}

function arrValue(arr, index) {
  return arr[index]; // O(1)
}

function objValue(obj, key) {
  return obj[key]; // O(1)
}

function pushToStack(stack, value) {
  stack.push(value); // O(1)
}
function popFromStack(stack) {
  return stack.pop(); // O(1)
}

// node linkied lsit
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
