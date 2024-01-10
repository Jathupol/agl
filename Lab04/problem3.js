//Problem 3: Find Min

function findMin(arr) {
    let low = 0;
    let high = arr.length - 1;
  
    while (low < high) {
      const mid = Math.floor((low + high) / 2);
  
      if (arr[mid] > arr[high]) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
  
    return arr[low];
  }
  
  // Test cases
  console.log(findMin([1, 2, 3, 4, 5])); // Output: 1
  console.log(findMin([3, 4, 5, 1, 2])); // Output: 1
  