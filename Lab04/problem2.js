//Problem 2: หาเลขหนึ่งตัวแรกจาก Array

function findFirstOne(arr) {
    let low = 0;
    let high = arr.length - 1;
    let result = -1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
  
      if (arr[mid] === 1) {
        result = mid;
        high = mid - 1; // เลื่อน high มายังด้านซ้ายของ mid เพื่อหาตัวแรกที่มีค่าเป็น 1
      } else {
        low = mid + 1; // ถ้า arr[mid] เป็น 0 ก็เลื่อน low ไปยังด้านขวาของ mid
      }
    }
  
    return result;
  }
  
  // Test cases
  console.log(findFirstOne([0,0,1,1,1])); // Output: 2
  console.log(findFirstOne([0,0,0,0,1,1,1,1])); // Output: 4
  