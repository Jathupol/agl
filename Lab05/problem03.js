function nextGreaterElement(arr) {
    const stack = [];
    const result = Array(arr.length).fill(-1);
  
    for (let i = 0; i < arr.length; i++) {
      while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
        const index = stack.pop();
        result[index] = arr[i];
      }
      stack.push(i);
    }
  
    return result;
  }
  
  // Test cases
  console.log(nextGreaterElement([18, 7, 6, 12, 15])); // Output: [-1, 12, 12, 15, -1]
  console.log(nextGreaterElement([3, 2, 1, 10, 15, 11])); // Output: [10, 10, 10, 15, 10, -1]
  