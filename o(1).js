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
function insertAtBeginning(list, value) {
  const newNode = new Node(value);
  newNode.next = list.head;
  list.head = newNode; // O(1)
}
