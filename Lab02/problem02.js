// Problem 2: Max Subarray
// กำหนดให้ arr จำนวนเต็มมา, หา subarray ที่มีผลบวกมากที่สุดและ return ค่านั้นออกมา

function maxSubArray(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      currentSum = Math.max(arr[i], currentSum + arr[i]);
      maxSum = Math.max(maxSum, currentSum);
    }
  
    return maxSum;
  }
  
  // Test cases
  console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
  console.log(maxSubArray([1])); // Output: 1
  console.log(maxSubArray([5, 4, -1, 7, 8])); // Output: 23
  